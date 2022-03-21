import React, { useEffect } from 'react';
import { Box, Grid} from '@material-ui/core';
import {toast} from 'react-toastify';
import './Home.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import TabProduto from '../../components/produtos/tabProduto/TabProduto';
import Carousel from '../../components/carousel/Carousel';


function Home(){
    /*const breakPoints= [
        {width: 1, itemsToShow:1},
    ] */
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
            <Grid container direction="row" className='home'>
                <Grid alignItems="center" >
                    <Box paddingX={20} >     
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box >   
                             </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} >
                    <img src="https://i.imgur.com/badV3BP.png" alt="" className="vídeo" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                    <TabProduto />
                    <Carousel />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;