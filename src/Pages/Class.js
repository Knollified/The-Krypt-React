import Mage from "../Assets/Mage.gif";
import Rouge from "../Assets/Rouge.gif";
import Knight from "../Assets/Knight.gif";

const Class = ({ changePage, resetPlayer, currentPlayer }) => {
  return (
    <div className="ClassPage">
      <h1>Choose Your Class</h1>
      <div className="Player_Container">
          {/* MAGE */}
        <div className="Mage">
          <img className="Mage_Img" src={Mage} alt="Mage Gif" />
          <div className={` ${ currentPlayer && currentPlayer._classType === 'Mage' ? 'Clicked' : ' ' } Character_Button `}>
            <h2 onClick={() => resetPlayer("Mage")}>The Mage</h2>
          </div>
        </div>
        {/* ROUGE */}
        <div className="Rouge">
          <img className="Rouge_Img" src={Rouge} alt="Rouge Gif" />
          <div className={` ${ currentPlayer && currentPlayer._classType === 'Rouge' ? 'Clicked' : ' ' } Character_Button `}>
            <h2 onClick={() => resetPlayer("Rouge")}>The Rouge</h2>
          </div>
        </div>
        {/* KNIGHT */}
        <div className="Knight">
          <img className="Knight_Img" src={Knight} alt="Knight Gif" />
          
          <div className={` ${ currentPlayer && currentPlayer._classType === 'Knight' ? 'Clicked' : ' ' } Character_Button `}>
            <h2 onClick={() => resetPlayer("Knight")}>The Knight</h2>
          </div>
        </div>
      </div>
      <div className="Button_Container">
        {/* Start Button */}
        {currentPlayer && <div className="Start_Game" onClick={() => changePage("Game")}>
          <h2>Start Game</h2>
        </div>}
        {/* Back Button */}
        <div className="Back_Button" onClick={() => changePage("Home")}>
          <h2>Back</h2>
        </div>
      </div>
    </div>
  );
};

export default Class;
