import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { services } from '../data/portfolio.data'
import ServiceAccordion from '../../../components/ui/ServiceAccordion'

export default function RecentPosts() {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: { xs: 3, md: 4 } }} id="services">
      <Container maxWidth="md">
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Typography variant="h2">Services</Typography>
        </Stack>
        <Grid container spacing={2}>
          {services.map((service) => (
            <Grid item xs={12} md={6} key={service.id}>
              <ServiceAccordion
                title={service.title}
                category={service.category}
                description={service.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
