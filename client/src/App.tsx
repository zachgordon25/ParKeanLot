import "./App.css";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import MainComp from "./components/mainComp";
import { Lot } from "./hooks/useAllLots";
import Form from "./components/Form";

function App() {
  const [parkingLot, setParkingLot] = useState<Lot>({} as Lot);
  const handleSelectLot = (lot: Lot | null) => {
    if (lot) {
      setParkingLot(lot);
    }
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: '"nav nav" "main form"',
      }}
      templateColumns={{
        base: "1fr",
        lg: "50vw 1fr",
      }}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <GridItem gridArea="main">
        <Box padding={3}>
          <MainComp selectedLot={parkingLot} onSelectLot={handleSelectLot} />
        </Box>
      </GridItem>

      <Show above="lg">
        <GridItem gridArea="form">
          <Form parkingLot={parkingLot} />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
