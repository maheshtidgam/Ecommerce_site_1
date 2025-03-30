
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Banner from './Components/Banner/Banner';

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
      <Banner /> 
    </div>

  )
}

export default App
