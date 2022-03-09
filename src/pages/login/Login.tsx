import React, { ChangeEvent, useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import "./Login.css";
import { addToken } from '../../store/tokens/actions';


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
            alert("Usuário logado com sucesso!");
        } catch (error) {
            alert("Dados inconsistentes!");
        }
    }

    return(
       <Grid container direction ='row' justifyContent='center' alignItems='center'  style={{ backgroundColor: "#2191D1"}}> 
           <Grid alignItems='center' xs={6}>
               <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='txt1'>Entrar</Typography>
                        <TextField  value={userLogin.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='e-mail' variant='outlined' name='email' margin='normal' fullWidth/>
                        <TextField  value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                        <Box marginTop={2} textAlign='center'>
                        
                            <Button type='submit' variant='outlined' color='primary' style={{ borderColor: "white", backgroundColor: "#2191D1", color: "white", textDecoration:'none' }} >
                                Logar
                            </Button>
                        
                        </Box>
                    </form>
                </Box>
               
               <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'> Não tem uma conta?</Typography>
                    </Box>
                    <Link to='/cadastrousuario'> 
                        <Typography variant='subtitle1' gutterBottom align='center' className='txt1'>Cadastre-se</Typography>
                    </Link>
               </Box>

            </Grid>
            <Grid xs={6}>
            <img src="https://imgur.com/5Sp2B3x.png" alt="" width="605px" height="379px" />
            
            </Grid>
       </Grid>

    )  
}

export default Login;