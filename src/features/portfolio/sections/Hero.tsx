import { Box, Container, Grid, Typography, Avatar } from "@mui/material";

export default function Hero() {
  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
            <Typography variant="h1" gutterBottom>
              Hi, I am Peter,
              <br />
              IT Entusiast
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              I am a passionate IT enthusiast with a strong interest in
              technology and innovation. I am currently pursuing personal goals
              in Software Development and Cybersecurity.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: { xs: 2, md: 0 },
              }}
            >
              <Avatar
                src={import.meta.env.BASE_URL + "portrait_1024.png"}
                alt="John portrait"
                sx={{
                  width: { xs: 170, md: 243 },
                  height: { xs: 170, md: 243 },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
