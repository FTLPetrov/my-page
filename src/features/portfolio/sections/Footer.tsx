import { Box, Container, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: { xs: 4, md: 6 }, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="text.secondary">
          Copyright © {new Date().getFullYear()} All rights reserved
        </Typography>
      </Container>
    </Box>
  )
}
