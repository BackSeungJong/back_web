import './App.css';
import Router from './routes';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme['themeFile']}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
