import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import useAllLots, { Lot } from "../hooks/useAllLots";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import RenderCars from "./RenderCars";

interface Props {
  selectedLot: Lot;
  onSelectLot: (lot: Lot | null) => void;
}

const mainComp = ({ onSelectLot, selectedLot }: Props) => {
  //try grab real tieme data from useLot hook
  const [parkingLot, setParkingLot] = useState<Lot>({} as Lot);

  const handleSelectLot = (lot: Lot | null) => {
    onSelectLot(lot);
    // Check if lot is not null before fetching
    if (lot?.lotId) {
      axios
        .get(`http://localhost:3000/parkinglot/${lot.lotId}`)
        .then((response) => {
          setParkingLot(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const lots = useAllLots();

  return (
    <>
      <Center paddingY={5}>
        <Menu>
          <MenuButton
            fontSize={50}
            width={"auto"}
            as={Button}
            rightIcon={<BsChevronDown />}
          >
            {selectedLot?.name || "Select Parking Lot"}
          </MenuButton>
          <MenuList>
            {lots.map((lot) => (
              <MenuItem key={lot.lotId} onClick={() => handleSelectLot(lot)}>
                {lot.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Center>
      <Card height="60vh">
        <CardBody>
          <RenderCars average={parkingLot.averageOccupancy} />
        </CardBody>
      </Card>
    </>
  );
};

export default mainComp;
