import { ThemeProvider } from '@mui/material';
import MultiTabTheme from './MultiTabTheme';
import MultiTabsConfig from './MultiTabsConfig';


export const MultiTabs = () => {
  return (
    <>
      <ThemeProvider theme={MultiTabTheme}>
        <MultiTabsConfig />
      </ThemeProvider>
    </>
  )
}
