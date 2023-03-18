import React from "react";
import { Tooltip } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

// Get label based on slider
function getLabel(sliderValue: number) {
  var label = "";
  switch (sliderValue) {
    case 0:
      label = "All Spots are Available";
      break;
    case 25:
      label = "Most Spots are Available";
      break;
    case 50:
      label = "About Half the Spots Left";
      break;
    case 75:
      label = "Almost No Spots Left";
      break;
    case 100:
      label = "No Spots Left";
      break;
  }
  return label;
}

// Get open score based on slider value
function getOpenScore(sliderValue: number) {
  var openScore = 0;
  switch (sliderValue) {
    case 0:
      openScore = 0;
      break;
    case 25:
      openScore = 1;
      break;
    case 50:
      openScore = 2;
      break;
    case 75:
      openScore = 3;
      break;
    case 100:
      openScore = 4;
      break;
  }
  return openScore;
}

// Setup SpotsSlider
function SpotsSlider() {
  const [sliderValue, setSliderValue] = React.useState(0);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [sliderLabel, setSliderLabel] = React.useState("");
  const [openScore, setOpenScore] = React.useState(0); // Refer to this const for availability score to send to mongo

  return (
    <>
      {/*Label for Slider Values - WILL REPLACE WITH IMAGE IF WE HAVE TIME*/}
      <p>{getLabel(sliderValue)}</p>

      {/*Slider Portion*/}
      <Slider
        id="slider"
        defaultValue={0}
        min={0}
        max={100}
        colorScheme="teal"
        onChange={(v) => {
          setSliderValue(v);
          setSliderLabel(sliderLabel);
          setOpenScore(getOpenScore(sliderValue));
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        step={25}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={getLabel(sliderValue)}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </>
  );
}

export default SpotsSlider;
