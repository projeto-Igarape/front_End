import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import {toast} from 'react-toastify';



import './Home.css';

import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import ListaProduto from '../../components/produtos/listaProduto/ListaProduto';
import TabProduto from '../../components/produtos/tabProduto/TabProduto';


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
            <Grid container direction="row" justifyContent="center" alignItems="center" className='home'>
                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={20} >
                       
                    </Box>
                   
                   {/* <div>
                        <Carousel breakPoints={breakPoints}>
                        <Item><img src="https://imgur.com/5Sp2B3x.png" alt="" /></Item>
                        
                        </Carousel>
                    </div> */}

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={2}>   
                             </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} >
                    <img src="https://imgur.com/5Sp2B3x.png" alt="" className="vídeo" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                    <TabProduto />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;