import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';
import './Cisterna.css';
import { Link } from 'react-router-dom';



function Cisterna() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='backabout'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography className='titulosobre1' variant="h3" gutterBottom color="textPrimary" component="h3" align="center" >Projeto Igarapé</Typography>
                        <Typography className='titulosobre' variant="h5" gutterBottom color="textPrimary" component="h5" align="center" >
                            
                            <p>
                            O Projeto Igarapé trouxe cisternas modulares pois é uma alternativa até mesmo para quem mora em apartamentos ou residências urbanas em geral, que possibilitam o estoque 
                            de água limpa, de reúso ou da chuva. Elas se adaptam a espaços reduzidos e são uma ótima ferramenta para a captação de águas pluviais.
                            </p>

                            <p>
                            Esses tipos de cisternas possuem diversas capacidades, são compactos e não precisam ser enterrados, o que diminui os custos de instalação. Muito práticas, não é?

                            </p>

                            <p>
                            Quando pensamos em armazenamento de água, é fundamental garantir a segurança desse processo. Os tanques possuem proteção UV-8, que os tornam resistentes aos raios solares,
                             inibindo a formação de algas e limo. 
                            </p>

                            <p>
                            E evitam a contaminação da água, pois o reservatório é fechado, longe de poeira e contaminação de mosquitos, vermes e ratos, evitando doenças como dengue, chikungnya e leptospirose.

                            </p>

                            <p>
                            Em áreas externas, as cisternas verticais modulares são uma ótima opção para a captação de água da chuva, que pode ser utilizada para a rega de plantas, horta, ou limpeza da garagem, 
                            entre outros locais da casa. Se sua cidade estiver passando por um período de seca, os tanques também podem armazenar água de reúso, ideal para lavar carros, quintal e calçadas.
 
                            </p>

                            <p>
                            Além disso, mesmo em regiões metropolitanas, onde a concentração de poluentes no ar costuma ser mais elevada, a água da chuva, se bem filtrada e tratada, pode se tornar potável e apta para ser consumida.

 
                            </p>

                            <p>
                            Segundo o professor do Departamento de Saúde Ambiental da Faculdade de Saúde Pública da Universidade de São Paulo (USP), Pedro Caetano Sanches Mancuso, “o processo de purificação pode ser realizado em casa. 
                            Quanto mais limpa for a captação, melhor. Assim que armazenar, a água pode ser colocada em filtros convencionais de cozinha, onde a vela, se bem mantida, remove partículas. Após esse processo, o ideal é que 
                            a água seja fervida por pelo menos cinco minutos para acabar com as bactérias. Depois disso estará pronta para o consumo”.
 
                            </p>

                            <p>
                            Para tratar a água da chuva, utilize um filtro a vela. Insira a quantidade de água desejada e espere o filtro fazer seu trabalho. Em seguida, retire a água do filtro e ferva-a em uma panela por pelo menos cinco minutos. 
                            Normalmente, depois desse processo, a água estará pronta para o consumo, mas se você sente mais segurança utilizando cloro, pode adicionar 16 gotas de cloro sem cheiro a cada 20 litros de água.
 
                            </p>
                            
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        <Link to="/aboutus" className="text-decorator-none"> </Link>                    
                    </Box>       

                    <Box marginRight={1}>
                            <Typography className='saibamais' variant='subtitle1' gutterBottom align='center'> Quer saber mais?</Typography>
                        </Box>
                        <Link to='/cisterna'>
                        <Typography variant='subtitle1' gutterBottom align='center' className="clique">Clique aqui!</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} className='about'>
                    
                </Grid>
                <Grid xs={12} >
                </Grid>
            </Grid>
        </>
    )
}

export default Cisterna;


