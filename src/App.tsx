import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import './App.css'
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      
    </ThemeProvider>
  )
}
