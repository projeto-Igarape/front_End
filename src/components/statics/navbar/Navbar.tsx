import React from 'react';
import { Box, Toolbar, AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';
import { Avatar } from '@mui/material';


function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout() {
        setToken('')
        alert('Usuário deslogado!')
        history.push('/login')
    }

    return (
        <>
        <AppBar color="inherit">
            <header id="header" className="container-cabecalho">
                <Toolbar>
                    <img src="https://imgur.com/KdBVSES.png.png" alt="Projeto Igarapé Logo" className="imagem-logo" />
                    </Toolbar>
                    <nav id="nav" className="nav-links-cabecalho">
                        <button id="btn-mobile">Projeto Igarapé</button>
                        <ul id="menu">
                            <Link to='/home'>
                                <Box mx={1}>
                                    <li><a href="/">Home</a></li>
                                </Box>
                            </Link>
                            <Link to='/cadastroCategoria'>
                                <Box mx={1} >
                                    <li><a href="/">Cadastrar Categoria</a></li>
                                </Box>
                            </Link>
                            <Link to='/cadastroProduto'>
                                <Box mx={1} >
                                    <li><a href="/">Cadastrar Produto</a></li>
                                </Box>
                            </Link>
                            <Link to='/listaProduto'>
                                <Box mx={1} >
                                    <li><a href="/">Produtos</a></li>
                                </Box>
                            </Link>
                            <Link to='/listaProduto'>
                                <Box mx={1} >
                                    <li><a href="/">Cisterna</a></li>
                                </Box>
                            </Link>
                            
                            <Link to='/aboutus'>
                                <Box mx={1}>
                                    <li><a href="/">Sobre Nós</a></li>
                                </Box>
                            </Link>
                            <Link to='/contacts'>
                                <Box mx={1} >
                                    <li><a href="/">Contato</a></li>
                                </Box>
                            </Link>
                            <Link to='/login'>
                                <Box mx={1} onClick={goLogout}>
                                    <li><a href="/">Logout</a></li>
                                </Box>
                            </Link>
                        </ul>
                    </nav>
            </header>
            </AppBar>
        </>
    )
}

export default Navbar;