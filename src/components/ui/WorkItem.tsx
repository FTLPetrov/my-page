import { Box, Chip, Divider, Grid, Typography } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import SportsMmaIcon from '@mui/icons-material/SportsMma'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import LocalCafeIcon from '@mui/icons-material/LocalCafe'
import type { Work } from '../../features/portfolio/types/portfolio.types'

interface WorkItemProps {
  work: Work
  showDivider?: boolean
}

const iconMap: Record<string, React.ReactNode> = {
  SportsEsports: <SportsEsportsIcon sx={{ fontSize: 150 }} />,
  SportsMma: <SportsMmaIcon sx={{ fontSize: 150 }} />,
  Headphones: <HeadphonesIcon sx={{ fontSize: 150 }} />,
  LocalCafe: <LocalCafeIcon sx={{ fontSize: 150 }} />,
}

export default function WorkItem({ work, showDivider = false }: WorkItemProps) {
  const Icon = work.icon && iconMap[work.icon]

  return (
    <>
      <Grid container spacing={3} sx={{ py: 3 }}>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              py: 1,
              color: 'text.primary',
            }}
          >
            {Icon}
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h2" gutterBottom>
            {work.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Chip
              size="small"
              label={work.category}
              sx={{
                bgcolor: 'text.primary',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.125rem',
                height: '25px',
                borderRadius: '12px',
              }}
            />
          </Box>
          <Typography variant="body1" color="text.secondary">
            {work.description}
          </Typography>
        </Grid>
      </Grid>
      {showDivider && <Divider />}
    </>
  )
}
