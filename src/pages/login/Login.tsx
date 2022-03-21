import React, { ChangeEvent, useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button, Toolbar } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import "./Login.css";
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {

    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0, email: "", senha: "", token: ""
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token));
            history.push('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });

        } catch (error) {
            toast.error('Dados inconsistentes!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });

        }
    }

    return (
        <Grid container direction='row' id='container_login'>
            <Grid className="container_login">
                <Box className="card_login">
                    <form onSubmit={onSubmit}>
                        <Toolbar>
                            <img id='logo_login' src="https://imgur.com/KdBVSES.png" alt="Projeto Igarapé Logo"/>
                        <Typography variant='h3' component='h3' className='text1'>Entrar</Typography></Toolbar>
                        <TextField value={userLogin.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='E-mail' variant='outlined' name='email' fullWidth required placeholder='Digite seu e-mail' />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth required placeholder='Digite sua senha com no mínimo 8 caractéres' />
                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' color='primary' className='button2' >
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'> Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastroUsuario' className='text-decorator-none'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='text2'>Cadastre-se</Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6}>

            </Grid>
        </Grid >
    );
}

export default Login;