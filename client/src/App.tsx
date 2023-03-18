import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import SpotsSlider from "./components/SpotsSlider";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "locator"`,
        lg: '"nav nav nav" "locator main form"',
      }}
      templateColumns={{
        base: "1fr",
        lg: "400px 400px 1fr",
      }}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <GridItem gridArea="locator">locator</GridItem>
      <Show above="lg">
        <GridItem gridArea="main">main</GridItem>
        <GridItem gridArea="form">form</GridItem>
      </Show>
      <br></br>
      <Form parkingLotId={1} />
    </Grid>
  );
}

export default App;
