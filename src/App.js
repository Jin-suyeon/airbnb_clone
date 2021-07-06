import './App.css';
import CoronaNotice from './main/CoronaNotice'
import Header from './main/Header'
import MainBanner from './main/MainBanner';
import Search from './main/Search';
import TravelDestination from './main/TravelDestination';
import TravelStay from './main/TravelStay';



function App() {
  return (
    <div className="App">
      <CoronaNotice />
      <Header />
      <Search />
      <MainBanner />
      <TravelDestination />
      <TravelStay />
    </div>
  );
}

export default App;
