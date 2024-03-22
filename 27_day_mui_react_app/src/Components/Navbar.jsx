
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import cartContext from '../utilis_movie/cartContext';

import { useSelector } from 'react-redux';


function Navbar({mode,setMode}) {
    const navigate=useNavigate()
    const cartValUCtxt=useContext(cartContext)

  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            BigShow
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>         
              <Button  sx={{ color: '#fff' }} 
              onClick={()=>navigate('/')}
              >
                Home
              </Button>
              <Button  sx={{ color: '#fff' }}
               onClick={()=>navigate('/addmovie')}
              >
                Add Movie
              </Button>
              <Button  sx={{ color: '#fff' }}
               onClick={()=>navigate('/addcolor')}
              >
                Add Color
              </Button>

              <Button  sx={{ color: '#fff' }}
               onClick={()=>navigate('/propdrilling')}
              >
                Prodrilling
              </Button>

              <Button  sx={{ color: '#fff' }}
               onClick={()=>navigate('/usecontext')}
              >
                UseContext
              </Button>

              <Button  sx={{ color: '#fff' }}             
              >
                UC-Cart {cartValUCtxt}
              </Button>

              <Button  sx={{ color: '#fff' }}   
                onClick={()=>navigate('/tictactoe')}     // route > component     
              >
               TicTacToe
              </Button>

              <Button  sx={{ color: '#fff' }}   
                onClick={()=>navigate('/formik')}     // route > component     
              >
               Formik
              </Button>

              <Button  sx={{ color: '#fff' }}   
                onClick={()=>navigate('/cart')}     // route > component     
              >
               ReduxCart-{cartItems.length}
              </Button>

              <Button  sx={{ color: '#fff' }}   
                onClick={()=>navigate('/class')}     // route > component     
              >
               Class_Component
              </Button>

              <Button  sx={{ color: '#fff' }}
              onClick={()=>{setMode(mode=="light"?"dark":"light")}}    
              >
               {mode=="light"?"DARK MODE":"LIGHT MODE"}
              </Button>
        
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
       
      </nav>
      <Box component="main" sx={{ p: 3 }}>      
       
      </Box>
    </Box>
  );
}

export default Navbar;