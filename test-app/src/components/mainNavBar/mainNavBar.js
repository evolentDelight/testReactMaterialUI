import * as React from 'react';
import { Drawer, List } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {mainListItems} from './listItems'

const defaultTheme = createTheme();

export default function NavBar(){
  return(
    <ThemeProvider theme={defaultTheme}>
      <Drawer variant="permanent">
        <List>
          {mainListItems}
        </List>
      </Drawer>
    </ThemeProvider>
  )
}