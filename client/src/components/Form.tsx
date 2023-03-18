import {
  Box,
  Button,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";
import Axios from "axios";
import { Lot } from "../hooks/useAllLots";

// Form Interface
interface Props {
  parkingLot: Lot;
}
const Form = ({ parkingLot }: Props) => {
  //get image path based on openScore
  function getImagePath(openScore: number) {
    var image_path = "../src/assets/parking-" + openScore + ".png";
    // console.log("Image path: %s", image_path);
    // console.log("Open Score: ", openScore);
    return image_path;
  }

  // Get image alt text based on openScore
  function getImagePathAlt(openScore: number) {
    return getLabel(openScore);
  }

  // Get label based on slider
  function getLabel(sliderValue: number) {
    if (sliderValue > 0 && sliderValue <= 20)
      // 0 - 20
      return "All Spots are Available";
    else if (sliderValue > 20 && sliderValue <= 40)
      //21 - 40
      return "Most Spots are Available";
    else if (sliderValue > 40 && sliderValue <= 60)
      //41 - 60
      return "About half the spots are left";
    else if (sliderValue > 60 && sliderValue <= 80)
      // 61-80
      return "Almost No Spots Left";
    else return "No Spots Left";
  }

  // Get open score based on slider value
  function getOpenScore(sliderValue: number) {
    if (sliderValue > 0 && sliderValue <= 20)
      // 0 - 20
      return 0;
    else if (sliderValue > 20 && sliderValue <= 40)
      //21 - 40
      return 1;
    else if (sliderValue > 40 && sliderValue <= 60)
      //41 - 75
      return 2;
    else if (sliderValue > 60 && sliderValue <= 80)
      //61 - 80
      return 3;
    else return 4; // 81+
  }

  // Slider Constants
  const [sliderValue, setSliderValue] = React.useState(0);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [sliderLabel, setSliderLabel] = React.useState("");
  const [openScore, setOpenScore] = React.useState(0); // Refer to this const for availability score to send to mongo
  const [submissionStatus, setSubmissionStatus] = React.useState(
    "Please submit your entry"
  );
  // API Post Function
  const submitEntry = () => {
    Axios.put(`http://localhost:3000/parkinglot/${parkingLot.lotId}`, {
      parkingLotId: parkingLot.lotId,
      openScore: openScore,
    }).then((response) => {
      setSubmissionStatus("Entry Submitted");
      alert("Entry Submitted");

      // finally reload the page
      window.location.reload();
    });
  };

  return (
    <>
      <center>
        <Text fontSize={"30px"}>
          <b>
            How busy is the parking lot?
            <br />
            <br />
            Adjust the slider to let us know!
            <br />
            <br />
          </b>
        </Text>
        <div>
          {/*Image of parking availability will go here */}
          <div>
            <Box>
              <Image
                boxSize="350"
                src={getImagePath(openScore)}
                alt={getImagePathAlt(openScore)}
              />
            </Box>
          </div>
          <Box padding={5}></Box>

          {/*Slider to let user select how busy it is in the lot*/}
          <div>
            <Slider
              id="slider"
              defaultValue={1}
              min={1}
              max={100}
              padding={2}
              colorScheme="blue"
              onChangeEnd={(v) => {
                setSliderValue(v);
                setOpenScore(getOpenScore(sliderValue));
                setSliderLabel(sliderLabel);
              }}
              onChange={(v) => {
                setSliderValue(v);
                setOpenScore(getOpenScore(sliderValue));
                setSliderLabel(sliderLabel);
              }}
              onMouseEnter={() => {
                setShowTooltip(true);
              }}
              onMouseLeave={() => {
                setShowTooltip(false);
              }}
              //step={25}
              width="20vw"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="blue.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={getLabel(sliderValue)}
              >
                <SliderThumb />
              </Tooltip>
            </Slider>
          </div>
          <Box padding={4}></Box>
          {/* Submit Button to Submit Entry*/}
          <center>
            <Button
              onClick={submitEntry}
              padding={2}
              colorScheme="blue"
              width={"20vw"}
            >
              Park!
            </Button>
          </center>
          {/*Status Text*/}
          <Text fontSize="14px" padding={2}>
            {submissionStatus}
          </Text>
        </div>
      </center>
    </>
  );
};

export default Form;
