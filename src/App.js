import './App.css';
import CoronaNotice from './main/CoronaNotice'
import FooterBottom from './main/FooterBottom';
import FooterTop from './main/FooterTop';
import Header from './main/Header'
import MainBanner from './main/MainBanner';
import Search from './main/Search';
import TravelDestination from './main/TravelDestination';
import TravelExperience from './main/TravelExperience';
import TravelHosting from './main/TravelHosting';
import TravelIdea from './main/TravelIdea';
import TravelStay from './main/TravelStay';



function App() {
  return (
    <div className="App">

      <div className="App_mainBanner_img">
        <img className="MainBanner_img" src="img/MainBanner.jpeg" alt="MainBanner" />
      </div>

      <div className="App_main_top">
        <CoronaNotice />
        <Header />
        <Search />
      </div>

      <div className="App_mainbanner">
        <MainBanner />
      </div>

      <div className="App_main_bottom">
        <TravelDestination />
        <TravelStay />
        <TravelIdea />
        <TravelExperience />
        <TravelHosting />
      </div>

      <div className="App_footer">
        <FooterTop />
        <FooterBottom />
      </div>

    </div>
  );
}

export default App;
