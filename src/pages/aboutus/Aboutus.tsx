import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import './Aboutus.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Carousel from '../../components/carousel/Carousel';
 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
 
 
function Aboutus() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );
 
    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            history.push("/aboutus")
        }
    }, [token])
 
 
    return (
        <>            
            <Grid container direction="row" justifyContent="center" alignItems="center" className='backabout1'>
                <Carousel/>
                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={60} >
                       
                        <Typography className='titulosobre' variant="h5" gutterBottom color="textPrimary" component="h5" align="center" >
 
                          <p className='conheca' >
                                QUEM SOMOS
                           
                            </p>
                            <br />
                            <p className='txtprojeto'>
                                O Projeto Igarapé nasceu na Generation Brasil onde, com base nos Objetivos de
                                Desenvolvimento Sustentável sobre Água Potável e Saneamento, temos como principal
                                intuito melhorar a disponibilização de água potável para consumo e saneamento básico
                                em comunidades de baixa renda.
                            </p>
                            <br />
                            <p className='txtprojeto'>
                                Acreditamos que a escassez de água potável e a falta de saneamento básico, traz riscos iminentes à saúde,
                                uma vez que é um recurso natural indispensável e essencial para a vida. Com o projeto, realizaremos vendas
                                de produtos sustentáveis e 100% dos valores serão revertidos em cisternas para captação de águas pluviais.
                            </p>
                               
                               
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <Link to="/aboutus" className="text-decorator-none"> </Link>
                        </Box>
 
                    </Box>
                </Grid>
 
                <Grid alignItems='center' item xs={6} className='cist'>
                   
                    <p className='teste'>NOSSO OBJETIVO</p>
                    <br />
                    <p className='teste2'>
                    Com a venda de produtos sustentáveis, contribuímos com a desaceleração da poluição
                    já que os mesmos apresentam melhor desempenho ambiental ao longo de seu ciclo de vida.
                    Além disso, todos os valores serão revertido para a Ong Habitat Brasil que
                    desenvolve e implementa soluções de acesso à água, saneamento e higienização.
                    </p>
 
                </Grid>
 
               
               
                <Grid xs={12} alignItems='center' justifyContent='center' className='devs'>
                    <h2 > Integrantes da equipe desenvolvedora:</h2>
                </Grid>
 
                <Grid container direction="row" alignItems='center' justifyContent='center' xs={12}>
                <Card className='cardAbout' sx={{ maxWidth: 200 }}>
                    <CardActionArea href='https://www.linkedin.com/in/paivasbr/'  target='_blank'>
                        <CardMedia className="imageCard"
                            component="img"
                            height="200"
                            image="https://i.imgur.com/csVOPIn.jpg"
                            alt="brenda"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Brenda Paiva
                            </Typography>
                           
                        </CardContent>
                    </CardActionArea>
                </Card>
 
                <Card className='cardAbout' sx={{ maxWidth: 200 }}>
                    <CardActionArea href='https://www.linkedin.com/in/karol-soares/' target='_blank'>
                        <CardMedia className="imageCard"
                            component="img"
                            height="200"
                            image="https://i.imgur.com/qHtOMXa.jpg"
                            alt="karol"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Karol Soares
                            </Typography>
                            
                        </CardContent>
                    </CardActionArea>
                </Card>
 
                <Card className='cardAbout' sx={{ maxWidth: 200 }}>
                    <CardActionArea href='https://www.linkedin.com/in/larissacpavan/'  target='_blank' >
                        <CardMedia className="imageCard"
                            component="img"
                            height="200"
                            image="https://i.imgur.com/VHVu6KV.jpg"
                            alt="lari"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Larissa Pavan
                            </Typography>
                            
                        </CardContent>
                    </CardActionArea>
                </Card>
 
                <Card className='cardAbout' sx={{ maxWidth: 200 }}>
                    <CardActionArea href='https://www.linkedin.com/in/rafael-ferreira-7b6600205/'  target='_blank'>
                        <CardMedia className="imageCard"
                            component="img"
                            height="200"
                            image="https://i.imgur.com/Im3f904.jpg"
                            alt="rafa"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Rafael Ferreira
                            </Typography>
                            
                        </CardContent>
                    </CardActionArea>
                </Card>
 
                <Card className='cardAbout' sx={{ maxWidth: 200 }}>
                    <CardActionArea href='https://www.linkedin.com/in/ferreirasc09/'  target='_blank'>
                        <CardMedia className="imageCard"
                            component="img"
                            height="200"
                            image="https://i.imgur.com/U9vLhHn.jpg"
                            alt="ste"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Sté Ferreira
                            </Typography>
                            
                        </CardContent>
                    </CardActionArea>
                </Card>
 
                <Card className='cardAbout' sx={{ maxWidth: 200 }}>
                    <CardActionArea href='https://www.linkedin.com/in/thatipiresss/'  target='_blank'>
                        <CardMedia className="imageCard"
                            component="img"
                            height="200"
                            image="https://i.imgur.com/BfFr2o8.jpg"
                            alt="thati"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Thati Camargo
                            </Typography>
                            
                        </CardContent>
                    </CardActionArea>
                </Card>
 
            </Grid>
        </Grid >
 
        </>
    )
}
 
export default Aboutus;
