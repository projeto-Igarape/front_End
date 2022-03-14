import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabProduto.css';
import ListaProduto from '../listaProduto/ListaProduto';


function TabProduto() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="relative">
          <Tabs centered onChange={handleChange} className="box_tP">
            <Tab className="ti_text" label="Nossos Produtos" value="1" />
            <Tab className="ti_text" label="Nossa Cultura" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaProduto />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom component="h5" className="ti_text2" >Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom className="ti_text3">
          <div className="flex-container">
            <div><h1>Missão</h1>
              <p>Promover a qualidade de vida de  <br /> comunidades carentes por meio  <br /> de água potável. E estimular o <br /> uso de produtos sustentáveis.</p></div>
            <div><h1>Visão</h1>
              <p>Atrair para o Projeto Igarapé pessoas <br /> e empreendimentos que se alinhem ao <br />propósito,  aumentando a capacidade <br />de comunidades a serem assistidas <br />pelo programa.</p></div>
            <div><h1>Valores</h1>
              <p><li>Agir com Transparência <br /></li>
              <li>Pensar e atuar de forma sustentável <br /></li>
              <li>Integridade <br /></li>
              <li>Responsabilidade com as pessoas <br /></li>
              </p></div>
                </div>
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProduto;