import React from 'react';
import {Grid, Box, Typography, Button, TextField,} from '@material-ui/core';
import './Contacts.css';
import { Link } from 'react-router-dom';


function Contacts() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#a7f4fa" }}>
            <Grid xs={6} alignItems="center">
                <Box paddingX={20}>
                    <form>
                        <Typography className="texts" variant="h3" gutterBottom color="textPrimary" component="h3" align="center">Entre em contato</Typography>
                        <TextField id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                        <TextField id="assunto" label="assunto" variant="outlined" name="assunto" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/home" style={{ textDecoration:'none'}} className="text-decorator-none">
                                <Button className="button-style" type="submit" variant="contained" color="primary">
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