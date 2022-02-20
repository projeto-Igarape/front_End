import React from 'react';
import { AppBar, Grid, Toolbar, Typography, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <>  
        <AppBar position="relative" style={{ backgroundColor: "#2191D1" }}>
            <Grid item xs={12} >
                    <img src="https://imgur.com/G9gxl19.png" alt="NavBar" width="1349px" height="67px"/>
            </Grid>
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }}>
                        <Typography variant="h5" color="inherit" >
                            Projeto Igarapé
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <Link to='/home'>Home</Link>
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                            <Link to='/aboutus'>About Us</Link>
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                            <Link to='/contacts'>Contacts</Link>
                            </Typography>
                        </Box>
                    
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;