import './App.css';
import { Outlet } from 'react-router-dom'
import AppContextProvider from './context/AppContext'

//layout
import Header from './layout/Header'
import Footer from './layout/Footer';

//components
import SidebarWrap from './components/pages/Sidebar';
import Ads from './components/pages/Ads';

function App() {
  return (
    <AppContextProvider>
      <Header />
      <section className='indexwrap'>
        <SidebarWrap />
        <Outlet />
        <Ads />
      </section>
      <Footer />
    </AppContextProvider>
  );
}

export default App;