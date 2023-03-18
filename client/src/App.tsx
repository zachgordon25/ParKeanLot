import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react';
import SpotsSlider from './components/SpotsSlider';
import Form from './components/Form';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: '"nav nav nav" "locator main form"',
      }}
      templateColumns={{
        base: "1fr",
        lg: "400px 50% 400px",
      }}
    >
      <GridItem gridArea="nav">Nav</GridItem>
      <GridItem gridArea="locator">locator</GridItem>
      <Show above="lg">
        <GridItem gridArea="main">main</GridItem>
        <GridItem gridArea="form">form</GridItem>
      </Show>
      <br></br>
              <Form/>

    </Grid>
    
  );
}

export default App;
