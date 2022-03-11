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
import { Link } from 'react-router-dom';

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
                <Link to="http://localhost:3000/home"></Link>
                <img src="https://imgur.com/IRDrtBS.png" alt="Projeto Igarapé Logo" className="img-logo" />

                <div className='footer-col'>
                    <h4>O que somos?</h4>
                    <ul>
                        <Link to='/listaProduto'>Produtos</Link>
                        <Link to='/aboutus'>Sobre Nós</Link>
                        <Link to='/parceiros'>Parceiros</Link>
                        <Link to='/cisterna'>Cisterna</Link>
                    </ul>
                </div>


                <div className='footer-col'>
                    <h4>Fale conosco</h4>
                    <ul>
                        <Link to='/contacts'>Contato</Link>
                        <Link to='/contacts'>Seja um parceiro</Link>
                        <Link to='/contacts'>Trabalhe Conosco</Link>
                        <Link to='/teste'>Termos & Condições</Link>
                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>Nossas redes</h4>
                    <div className='social-links'>
                        <Link to='https://www.facebook.com/thatipiress/'><FacebookIcon /></Link>
                        <Link to="https://instagram.com/thatipiresss"><InstagramIcon /></Link>
                        <Link to="https://youtube.com"><YoutubeIcon /></Link>
                        <Link to="https://www.linkedin.com/in/thatipiresss/"><LinkedInIcon /></Link>
                        <Link to="https://github.com/thatipiresss"><GitHubIcon /></Link>
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