import {
  APIProvider,
  AdvancedMarker,
  Map,
} from '@vis.gl/react-google-maps';
const key = import.meta.env.VITE_API_DOOR;
const mapId = import.meta.env.VITE_MAP_ID;

const TheMap = () => {
        // style={{ width: '40vw', height: '40vh' }}

  return (
    <APIProvider apiKey={key}>
      <Map
        className='w-[60vw] h-[25vh] md:h-[60vh] md:w-[40vw] lg:h-[50vh] lg:w-[40vw]'
        zoom={12}
        center={{ lat: 53.54992, lng: 10.00678 }}
        mapId={mapId}
      >
        <AdvancedMarker
          position={{ lat: 53.54992, lng: 10.00678 }}
        ></AdvancedMarker>
      </Map>
    </APIProvider>
  );

};

export default TheMap;
