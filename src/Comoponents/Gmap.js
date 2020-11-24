import GoogleMapReact from 'google-map-react';
import {useState } from 'react';
import Datapop from './Datapop'
import Fire from './Fire'
const Gmap = ({data}) => {
   const [datapop, setdatapop] = useState(null);
   const markers = data.map(ev => {
      if(ev.categories[0].id !== 12) 
         return <Fire
                  lat={ev.geometries[0].coordinates[1]}
                  lng={ev.geometries[0].coordinates[0]} 
                  datapop={()=>{
                     setdatapop(ev);
                  }}
                />
      else return null;;
   })
   const remove = () => {
      setdatapop(null);
   }
   return (
      <div className="Gmap">
         <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}`}}
          defaultCenter={{
            lat : 0,
            lng : 0
         }}
          defaultZoom={0}
        >
           {markers}
         </GoogleMapReact>
         {datapop && <Datapop data={datapop} remove={remove}/>}
      </div>
   )
}

export default Gmap
