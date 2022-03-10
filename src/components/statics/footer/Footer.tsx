import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YoutubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Grid, Box, Typography} from '@material-ui/core';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer(){

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state)=> state.tokens
        );

        var footerComponent;
    
    
        if (token != "") {
            footerComponent = <footer className='footer'>
                
                
                                <Box display="flex" alignItems="left" justifyContent="left">
                                   <a href="http://localhost:3000/home">
                                    <img src="https://imgur.com/KdBVSES.png.png" alt="Projeto Igarapé Logo" className="img-logo" />
                                    </a>
                                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" className='font'>
                                <Typography variant="h5" align="center" gutterBottom>Projeto Igarapé </Typography>                            
                                </Box>  
                                </Box>
                                                 
                            
                              
                 <div className='container_footer'>
                     
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
                                <li><a href='/teste'>Termos&Condições</a></li>
                                
                                
                            </ul>

                     </div>
                     
                    <div className='footer-col'>
                        <h4>Nossas redes</h4> 
                            <div className='social-links'>
                                <a href ='https://www.facebook.com/thatipiress/'><FacebookIcon /></a>
                                <a href="https://instagram.com/thatipiresss"><InstagramIcon/></a>
                                <a href="https://youtube.com"><YoutubeIcon/></a>
                                <a href="https://www.linkedin.com/in/thatipiresss/"><LinkedInIcon /></a>
                                <a href="https://github.com/thatipiresss"><GitHubIcon/></a>
                            </div>
                    </div>
                              </div>
                    
                        <Box className='box1'>
                            <Box paddingTop={3} className='font'>
                                <Typography variant="subtitle2" align="center" gutterBottom>© 2022 Copyright</Typography>
                            </Box>

                            <Box paddingTop={0} className='font'>
                                <Typography variant="subtitle2" align="center" gutterBottom> Projeto Igarapé Brasil LTDA. Todos os direitos reservados. Avenida Paulista, 2439
São Paulo - SP</Typography>
                            </Box>
                                                        <Box className='font'>
                                <a href="https://brazil.generation.org/">
                                    <Typography variant="subtitle2" gutterBottom align="center">brasil.generation.org</Typography>
                                </a>
                            </Box>
                        </Box>
                    
                </footer>
        }
        return (
            <>
                {footerComponent}
            </>
        )
    }
    
export default Footer;