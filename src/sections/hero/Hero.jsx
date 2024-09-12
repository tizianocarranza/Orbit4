import "./hero.css"
import { Slider } from "../../components/index"

function Hero() {
  return (
    <section className='hero section'>
      <h1 className="hero__header">the final frontier awaits</h1>
      <Slider />
    </section>
  )
}

export default Hero