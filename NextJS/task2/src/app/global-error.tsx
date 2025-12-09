'use client'; // This directive is mandatory for error handling

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div
          style={{
            display: 'flex',
            height: '100vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            fontFamily: 'system-ui, sans-serif',
            color: '#000',
          }}
        >
          {/* This matches your desired Custom 500 output */}
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            500 - Server-side error occurred custom
          </h1>
          
          <p style={{ color: '#666' }}>
            The server encountered a critical error.
          </p>

          {/* Optional: A button to attempt recovery */}
          <button
            onClick={() => reset()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}