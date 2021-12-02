import Skull from '../Assets/Skull.gif'
const Home = ({changePage}) => {
    return (
        <div>
         <header>
            <h1>Welcome To The Krypt Enter If You Dare!</h1>
          </header>
          <div className="Image_Container">
            <img className="Skull_img" src= { Skull } alt="" />
          </div>
          <div className="Buttons">
            <div className="Button_1" onClick={()=>changePage('Class')}>
              <h2>Enter The Krypt</h2>
            </div>
            <div className="Button_2" onClick={()=>changePage('HowToPlay') }>
              <h2>How To Play</h2>
            </div>
          </div>
      </div>
      )
}

export default Home