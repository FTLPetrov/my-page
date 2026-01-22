import { Box, Container, Link, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'

export default function Contact() {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: { xs: 3, md: 4 } }} id="contact">
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 3 }}>
          Contact
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
          You can reach me via my Email, or DM me in my Instagram. I am open to new people or to talk business in a
          formal meeting.
        </Typography>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <InstagramIcon sx={{ fontSize: 28, color: 'text.primary' }} />
            <Link
              href="https://www.instagram.com/pesho_ftl/"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary.main"
              sx={{ fontSize: '1.125rem', fontWeight: 500 }}
            >
              @pesho_ftl
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <EmailIcon sx={{ fontSize: 28, color: 'text.primary' }} />
            <Link
              href="mailto:petyr.lubomirov.petrov@gmail.com"
              color="secondary.main"
              sx={{ fontSize: '1.125rem', fontWeight: 500 }}
            >
              petyr.lubomirov.petrov@gmail.com
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
