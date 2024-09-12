import './App.css'
import { Navbar, Journey, Speed, KeepScrolling, Menu } from './components/index'
import { Hero, Start, Finish, Sticky } from './sections/index'
import stars from "./assets/space/stars.png"



/*
TODO:
Dark/light mode 
 */

function App() {

  return (
    <div className="app dark-mode">
      <KeepScrolling />
      <Navbar />
      
      <img src={stars} alt="" className='bg-stars fade-in-out' />
      <div className="sections-container">
        <Start />
        <Journey />
        <Menu />
        <Speed />
        <Hero />
        <Speed />
        <Sticky />
        <Finish />
      </div>


    </div>

  )
}

export default App;
