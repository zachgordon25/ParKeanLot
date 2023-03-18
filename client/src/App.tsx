import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SpotsSlider from './components/SpotsSlider'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      
        <SpotsSlider/>
      </div>
    </div>
  )
}

export default App
