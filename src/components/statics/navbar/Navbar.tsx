import React from 'react';
import { Box, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navbar.css'
import { Avatar } from '@mui/material';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';


function Navbar() {
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado!', {
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

    var navbarComponent;

    if (token !== "") {
        navbarComponent = <header id="header">
            <Toolbar>
                <img src="https://imgur.com/KdBVSES.png.png" alt="Projeto Igarapé Logo" className="imagem-logo" />
            </Toolbar>
            <nav id="nav">
                <button id="btn-mobile">Projeto Igarapé</button>
                <ul id="menu" className="just">
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
                    <Avatar className='just'>PI</Avatar>
                    <img src="https://imgur.com/4lQ7zoc.png" alt="Carrinho" className="icons" />
                </ul>
            </nav>
        </header>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;