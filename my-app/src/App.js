import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Loader from "./components/Loader";
import Donor from "./Donor";
import Receiver from "./Receiver";
import { useState } from "react";
const App = () => {
  const [hide, setHide] = useState(false);
  const [hidee, setHidee] = useState(true);
  return (
    <>
      <div>
        <Navbar />
      </div>
      {
        !hide ? <div>
          <Loader />
          <Form> </Form>

        </div>
          :
          <Donor />

      }

      {
        !hidee && <div>
          <Receiver />
        </div>
      } <button style={{ padding: "4px" }} onClick={() => setHide(!hide)}>Click to donate</button> <br></br>
      <button style={{ padding: "4px" }} onClick={() => setHidee(!hidee)}>Click to Receive</button><br></br>
    </>


  );
}

export default App;
