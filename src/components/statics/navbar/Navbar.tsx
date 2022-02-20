import React from 'react';
import { AppBar, Grid, Toolbar, Typography, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <>  
        <AppBar position="relative" style={{ backgroundColor: "#2191D1" }}>
            <Grid item xs={6} >
                    <img src="https://imgur.com/Jv1AahJ.png" alt="NavBar" width="1349px" height="47px"/>
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
                                <Link to='/home' style={{ textDecoration:'none'}} >Home</Link>
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                            <Link to='/aboutus' style={{ textDecoration:'none'}} >About Us</Link>
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                            <Link to='/contacts'style={{ textDecoration:'none'}} >Contacts</Link>
                            </Typography>
                        </Box>
                    
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;