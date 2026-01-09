import React, { useState } from 'react';
import { 
  Card, 
  Typography, 
  Box, 
  Stack, 
  Chip, 
  Grid, 
  Button, 
  IconButton, 
  Tooltip,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert
} from '@mui/material';
import { 
  DirectionsBus, 
  ArrowRightAlt, 
  CalendarToday, 
  EventSeat, 
  ContentCopy,
  Download,
  AccessTime
} from '@mui/icons-material';

const BookingTicket = ({ 
  operatorName = "Shanmukh North Travels",
  pnr = "82349123",
  from = "Punjab",
  to = "Haryana",
  date = "2026-01-07",
  depTime = "23:00",
  arrTime = "04:00",
  seat = "S48",
  price = 1000,
  status = "Confirmed" 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [toastOpen, setToastOpen] = useState(false);

  // --- Helpers ---
  const formatPrice = (amount) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

  const formatDate = (dateString) => 
    new Date(dateString).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'success';
      case 'pending': return 'warning';
      case 'cancelled': return 'error';
      default: return 'default';
    }
  };

  const handleCopyPnr = () => {
    navigator.clipboard.writeText(pnr);
    setToastOpen(true);
  };

  return (
    <>
      <Card 
        elevation={0}
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'grey.300',
          overflow: 'visible', // Important for the "notches"
          position: 'relative',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': { 
            transform: 'translateY(-2px)', 
            boxShadow: theme.shadows[4],
            borderColor: 'primary.main'
          }
        }}
      >
        {/* --- LEFT SECTION: Journey Info --- */}
        <Box sx={{ flex: 1, p: 3, position: 'relative' }}>
          
          {/* Header */}
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ p: 1, bgcolor: 'primary.lighter', borderRadius: 2, color: 'primary.main', bgcolor: '#e3f2fd' }}>
                <DirectionsBus fontSize="small" />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="700" lineHeight={1.2}>
                  {operatorName}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="caption" color="text.secondary">PNR: {pnr}</Typography>
                  <Tooltip title="Copy PNR">
                    <IconButton size="small" onClick={handleCopyPnr} sx={{ p: 0.5 }}>
                      <ContentCopy sx={{ fontSize: 14 }} />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Box>
            </Stack>

            <Chip 
              label={status} 
              color={getStatusColor(status)} 
              size="small" 
              sx={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.7rem', height: 24 }}
            />
          </Stack>

          {/* Route Grid */}
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={5}>
              <Typography variant="h4" fontWeight="800" color="text.primary">
                {depTime}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontWeight="500">
                {from}
              </Typography>
            </Grid>
            
            <Grid item xs={2} display="flex" flexDirection="column" alignItems="center">
              <AccessTime sx={{ fontSize: 16, color: 'text.disabled', mb: 0.5 }} />
              <ArrowRightAlt color="action" />
              <Typography variant="caption" color="text.disabled">5h 00m</Typography>
            </Grid>
            
            <Grid item xs={5} textAlign="right">
              <Typography variant="h4" fontWeight="800" color="text.primary">
                {arrTime}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontWeight="500">
                {to}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* --- DIVIDER WITH NOTCHES (The "Ticket" Look) --- */}
        <Box 
          sx={{ 
            position: 'relative',
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: '100%', sm: '1px' },
            height: { xs: '1px', sm: 'auto' },
          }}
        >
          {/* Dashed Line */}
          <Box sx={{ 
            borderLeft: { sm: '2px dashed #e0e0e0' }, 
            borderTop: { xs: '2px dashed #e0e0e0' },
            width: '100%',
            height: '100%'
          }} />

          {/* Top Notch (Desktop) / Left Notch (Mobile) */}
          <Box sx={{
            position: 'absolute',
            width: 20, height: 20,
            bgcolor: 'background.default', // Matches page background
            borderRadius: '50%',
            border: '1px solid #e0e0e0',
            top: { sm: -10 }, left: { xs: -10, sm: 'auto' },
            right: { sm: 'auto' },
            zIndex: 1
          }} />

           {/* Bottom Notch (Desktop) / Right Notch (Mobile) */}
           <Box sx={{
            position: 'absolute',
            width: 20, height: 20,
            bgcolor: 'background.default',
            borderRadius: '50%',
            border: '1px solid #e0e0e0',
            bottom: { sm: -10 }, right: { xs: -10, sm: 'auto' },
            zIndex: 1
          }} />
        </Box>

        {/* --- RIGHT SECTION: Meta & Actions --- */}
        <Box sx={{ 
          width: { xs: '100%', sm: 240 }, 
          bgcolor: 'grey.50', 
          p: 3, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center'
        }}>
          
          <Stack spacing={2}>
            {/* Date */}
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" gap={1} color="text.secondary">
                <CalendarToday fontSize="small" />
                <Typography variant="body2">Date</Typography>
              </Box>
              <Typography variant="body2" fontWeight="600">{formatDate(date)}</Typography>
            </Box>

            {/* Seat */}
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" gap={1} color="text.secondary">
                <EventSeat fontSize="small" />
                <Typography variant="body2">Seat</Typography>
              </Box>
              <Typography variant="body2" fontWeight="600">{seat}</Typography>
            </Box>

            <Box sx={{ borderTop: '1px dashed #e0e0e0', my: 1 }} />

            {/* Price */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" color="text.secondary">Total Paid</Typography>
              <Typography variant="h6" color="primary.main" fontWeight="800">
                {formatPrice(price)}
              </Typography>
            </Box>

            {/* Action Button */}
            <Button 
              variant="outlined" 
              startIcon={<Download />} 
              fullWidth
              sx={{ 
                mt: 1, 
                borderRadius: 2, 
                textTransform: 'none',
                fontWeight: 600 
              }}
            >
              Download Ticket
            </Button>
          </Stack>
        </Box>
      </Card>

      {/* Copy Feedback */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={2000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          PNR Copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default BookingTicket;