import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProduto.css';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function ListaProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
);
  let history = useHistory();

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado')
      history.push("/login")
    }
  }, [token])


  async function getProduto() {
    await busca("/produtos/listar", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getProduto()
  }, [produtos.length])

  console.log(Object.keys(produtos))

  return (
    <>
      {
        produtos.map(produto => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Produto
                </Typography>
                <Typography variant="h5" component="h2">
                  {produto.nome}
                </Typography>
                <Typography variant="h5" component="h2">
                  {produto.preco}
                </Typography>
                <Typography variant="h5" component="h2">
                  {produto.foto}
                </Typography>
                <Typography variant="h5" component="h2">
                  {produto.categoria?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/cadastroProduto/${produto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
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


export default ListaProduto;