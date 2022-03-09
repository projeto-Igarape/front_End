import React, { ChangeEvent, useEffect } from 'react';
import {Grid, Box, Typography, Button, TextField,} from '@material-ui/core';
import './Contacts.css';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';


function Contacts() {

    function Mensagem() {
        alert('Mensagem enviada com sucesso!')
    }
    return (
        <>
            <Grid className="imagemc" container direction="row" justifyContent="center" alignItems="center">
            <Grid xs={6} alignItems="center">
                <Box paddingX={20}>
                    <form className="card">
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center">Entre em contato</Typography>
                        <TextField className="textoscontact" 
                        id="nome" label="E-mail" variant="outlined" name="email" margin="normal" fullWidth />
                        <TextField className="textoscontact" 
                        id="assunto" label="Assunto" variant="outlined" name="assunto" margin="normal" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/home" style={{ textDecoration:'none'}} className="text-decorator-none">
                                <Button onClick={Mensagem} className="btnEnviar" type="submit" variant="contained" color="primary">
                                    Enviar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={7}>
                    </Box>
                </Box>
            </Grid>
            </Grid>
        </>
    )
}

export default Contacts;