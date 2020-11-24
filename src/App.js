import { useEffect, useState } from 'react';
import Gmap from './Comoponents/Gmap'
import Header from './Comoponents/Header'
import Loader from './Comoponents/Loader'

function App() {
  const [eventdata, setEventData ] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(()=>{
    const fetchEvents = async () => {
      setLoader(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const {events} = await res.json();
      setLoader(false);
      setEventData(events)
    }
    fetchEvents();
  },[])
  return (
    <div className="App">
      <Header/>
      {loader ? <Loader/> : <Gmap data={eventdata}/>}
    </div>
  );
}

export default App;
