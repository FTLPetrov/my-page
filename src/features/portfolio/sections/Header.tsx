import { Box, Container, Link, Stack } from '@mui/material'
import { navLinks } from '../data/portfolio.data'

export default function Header() {
  return (
    <Box component="header" sx={{ py: 4 }}>
      <Container maxWidth="md">
        <Stack
          direction="row"
          justifyContent="center"
          spacing={{ xs: 2, sm: 4 }}
          sx={{
            '& a': {
              color: 'text.primary',
              fontSize: '1.25rem',
              fontWeight: 500,
              '&:hover': {
                color: 'primary.main',
              },
            },
          }}
        >
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
