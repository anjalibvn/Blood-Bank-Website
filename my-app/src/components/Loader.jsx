import Lottie from "lottie-react";

import blood from '../assets/blood.json'

const Loader = () => {
    
    return(
      <div style={{background:"#e6ffff"}}>
      <Lottie animationData={blood} loop={true} style={{height:"70vh"}} />
      </div>
    )
}

export default Loader;