import React, { useState, useEffect } from 'react'
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaCategoria.css';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
);
  let history = useHistory();

  useEffect(() => {
    if (token === '') {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: 'colored',
        progress: undefined,
    });
      history.push("/login")
    }
  }, [token])


  async function getCategoria() {
    await busca("/categorias", setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(() => {
    getCategoria()
  }, [categorias.length])

  return (
    <>
      {
        categorias.map(categoria => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Categoria
                </Typography>
                <Typography variant="h5" component="h2">
                  {categoria.descricao}
                </Typography>
                <Typography variant="h5" component="h2">
                  {categoria.secao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/cadastroCategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  );
}


export default ListaCategoria;