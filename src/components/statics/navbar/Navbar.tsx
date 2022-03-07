import React from 'react';
import { Box, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';


function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout(){
        setToken('')
        alert('Usuário deslogado!')
        history.push('/login')
    }

    return (
        <>
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
        </>
    )
}

export default Navbar;