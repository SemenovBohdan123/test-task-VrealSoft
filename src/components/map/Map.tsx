import { FC, useState } from "react";
import ReactMapGl, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  ScaleControl,
  ViewState,
  ViewStateChangeEvent,
} from "react-map-gl";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYm9nb251dHVpIiwiYSI6ImNsbm40aTgybjAyeGoybXBmbTlicXUzbmMifQ.F5UbJeLuN1yNG7lqpyOuhg";

const initialViewState: IInitialViewState = {
  lng: 28.6448,
  lat: 77.216,
  zoom: 8,
};

export const MapComponent: FC<MapComponentProps> = ({
  markData,
  w = "600px",
  h = "400px",
  initialViewStateProps = initialViewState,
}) => {
  const [viewPort, setViewPort] = useState<IInitialViewState | ViewState>(
    initialViewStateProps
  );
  const [markDataState, setMarkDataState] = useState<Array<IInitialViewState>>(
    markData || []
  );

  const DbClickHandler = (event: mapboxgl.MapLayerMouseEvent) => {
    event.preventDefault();
    const { lngLat } = event;

    const copyMarkDataState = [...markDataState];
    copyMarkDataState.push({
      lat: lngLat.lat,
      lng: lngLat.lng,
      zoom: viewPort.zoom,
    });

    setMarkDataState(copyMarkDataState);
  };

  const handleDeleteMarker = (event: any) => {
    const {
      target: { _lngLat },
    } = event;

    let copyMarkDataState = [...markDataState];

    copyMarkDataState.forEach((item, index) => {
      if (item.lat === _lngLat.lat && item.lng === _lngLat.lng) {
        copyMarkDataState.slice(index, 1);
        copyMarkDataState = copyMarkDataState.slice(index, 1);
      }
    });

    setMarkDataState(copyMarkDataState);
  };

  return (
    <div style={{ width: w, height: h }}>
      <ReactMapGl
        {...viewPort}
        onDblClick={(event) => DbClickHandler(event)}
        onMove={(viewPort: ViewStateChangeEvent) =>
          setViewPort(viewPort.viewState)
        }
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        {markDataState &&
          markDataState.map((mark, index) => (
            <Marker
              key={`marker-${index}`}
              longitude={mark.lng}
              latitude={mark.lat}
              anchor="bottom"
              onClick={(event) => handleDeleteMarker(event)}
            />
          ))}
      </ReactMapGl>
    </div>
  );
};
