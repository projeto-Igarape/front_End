import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';

import './CadastroProduto.css';

import { busca, buscaID, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CadastroProduto() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    useEffect(() => {
        console.log(token)
        if (token === "") {
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

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0, descricao: '', secao: ''
        })

    const [produto, setProduto] = useState<Produto>({
        id: 0, nome: '', preco: 0, foto: '', categoria: null
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaID(`produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto atualizado com sucesso', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });

        } else {
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto cadastrado com sucesso', {
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
        back()

    }

    function back() {
        history.push('/listaProduto')
    }

    return (
        <Container className="container2" maxWidth="xs">
            <form onSubmit={onSubmit} className='card78' >
                <Typography className="space" variant="h3" color="textSecondary" component="h1" align="center" >Cadastre um produto</Typography>
                <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth className='input-box78' />
                <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="Preço" name="preco" variant="outlined" margin="normal" fullWidth className='input-box78'/>
                <TextField value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" label="Foto" name="foto" variant="outlined" margin="normal" fullWidth className='input-box78'/>

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label" className="space">Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaID(`/categorias/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText className="space">Escolha uma categoria para o produto</FormHelperText>
                    <Button className="btn" type="submit" variant="contained" color="primary">
                        Confirmar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroProduto;