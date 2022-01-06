import { Box } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import AppRouter from './routes/AppRouter'

function App() {
  return (<>
    <BrowserRouter>
      <Navbar></Navbar>
      <Box paddingTop={'79px'}>
        <AppRouter></AppRouter>
      </Box>
    </BrowserRouter>
  </>);
}

export default App;
