import { Container, Typography, Paper, Box, Stack } from "@mui/material"
import { useEffect, useState } from "react";
import BookingTicket from "../components/BookingTicket";
import axios from "axios";

export default function Profile() {

  const [bookingsToRender, setBookingsToRender] = useState([]);

  async function fetchAllTickets() {
    try {
      const rawData = localStorage.getItem('user');

      if (!rawData) {
        console.log("No data found in 'user' key");
        return;
      }

      const {email} = JSON.parse(rawData);
      const res = await axios.get(`http://localhost:8888/booking/${email}`);
      setBookingsToRender(res.data);
    } catch (error) {
      console.error("JSON Parsing Error:", error);
    }
  }

  useEffect(()=>{
    fetchAllTickets();
  }, []);
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        My Bookings
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, bgcolor: 'transparent' }}>
        
        {/* Page Header */}
        <Box mb={3}>
            <Typography variant="h4" fontWeight="700" color="text.primary">
                My Bookings
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Manage your past and upcoming trips
            </Typography>
        </Box>

        {/* List of Tickets */}
        <Stack spacing={3}>
            {bookingsToRender.map((booking, index) => (
                <BookingTicket key={index} />
            ))}
        </Stack>

      </Paper>
    </Container>
  )
}