import React from 'react';
import { AppBar, Grid, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../../assets/img/Logo.png'

function Navbar() {
    return (
        <>
            <AppBar position="relative" className='nav'>
                <Toolbar>
                    <Grid container>
                    <Grid xs={6} md={8}>
                        <Box paddingRight={70} >                      
                                <img src={Logo} alt="Logo Igarapé" width='100px' />                      
                        </Box>
                    </Grid>
                    <Grid xs={6} md={4}>
                        <Box display="flex" justifyContent="start" paddingTop={9} paddingLeft={6}>
                            <Box mx={1} className='boxNav'>
                                <Typography variant="h6">
                                    <Link to='/home' className='text-decorator-none'>Home</Link>
                                </Typography>
                            </Box>
                            <Box mx={1} className='boxNav'>
                                <Typography variant="h6">
                                    <Link to='/aboutus' className='text-decorator-none'>About Us</Link>
                                </Typography>
                            </Box>
                            <Box mx={1} className='boxNav'>
                                <Typography variant="h6">
                                    <Link to='/contacts' className='text-decorator-none'>Contacts</Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                  
                </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;