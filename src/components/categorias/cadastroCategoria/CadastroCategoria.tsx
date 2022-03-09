import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@material-ui/core';

import Categoria from '../../../models/Categoria';

import './CadastroCategoria.css';
import { buscaID, post, put } from '../../../services/Service';

import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function CadastroCategoria() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0, descricao: '', secao: ''
    })

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado!")
            history.push('/login')
        }
    }, [history, token])

    useEffect(() => {
        if (id !== undefined) {
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

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('categoria' + JSON.stringify(categoria))
        if (id !== undefined) {
            put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria atualizada!')
        } else {
            post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria cadastrada!')
        }
        back()
    }

    function back() {
        history.push('/categorias')
    }

    return (
        <Container maxWidth="sm" className="top">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário</Typography>
                <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                <TextField value={categoria.secao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="secao" label="Seção" variant="outlined" name="secao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroCategoria;