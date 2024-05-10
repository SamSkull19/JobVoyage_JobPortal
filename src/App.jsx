import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './BasicStructure/Navbar'
import Footer from './BasicStructure/Footer'
import Slider from './Home/Slider'
import banner from './assets/banner.jpg';

function App() {

  return (
    <>
      <div className='bg-[#244034]'>
        <div className="max-w-[1170px] mx-auto">
          <Navbar></Navbar>
          <div className='bg-cover bg-center h-[500px] rounded-2xl' style={{ backgroundImage: `url(${banner})` }}>
            <div className="absolute h-[500px] w-[1170px] bg-black opacity-50 rounded-2xl"></div>
            <Slider></Slider>
          </div>
          <div className='h-[50px]'></div>
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto mt-6">
        <Outlet></Outlet>


      </div>
      <div className="bg-stone-400 bg-opacity-50">
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
