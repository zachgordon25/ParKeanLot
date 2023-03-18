import { Grid, GridItem } from "@chakra-ui/react";

interface Props {
  average: number;
}

const RenderCars = ({ average }: Props) => {
  //round the average to 1 decimal place
  average = Math.round(average * 10) / 10;

  return (
    <Grid>
      <GridItem colSpan={average} bg="green.500" />
      <GridItem colSpan={10 - average} bg="red.500" />
    </Grid>
  );
};

export default RenderCars;
