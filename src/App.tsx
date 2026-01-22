import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './theme'
import PortfolioPage from './features/portfolio/PortfolioPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PortfolioPage />
    </ThemeProvider>
  )
}

export default App
