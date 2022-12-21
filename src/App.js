import './App.css';
import BannerDestaque from './components/BannerDestaque/BannerDestaque';
import Header from './components/Header/Header';
import Headerbar from './components/HeaderBar/Headerbar';
import ListProducts from './components/ListProducts/ListProducts';
import PageLocator from './components/PageLocator/PageLocator';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Headerbar />
      <PageLocator />
      <BannerDestaque />
      <div className="sections">
        <SideBar id="sideBar" />
        <ListProducts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
