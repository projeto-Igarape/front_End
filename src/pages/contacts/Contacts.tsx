import React from 'react';
import { Box, Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import './Contacts.css';

function Contacts() {

    function Mensagem() {
        alert('Mensagem enviada com sucesso!')
    }

    return (
        <>
            <body>
                <div className="container_us">
                    <div className="content">
                        <div className="left-side">
                            <div className="address details">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="topic">Endereço</div>
                                <div className="text-one">Avenida Paulista, 2439</div>
                                <div className="text-two">São Paulo - SP</div>
                            </div>
                            <div className="phone details">
                                <i className="fas fa-phone-alt"></i>
                                <div className="topic">Telefone</div>
                                <div className="text-one">+55 11 94517 7343</div>
                                <div className="text-two">+55 11 99136 9790</div>
                            </div>
                            <div className="email details">
                                <i className="fas fa-envelope"></i>
                                <div className="topic">Email</div>
                                <div className="text-one">igarapeprojeto@gmail.com</div>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="topic-text">Envie sua mensagem</div>
                            <p>
                                Caso tenha alguma dúvida ou precise entrar em contato conosco, envie aqui uma mensagem para a equipe do Projeto Igarapé que entraremos em contato, assim que possível.
                            </p>
                            <form action="#">
                                <div className="input-box">
                                    <input id="nome" type="text" placeholder="Digite seu nome" />
                                </div>
                                <div className="input-box">
                                    <input id="email" type="text" placeholder="Digite seu e-mail" />
                                </div>
                                <div className="input-box message-box">
                                    <textarea id="assunto" placeholder="Digite sua mensagem"></textarea>
                                </div>
                                <Box marginTop={2}>
                                        <Button onClick={Mensagem} type='submit' variant='contained'  className='button2'>
                                            Enviar
                                        </Button>
                                    
                                </Box>
                            </form>
                        </div>
                    </div>
                </div>

            </body>
        </>
    )
}

export default Contacts;