import React from 'react';
import {Grid, Box, Typography, TextField, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Login() {

    return(
       <Grid container direction ='row' justifyContent='center' alignItems='center'  style={{ backgroundColor: "#2191D1"}}> 
           <Grid alignItems='center' xs={6}>
               <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='txt1'>Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth/>
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                        <Box marginTop={2} textAlign='center'>
                        <Link to='/home' className='text-decorator-none'>
                            <Button type='submit' variant='outlined' color='primary' style={{ borderColor: "white", backgroundColor: "#2191D1", color: "white", textDecoration:'none' }} >
                                Logar
                            </Button>
                        </Link>
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