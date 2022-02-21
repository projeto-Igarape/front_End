import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Grid, Box, Typography} from '@material-ui/core';

function Footer(){
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid alignItems="center" item xs={12}>
                        <Box style={{ backgroundColor: "#2191D1", height: "80px" }}>
                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" style={{ fontSize: 30}}>
                                <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://github.com/ProjetoIgarape" target="_blank">
                                    <GitHubIcon style={{ fontSize: 30, color: "white" }} />
                                </a>
                            </Box>
                        </Box>
                        <Box style={{ backgroundColor: "#2191D1", height: "60px" }}>
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                            </Box>
                            <Box>
                                <a target="_blank" style={{ textDecoration:'none'}} href="https://brazil.generation.org/">
                                    <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
        </>
    )
}

export default Footer; 