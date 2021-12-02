import Mage from "../Assets/Mage.gif";
import Rouge from "../Assets/Rouge.gif";
import Knight from "../Assets/Knight.gif";

const Game = ({ changePage }) => {
  return (
    <div className="Game_Page">
      <h1>Clear The Krypt</h1>
      <div className="Player_Area">
        <div className="Player">
          <div className="Player_Stats">
            <div className="Stats">
              <h4>Hp: </h4>
            </div>
            <div className="Stats">
              <h4>Atk: </h4>
            </div>
            <div className="Stats">
              <h4>Def: </h4>
            </div>
            <div className="Stats">
              <h4>Spd: </h4>
            </div>
            <div className="Stats">
              <h4>Coins: </h4>
            </div>
          </div>
          <div className="Shop_Button" onClick={() => changePage("Shop")}>
            <h4>Shop</h4>
          </div>
        </div>
        <div className="Game_Events">
          <h3>Game Events</h3>
        </div>
        <div className="Mob">
          <div className="Mob_Stats">
            <div className="Stats">
              <h4>Hp: </h4>
            </div>
            <div className="Stats">
              <h4>Atk: </h4>
            </div>
            <div className="Stats">
              <h4>Def: </h4>
            </div>
            <div className="Stats">
              <h4>Spd: </h4>
            </div>
          </div>
          <div className="NextBattle_Button">
            <h4>Next Battle</h4>
          </div>
        </div>
      </div>
      <div className="Action_Containers">
        <div className="Attack_Button">
          <h2>Attack</h2>
        </div>
        <div className="Defend_Button">
          <h2>Defend/Dodge</h2>
        </div>
        <div className="SpecialAttack_Button">
          <h2>Special Attack</h2>
        </div>
      </div>
      <div className="Back_Button" onClick={() => changePage("Home")}>
        <h2>Quit</h2>
      </div>
    </div>
  );
};

export default Game;
