import Lottie from "lottie-react";

import blood from '../assets/blood.json'

const Loader = () => {
    
    return(
      <Lottie animationData={blood} loop={true} style={{height:"10rem"}} />
    )
}

export default Loader;