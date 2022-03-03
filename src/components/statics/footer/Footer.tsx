import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Grid, Box, Typography} from '@material-ui/core';
import './Footer.css'

function Footer(){
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='footer' >
                    <Grid alignItems="center" item xs={12}>
                        <Box className='box'>
                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" className='font'>
                                <Typography variant="h5" align="center" gutterBottom>Siga-nos nas redes sociais </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://github.com/ProjetoIgarape">
                                    <GitHubIcon className='font' />
                                </a>
                            </Box>
                        </Box>
                        <Box className='box1'>
                            <Box paddingTop={3} className='font'>
                                <Typography variant="subtitle2" align="center" gutterBottom>© 2022 Copyright:</Typography>
                            </Box>
                            <Box className='font'>
                                <a href="https://brazil.generation.org/">
                                    <Typography variant="subtitle2" gutterBottom align="center">brasil.generation.org</Typography>
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
        </>
    )
}

export default Footer; 