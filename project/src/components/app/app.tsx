import HomePage from '../../pages/home-page/home-page';

type AppScreenProps = {
  rentItemCount: number;
}


function App({rentItemCount}: AppScreenProps): JSX.Element {
  return <HomePage rentItemCount={rentItemCount}/>;
}

export default App;
