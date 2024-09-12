import "./slider.css"
import galaxy from "../../assets/space/galaxy.png"
import galaxy2 from "../../assets/space/galaxy2.png"

function Slider() {
    return (
        <div className="slider-container">
            <div className='slider'>
                <input type="radio" name="slider" id="s1" />
                <input type="radio" name="slider" id="s1" />

                <label htmlFor="s1">
                    <img src={galaxy} alt="Image of the galaxy" id="image1" />
                </label>
                <label htmlFor="s1">
                    <img src={galaxy2} alt="Image of the galaxy" id="image1" />
                </label>
            </div>
            <div className="slider__controller">
                <div className="slider__controller-actual"></div>
                <div className="slider__controller-next"></div>
            </div>
        </div>

    )
}

export default Slider