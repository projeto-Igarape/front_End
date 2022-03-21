import React, { ChangeEvent, useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import "./Parceiros.css";
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';
 
function Parceiros() {
    return(
        <>
       
       <Grid container direction="row" justifyContent="center" alignItems="center" className='imgfundo'>

     
                <Grid alignItems="center" item xs={5}>
                <a href='https://gotadagua.vercel.app/' target ='_blank' className='parcimg'>
                    <img src='https://i.imgur.com/w9mxlYI.jpg' alt="" />
                    </a>
                </Grid>
		
                <Grid alignItems="center" item xs={7}>
                    <h1 className='txth1'>Gota D'água </h1>
                    <br/>
                    <p className='txth4'>É uma rede social que assim como nós, prioriza o cuidado da água e tem como foco divulgar dicas 
                    para que todos cuidem de sua saúde e ajudar pessoas em vulnerabilidade, sem acesso à água potável.</p>
                    <br/>
                <p className='vermais'>Clique na imagem ao lado para saber mais.</p>
                </Grid>
                <Grid alignItems="center" item xs={5}>
                <a href='https://brazil.generation.org/' target ='_blank' className='parcimg'>
                     <img src="https://i.imgur.com/jv5rS7R.jpg" alt="" />
                     </a>
                </Grid>
                <Grid alignItems="center" item xs={7}>
                    <h1 className='txth1'>Generation </h1>
                    <br/>
                    <p className='txth4'>É uma ONG focada em transformar sistemas de educação para o emprego de maneira a preparar, 
                    colocar e apoiar pessoas em carreiras transformadoras que, de outra forma, seriam inacessíveis.</p>
                    <br/>
                    <p className='vermais'>Clique na imagem ao lado para saber mais.</p>
                </Grid>

                <Grid alignItems="center" item xs={5}>
               
                </Grid>
                <Grid alignItems="center" item xs={7}>
                    
                    <br/>
                    
                </Grid>
                <br/>

</Grid>



       
      
 
              
             
    </>
    )
   
}
 
export default Parceiros;
 

