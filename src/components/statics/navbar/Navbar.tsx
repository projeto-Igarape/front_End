import React from 'react';
import { Box, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário(a) deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,

        });
        history.push('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <header id="header">
            <a id='logo' href="">Logo</a>
            <nav id="nav">
                <button id="btn-mobile">Projeto Igarapé</button>
                <ul id="menu">
                    <Link to='/home'>
                        <Box mx={1}>
                            <li><a href="/">Home</a></li>
                        </Box>
                    </Link>
                    <Link to='/aboutus'>
                        <Box mx={1}>
                            <li><a href="/">Sobre nós</a></li>
                        </Box>
                    </Link>
                    <Link to='/'>
                        <Box mx={1} >
                            <li><a href="/">Cisterna</a></li>
                        </Box>
                    </Link>
                    <Link to='/contacts'>
                        <Box mx={1} >
                            <li><a href="/">Contato</a></li>
                        </Box>
                    </Link>
                    <Link to='/login'>
                        <Box mx={1}  onClick={goLogout}>
                            <li><a href="/">Logout</a></li>
                        </Box>
                    </Link>
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