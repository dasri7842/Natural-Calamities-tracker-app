import GoogleMapReact from 'google-map-react';
import {useState } from 'react';
import Datapop from './Datapop'
import Fire from './Fire'
import { v4 as uuidv4 } from 'uuid';
const Gmap = ({data}) => {
   const [datapop, setdatapop] = useState(null);
   const markers = data.map(ev => {
      if(ev.categories[0].id !== 12) 
         return <Fire
                  key={uuidv4()}
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
          bootstrapURLKeys={{ key: 'AIzaSyASzUpdqx_L8SgIYhbtxnv6HRtb83xwsNE'}}
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
