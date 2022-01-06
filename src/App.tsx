import { Box } from '@material-ui/core';
import React from 'react';
import Navbar from './components/Navbar'
import Page from './components/Page'

function App() {
  return (<>
    <Navbar></Navbar>
    <Box paddingTop={'79px'}>
      <Page title={'teste'}>
        Conteúdo
      </Page>
    </Box>
  </>);
}

export default App;
