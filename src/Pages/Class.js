import Mage from "../Assets/Mage.gif";
import Rouge from "../Assets/Rouge.gif";
import Knight from "../Assets/Knight.gif";
const Class = ({ changePage }) => {
  class player {
    _classType = "";
    _health = 0;
    _attack = "";
    _speed = "";
    _defense = "";

    constructor(classType, health, attack, speed, defense) {
      this._classType = classType;
      this._health = health;
      this._attack = attack;
      this._speed = speed;
      this._defense = defense;
    }
    start() {
      return {
        classType: this._classType,
        _health: this._health,
        _attack: this._attack,
        _speed: this._speed,
        _defense: this._defense,
      };
    }
    increaseLife(number) {
      this._health = this._health + number;
      console.log({
        classType: this._classType,
        _health: this._health,
        _attack: this._attack,
        _speed: this._speed,
        _defense: this._defense,
      });
    }
  }
  let Player;
  const resetPlayer = (classType) => {
    switch (classType) {
      case "Mage":
        Player = new player(classType, 25, 5, 5, 5);
        alert(JSON.stringify(Player.start()));
        break;
      case "Rouge":
        Player = new player(classType, 20, 7, 7, 3);
        alert(JSON.stringify(Player.start()));

        break;
      case "Warrior":
        Player = new player(classType, 28, 7, 3, 7);
        alert(JSON.stringify(Player.start()));

        break;
    }
  };

  return (
    <div className="ClassPage">
      <h1>Choose Your Class</h1>
      <div className="Player_Container">
        <div className="Mage">
          <img className="Mage_Img" src={Mage} alt="Mage Gif" />
          <div className="Character_Button">
            <h2 onClick={() => resetPlayer("Mage")}>The Mage</h2>
          </div>
        </div>
        <div className="Rouge">
          <img className="Rouge_Img" src={Rouge} alt="Rouge Gif" />
          <div className="Character_Button">
            <h2 onClick={() => resetPlayer("Rouge")}>The Rouge</h2>
          </div>
        </div>
        <div className="Knight">
          <img className="Knight_Img" src={Knight} alt="Knight Gif" />
          <div className="Character_Button">
            <h2 onClick={() => resetPlayer("Warrior")}>The Warrior</h2>
          </div>
        </div>
      </div>
      <div className="Button_Container">
        <div className="Start_Game" onClick={() => changePage("Game")}>
          <h2>Start Game</h2>
        </div>
        <div className="Back_Button" onClick={() => changePage("Home")}>
          <h2>Back</h2>
        </div>
      </div>
    </div>
  );
};

export default Class;
