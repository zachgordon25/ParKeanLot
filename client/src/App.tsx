import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import MainComp from "./components/mainComp";
import { Lot } from "./hooks/useAllLots";

function App() {
  const [parkingLot, setParkingLot] = useState<Lot>({} as Lot);
  const handleSelectLot = (lot: Lot | null) => {
    if (lot) {
      setParkingLot(lot);
      console.log(lot.lotId);
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
        <MainComp selectedLot={parkingLot} onSelectLot={handleSelectLot} />
      </GridItem>

      <Show above="lg">
        <GridItem gridArea="main">
          <MainComp selectedLot={parkingLot} onSelectLot={handleSelectLot} />
        </GridItem>
        <GridItem gridArea="form">form</GridItem>
      </Show>
    </Grid>
  );
}

export default App;
