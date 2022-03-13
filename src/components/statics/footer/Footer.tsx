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


    if (token !== "") {
        footerComponent = <footer className='footer'>


            <Box >
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom ></Typography>
                </Box>
            </Box>


            <div className='container_footer'>
                <Link to="/home">
                <img src="https://imgur.com/IRDrtBS.png" alt="Projeto Igarapé Logo" className="img-logo" />
                </Link>

                <div className='footer-col'>
                    <h4>O que somos?</h4>
                    <ul>
                       <li><Link to='/listaProduto'>Produtos</Link></li>
                       <li> <Link to='/aboutus'>Sobre Nós</Link></li>
                       <li><Link to='/parceiros'>Parceiros</Link></li>                       
                    </ul>
                </div>


                <div className='footer-col'>
                    <h4>Fale conosco</h4>
                    <ul>
                        <li><Link to='/contacts'>Contato</Link></li>
                        <li><Link to='/contacts'>Seja um parceiro</Link></li>
                        <li><Link to='/contacts'>Trabalhe Conosco</Link></li>                     
                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>Nossas redes</h4>
                    <div className='social-links'>

                                   
                        <a href= 'https://i.imgur.com/RgiQsMD.png'><FacebookIcon /></a>
                        <a href="https://i.imgur.com/YcVYeT6.png"><InstagramIcon /></a>
                        <a href="https://i.imgur.com/dMlvFNb.png"><LinkedInIcon /></a>
                        <a href="https://github.com/projeto-Igarape"><GitHubIcon /></a>
                    </div>
                </div>

                <div className='footer-col'>
                    <h4>Nossos Parceiros</h4>
                    <div>
                        <ul>
                        <li><a href='https://gotadagua.vercel.app/'>Gota d'água</a></li>
                        <li><a href='https://brazil.generation.org/'>Generation</a></li>
                        <li><a href='https://sumup.com.br/'>SumUp</a></li>
                        </ul>
                    </div>
                    <div className='container_parceiros'>
                    <a href="">
                        <img className='img_parceiros' src="https://i.imgur.com/4xYWiBN.jpg" alt="Gota d'agua"/> 
                    </a>
                    <a href="https://brazil.generation.org/">
                        <img className='img_parceiros' src="https://i.imgur.com/LKBuYs7.png" alt="Generation"/> 
                    </a>
                    <a href="https://sumup.com.br/">
                         <img className='img_parceiros' src="https://i.imgur.com/Hu9EdS9.png" alt="SumUp"/> 
                    </a>
        
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