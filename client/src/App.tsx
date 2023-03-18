import "./App.css";
import { Box, Button, Grid, GridItem, Show } from "@chakra-ui/react";
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

  const [showForm, setShowForm] = useState(false);

  // Show form display
  function showFormFun() {
    if (!showForm && parkingLot.lotId != null) setShowForm(true);
  }

  // Hide form display
  function hideFormFun() {
    if (showForm) setShowForm(false);
  }
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
        }}
        templateColumns={{
          base: "1fr",
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
      </Grid>
      {showForm && <Form parkingLotId={0} />}
      <Button onClick={hideFormFun}>Back</Button>
      <Button onClick={showFormFun}>Next</Button>
    </>
  );
}
//if(isMobile) {<Form parkingLotId={1} />}

export default App;
