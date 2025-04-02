
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  useEffect(() => {
    Aos.init({
      offset: 100, duration: 2000,
      easing: 'ease-in-sine', delay: 100
    });
    Aos.refresh();
  }
    , []);
  return (

    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Banner />
    </div>

  )
}

export default App
