import {
  Card,
  Text,
  CardBody,
  GridItem,
  Image,
  SimpleGrid,
  Center,
  Heading,
} from "@chakra-ui/react";
import { Lot } from "../hooks/useAllLots";

interface Props {
  parkinglot: Lot;
}

const RenderCars = ({ parkinglot }: Props) => {
  //based on the average, render certain amount of random images from the car images folder
  const carsToRender = (parkinglot.averageOccupancy / 4) * 10;
  //roud cars to render to nearest whole number
  const roundedCars = Math.round(carsToRender);
  let carImageSRC: string[] = [];
  for (let i = 0; i < roundedCars; i++) {
    //generate random number between 1 and 20
    const randomNum = Math.floor(Math.random() * 20) + 1;
    //push the random number to the carImageSRC array
    carImageSRC.push(`../src/assets/render/car_variations/${randomNum}.png`);
  }
  //the remaining elements in the array will be '../src/assets/render/car_variations/0.png'
  const remainingCars = 10 - roundedCars;
  for (let i = 0; i < remainingCars; i++) {
    carImageSRC.push(`../src/assets/render/car_variations/0.png`);
  }
  //shuffle the array
  for (let i = carImageSRC.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [carImageSRC[i], carImageSRC[j]] = [carImageSRC[j], carImageSRC[i]];
  }
  //return a 5x2 grid of images after 5 cars are rendered print a line
  return (
    <>
      <Center>
        <Heading padding={3}>{parkinglot.name}</Heading>
      </Center>
      <Center>
        <Card width={"50vw"}>
          <CardBody>
            <SimpleGrid columns={5}>
              {carImageSRC.map((car, index) => (
                <GridItem key={index}>
                  <Image src={car} alt="car" />
                </GridItem>
              ))}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Center>

      <Text textAlign={"center"}>
        Crowd sourced value: {parkinglot.averageOccupancy}
      </Text>
    </>
  );
};

export default RenderCars;
