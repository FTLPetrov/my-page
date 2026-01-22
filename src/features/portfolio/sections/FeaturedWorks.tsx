import { Box, Container, Typography } from '@mui/material'
import { hobbies } from '../data/portfolio.data'
import WorkItem from '../../../components/ui/WorkItem'

export default function FeaturedWorks() {
  return (
    <Box sx={{ py: { xs: 3, md: 4 } }} id="hobbies">
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 2 }}>
          Hobbies & Lifestyle
        </Typography>
        {hobbies.map((work, index) => (
          <WorkItem key={work.id} work={work} showDivider={index < hobbies.length - 1} />
        ))}
      </Container>
    </Box>
  )
}
