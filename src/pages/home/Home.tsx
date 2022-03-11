import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import {toast} from 'react-toastify';


import './Home.css';

import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import ListaProduto from '../../components/produtos/listaProduto/ListaProduto';


function Home(){

    let history = useHistory();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    useEffect(() => {
        if(token =='') {
            toast.error('Faça o login!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        
            history.push('/login')
        }
    }, [token])


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
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#2191D1", color: "white" }}>Ver Produtos</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://imgur.com/5Sp2B3x.png" alt="" width="605px" height="379px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                    <ListaProduto />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;