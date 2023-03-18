import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";

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
    </Grid>
  );
}

export default App;
