import { useEffect, useState } from "react";

import PlanesList from "./PlanesList";
import PlaneInfo from "./PlaneInfo";
import Logo from '../data/flatironschool.png'

function App() {
  const [planesData, setPlanesData] = useState([]);
  const [planeToDisplay, setPlaneToDisplay] = useState('No plane yet');

  useEffect(() => {
    fetch('http://localhost:9292/planes')
    .then(resp => resp.json())
    .then(data => {
      setPlanesData(data);
    })
    .catch(error => console.log(`Here is your error: ${error}`))
  }, [])

  return (
    <div className="App">
      <div className='header'>
        <img src={Logo} alt='Flatiron Logo' height='120' width='120'/>
        <div className='headerText'>
          <h1>Flatiron Airways</h1>
          <h3>Taking you where you need to go, one function at a time</h3>
        </div>
      </div>
      <PlanesList planesData={planesData} setPlaneToDisplay={setPlaneToDisplay} />
      {planeToDisplay === 'No plane yet' ? <p>Select a plane from the list to see more information about it!</p> : <PlaneInfo planeToDisplay={planeToDisplay} />}
    </div>
  );
}

export default App;