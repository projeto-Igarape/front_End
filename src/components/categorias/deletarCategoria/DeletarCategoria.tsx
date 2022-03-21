import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify';

import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarCategoria.css';
import { useHistory, useParams } from 'react-router-dom';
import { buscaID, deleteID } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function DeletarCategoria() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState['tokens']>(
      (state) => state.tokens
  );
    const [categoria, setCategoria] = useState<Categoria>()

    useEffect(() => {
        if (token == "") {
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

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaID(`/categorias/${id}`, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
            history.push('/categorias')
            deleteID(`/categorias/${id}`, {
              headers: {
                'Authorization': token
              }
            });
              toast.success('Categoria deletada com sucesso', {
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
        
          function nao() {
            history.push('/categorias')
          }
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Categoria:
              </Typography>
              <Typography color="textSecondary">
                {categoria?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="button_del2" size='large'>
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button  onClick={nao} variant="contained" className="button_delNot2" size='large'>
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarCategoria;