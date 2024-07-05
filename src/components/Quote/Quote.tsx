import "./Quote.css"
import images from "../../constants/images"

const Quote = () => {
  return (
    <>
      <div className="semi-rectangle">
        <img src={images.semiRectangle} className="semi-rectangle-img" />
      </div>
      <div className="quote-container">
        <div className="mini-container">
          <div className="quotation-title">
            <img src={images.quotationMark} className="img1" />
            <p>With great power comes great electricity bill</p>
            <img src={images.quotationMark} className="img2" />
          </div>
          <p className="author">- Dr. Who</p>
        </div>
      </div>
    </>
  )
}
export default Quote