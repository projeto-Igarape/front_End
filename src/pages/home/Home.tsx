import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import ListaCategoria from '../../components/categorias/listaCategoria/ListaCategoria';


function Home(){

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='home'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a).</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Conectando caminhos e orientando para o futuro.</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>   
                             </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#2191D1", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://imgur.com/5Sp2B3x.png" alt="" width="605px" height="379px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                    <ListaCategoria />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;