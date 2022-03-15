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
            <body>
                <div className="banner">
                    <div className="banner__overlay">
                        <div className="banner__container">
                            <h1 className="banner__title">Nossa História</h1>
                            <p className="banner__text">conectando caminhos e orientando para o futuro.</p>
                        </div>
                    </div>
                    <div className="story-img"></div>
                </div>
                </body>
                <section className="section section-dark" >
                    <h2>Projeto Igarapé</h2>

                    <p className="description__p">
                    O Projeto Igarapé busca por meio da alusão a cultura indígena uma relação de elemento sagrado com a água. Associando assim, toda uma cultura originária ao estimulo de um consumo consciente. Aplicando por meio de uma plataforma digital, produtos que refletem o fomento para melhores práticas na utilização de recursos hídricos pela indústria. Sendo assim, a equipe igarapé entende o valor de cada produto e empenha-se em criar caminhos para o acesso a água potável em meio a um desenvolvimento insustentável, revertendo os valores arrecadados para ONGS que atuem com aplicação de cisternas em comunidades carentes, com base nos objetivos de desenvolvimento Sustentável da ONU, que trata a ODS 6 - Água Potável e Saneamento.
                    </p>
                </section>
                <div className="secondimg">
                    <div className="text">
                    </div>
                </div>
                <section className="section section-dark">
                    <h2>Objetivo</h2>
                    <p className="description__p">
                    Ser referência no auxílio para o acesso de água, saneamento e higienização à comunidades carentes, conectando-as a desenvolvimentos e implementações de soluções por meio de parceiros, colaboradores, entre outros. Revertendo todos os valores arrecadados, pelo e-commerce, para gerir e financiar custos de projeto. Aplicando também recursos para iniciativas da Ong Habitat Brasil.
                    </p>
                </section>
                <div className="thirdimg">
                </div>
            
            <Grid container direction="row" alignItems='center' justifyContent='center' xs={12}>
                <Card className='cardAbout' sx={{ maxWidth: 200 }}>
                    <CardActionArea href='https://www.linkedin.com/in/paivasbr/' target='_blank'>
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
                    <CardActionArea href='https://www.linkedin.com/in/larissacpavan/' target='_blank' >
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
                    <CardActionArea href='https://www.linkedin.com/in/rafael-ferreira-7b6600205/' target='_blank'>
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
                    <CardActionArea href='https://www.linkedin.com/in/ferreirasc09/' target='_blank'>
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
                    <CardActionArea href='https://www.linkedin.com/in/thatipiresss/' target='_blank'>
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
        </>
    )
}

export default Aboutus;
