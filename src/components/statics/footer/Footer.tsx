import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YoutubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Grid, Box, Typography } from '@material-ui/core';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;


    if (token != "") {
        footerComponent = <footer className='footer'>


            <Box >
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom ></Typography>
                </Box>
            </Box>


            <div className='container_footer'>
            <a href="http://localhost:3000/home">
                    <img src="https://imgur.com/IRDrtBS.png" alt="Projeto Igarapé Logo" className="img-logo" />
                </a>
                
                <div className='footer-col'>
                    <h4>O que somos?</h4>
                    <ul>
                        <li><a href='/listaProduto'>Produtos</a></li>
                        <li><a href='/aboutus'>Sobre Nós</a></li>
                        <li><a href='/parceiros'>Parceiros</a></li>
                        <li><a href='/cisterna'>Cisterna</a></li>
                    </ul>
                </div>


                <div className='footer-col'>
                    <h4>Fale conosco</h4>
                    <ul>
                        <li><a href='/contacts'>Contato</a></li>
                        <li><a href='/contacts'>Seja um parceiro</a></li>
                        <li><a href='/contacts'>Trabalhe Conosco</a></li>
                        <li><a href='/teste'>Termos & Condições</a></li>
                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>Nossas redes</h4>
                    <div className='social-links'>
                        <a href='https://www.facebook.com/thatipiress/'><FacebookIcon /></a>
                        <a href="https://instagram.com/thatipiresss"><InstagramIcon /></a>
                        <a href="https://youtube.com"><YoutubeIcon /></a>
                        <a href="https://www.linkedin.com/in/thatipiresss/"><LinkedInIcon /></a>
                        <a href="https://github.com/thatipiresss"><GitHubIcon /></a>
                    </div>
                </div>
            </div>

            <Box className='box1'>
                <Box paddingTop={3}>
                </Box>
                <div className='rodape'>
                    <p>Copyright © 2022 Projeto Igarapé | Todos os direitos reservados</p>
                    <Box>
                        <a href="https://brazil.generation.org/">
                            <Typography variant="subtitle2" className='font'>brasil.generation.org</Typography>
                        </a>
                    </Box>
                </div>
            </Box>
        

        </footer >
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;