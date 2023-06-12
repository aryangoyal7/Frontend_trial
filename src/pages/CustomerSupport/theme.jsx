import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomerSupportPage />
    </ThemeProvider>
  );
};

export default App;






