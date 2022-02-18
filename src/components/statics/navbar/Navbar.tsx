import React from 'react';
import { AppBar, Toolbar, Typography, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <>
        <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
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
                            <Link to='/aboutus'>AboutUs</Link>
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