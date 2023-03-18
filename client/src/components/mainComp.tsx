import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useAllLots, { Lot } from "../hooks/useAllLots";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedLot: Lot;
  onSelectLot: (lot: Lot | null) => void;
}

const mainComp = ({ onSelectLot, selectedLot }: Props) => {
  const lots = useAllLots();
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedLot?.name || "Parking Lots"}
        </MenuButton>
        <MenuList>
          {lots.map((lot) => (
            <MenuItem key={lot.lotId} onClick={() => onSelectLot(lot)}>
              {lot.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default mainComp;
