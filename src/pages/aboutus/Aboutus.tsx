import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import './Aboutus.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function Aboutus() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

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
            history.push("/aboutus")
        }
    }, [token])


    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='backabout1'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography className='titulosobre1' variant="h3" gutterBottom color="textPrimary" component="h3" align="center" >Sobre nós</Typography>
                        <Typography className='titulosobre' variant="h5" gutterBottom color="textPrimary" component="h5" align="center" >

                            <p>
                                O Projeto Igarapé nasceu na Generation Brasil onde, com base nos Objetivos de
                                Desenvolvimento Sustentável sobre Água Potável e Saneamento, temos como principal
                                intuito melhorar a disponibilização de água potável para consumo e saneamento básico
                                em comunidades de baixa renda, além de conectar para orientar sobre a gestão
                                sustentável da água potável e do saneamento para todos. Acreditamos que a escassez de
                                água potável e a falta de saneamento básico, traz riscos iminentes à saúde, uma vez que é
                                um recurso natural indispensável e essencial para a vida.
                            </p>
                            <br />
                            <p>
                                Muitas comunidades de baixa renda não têm acesso ao mínimo do saneamento básico e/ou água potável
                                e própria para consumo (cerca de 35 milhões de brasileiros).
                                Pessoas ficam mais doentes do que o normal por não terem acesso
                                a um recurso natural indispensável e essencial.
                            </p>
                            <br />
                            <p>
                                Na pandemia, a situação se agravou, já que, de acordo com a Organização Mundial da Saúde (OMS),
                                a lavagem completa das mãos está entre as medidas mais eficazes
                                para limitar a propagação da Covid-19.
                                <p>
                                    <br />
                                </p>
                                Contamos com essa iniciativa para arrecadar valores que serão revertidos na compra de
                                cisternas, possibilitando a coleta e tratamento da água da chuva e reutilização de água
                                armazenada nas mesmas.
                                <p>
                                    <br />
                                </p>
                                Inicialmente implantaremos esse sistema de captação de água, na comunidade da Tribo,
                                localizada no bairro Jardim Damasceno, Zona Norte de São Paulo. A favela fica em uma
                                pequena parte ocupada de uma área de 461 mil m² de terreno acidentado e íngreme às
                                margens da serra da Cantareira. Vivem ali cerca de mil famílias.
                            </p>
                            <br />
                            <p>
                                As famílias beneficiadas são capacitadas pelo próprio Projeto, através de um cadastro,
                                onde a partir do mesmo conseguimos contatá-las. Assim o processo de implementação das
                                tecnologias é realizado em regime de cooperação, gerando sentimento de pertencimento,
                                o que promove maior sustentabilidade ao equipamento instalado.
                            </p>
                            <br />
                            <br />
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <Link to="/aboutus" className="text-decorator-none"> </Link>
                        </Box>

                        <Box marginRight={1}>
                            <Typography className='saibamais1' variant='subtitle1' gutterBottom align='center'> Quer saber mais sobre o projeto?</Typography>
                        </Box>
                        <Link className="clique" to='/cisterna'>
                            <Typography variant='subtitle1' gutterBottom align='center' className="saibamais1">Clique aqui!</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} className='about'>

                </Grid>
                <Grid xs={12} >
                    <Box className='boxnos'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textosnos'>Conheça os integrantes do grupo </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">

                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Box className="box10" paddingX={20} display="flex">
                <div>
                    <div className="txt-img">
                        <p>fulano</p>
                        <br />
                        <br />
                        <p>siclano</p>
                        <br />
                        <br />
                        <p>beltrano</p>
                    </div>
                    <div className="txt-img2">
                        <img src="https://www.cursou.com.br/wp-content/uploads/2019/10/Curso-de-React-JS.png" alt=""

                        />
                        <img src="https://www.cursou.com.br/wp-content/uploads/2019/10/Curso-de-React-JS.png" alt=""

                        />
                        <img src="https://www.cursou.com.br/wp-content/uploads/2019/10/Curso-de-React-JS.png" alt=""

                        />
                    </div>
                </div>
            </Box>
        </>
    )
}

export default Aboutus;