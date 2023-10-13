interface MapComponentProps {
  w?: string;
  h?: string;
  markData?: Array<IInitialViewState> | null;
  initialViewStateProps?: IInitialViewState;
}

interface IInitialViewState {
  lng: number;
  lat: number;
  zoom: number;
}
