import './App.css';
import cardImage from './images/illustration-hero.svg'
import cardIcon from './images/icon-music.svg'

function App() {


  return (
    <>
        <Card />
    </>
  )
}

const Card = () => {
    return (
        <main className="card">

            <img src={cardImage} alt="" className="card__image"/>
            <h1 className="card__title">Order Summary</h1>
            <p className="card__info">You can now listen to millions of songs, audiobooks, and podcasts on any
                device anywhere you like!</p>
            <div className="card__subscribe">
                <img src={cardIcon} alt="" className="subscribe__image"/>
                <h2 className="subscribe__title">Annual Plan</h2>
                <p className="subscribe__cost">$59.99/year</p>
                <a href="" className="subscribe__link">Change</a>
            </div>
            <button className="card__button-payment">Proceed to Payment</button>
            <button className="card__button-cancel">Cancel Order</button>

        </main>
    )
}

export default App

