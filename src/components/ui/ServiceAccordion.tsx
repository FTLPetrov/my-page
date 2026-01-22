import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import CoffeeIcon from '@mui/icons-material/Coffee'

interface ServiceAccordionProps {
  title: string
  category: string
  description: string
  defaultExpanded?: boolean
}

export default function ServiceAccordion({ title, category, description, defaultExpanded = false }: ServiceAccordionProps) {
  const isPaidService = category.toLowerCase().includes('paid')
  const isCoffeeService = category.toLowerCase().includes('coffee')

  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      sx={{
        bgcolor: '#FFFFFF',
        borderRadius: '4px !important',
        boxShadow: 'none',
        '&:before': {
          display: 'none',
        },
        '&.Mui-expanded': {
          margin: '0 !important',
        },
        margin: 0,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        sx={{
          '& .MuiAccordionSummary-content': {
            flexDirection: 'column',
            my: 1.5,
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: '12px 0',
          },
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {isPaidService && <AttachMoneyIcon sx={{ fontSize: '1.2rem', color: 'text.secondary' }} />}
          {isCoffeeService && <CoffeeIcon sx={{ fontSize: '1.2rem', color: 'text.secondary' }} />}
          <Typography variant="body1" color="text.secondary">
            {category}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0 }}>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
