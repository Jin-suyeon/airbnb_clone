import './App.css';
import CoronaNotice from './main/CoronaNotice'
import Header from './main/Header'
import MainBanner from './main/MainBanner';

function App() {
  return (
    <div className="App">
      <CoronaNotice />
      <div className="Top">
        <div className="Header">
          <Header />
        </div>
        <div className="MainBanner">
          <MainBanner />
        </div>
      </div>
    </div>
  );
}

export default App;
