import SpotsSlider from './SpotsSlider'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Form = () => {
  return (
    <div>
        {/*Image of parking availability will go here */}
        
    
        {/*Slider to let user select how busy it is in the lot*/}
        <SpotsSlider/>

        {/* Submit Button to Submit Entry*/}
        <Button colorScheme='blue'>Button</Button>
    </div>
  )
}

export default Form