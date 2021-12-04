import { mob } from "../Classes/Mob";
import{ boss } from "../Classes/Boss"
import { useEffect, useState } from "react";
import Skeleton_Warrior from "../Assets/Skeleton_Warrior.gif";
import Skeleton_Archer from "../Assets/Skeleton_Archer.gif";
import Skeleton_Lancer from "../Assets/Skeleton_Lancer.gif";
import Skeleton_Warlock from "../Assets/Skeleton_Warlock.gif";
import Skeleton_King from "../Assets/Skeleton_King.gif";
import Skeleton_Rider from "../Assets/Skeleton_Rider.gif";
import Skeleton_Dragon from "../Assets/Skeleton_Dragon.gif";
import { action } from "../Actions/Action";

const Game = ({ changePage, currentPlayer }) => {
  let enemy1 = new mob(
    "Skeleton_Warrior",
    Math.floor(Math.random() * (20 - 10) + 10),
    Math.floor(Math.random() * (7 - 2) + 2),
    Math.floor(Math.random() * (7 - 2) + 2),
    Math.floor(Math.random() * (7 - 2) + 2),
    10,
    Skeleton_Warrior
  );
  let enemy2 = new mob(
    "Skeleton_Archer",
    Math.floor(Math.random() * (20 - 10) + 10),
    Math.floor(Math.random() * (7 - 2) + 2),
    Math.floor(Math.random() * (7 - 2) + 2),
    Math.floor(Math.random() * (7 - 2) + 2),
    10,
    Skeleton_Archer
  );
  let enemy3 = new mob(
    "Skeleton_Lancer",
    Math.floor(Math.random() * (20 - 10) + 10),
    Math.floor(Math.random() * (7 - 2) + 2),
    Math.floor(Math.random() * (7 - 2) + 2),
    Math.floor(Math.random() * (7 - 2) + 2),
    10,
    Skeleton_Lancer
  );
  let enemy4 = new mob(
    "Skeleton_Warlock",
    Math.floor(Math.random() * (20 - 10) + 10),
    Math.floor(Math.random() * (7 - 2) + 2),
    Math.floor(Math.random() * (7 - 2) + 2),
    Math.floor(Math.random() * (7 - 2) + 2),
    10,
    Skeleton_Warlock
  );
  let boss1 = new boss(
    "Skeleton_Rider",
    Math.floor(Math.random() * (35 - 20) + 20),
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    20,
    Skeleton_Rider
  );
  let boss2 = new boss(
    "Skeleton_King",
    Math.floor(Math.random() * (40 - 25) + 25),
    Math.floor(Math.random() * (12 - 8) + 8),
    Math.floor(Math.random() * (12 - 8) + 8),
    Math.floor(Math.random() * (12 - 8) + 8),
    20,
    Skeleton_King
  );
  let boss3 = new boss(
    "Skeleton_Dragon",
    Math.floor(Math.random() * (45 - 30) + 30),
    Math.floor(Math.random() * (15 - 10) + 10),
    Math.floor(Math.random() * (15 - 10) + 10),
    Math.floor(Math.random() * (15 - 10) + 10),
    20,
    Skeleton_Dragon
  );
  let mobList = [enemy1, enemy2, enemy3, enemy4]
  let bossList = [boss1, boss2, boss3]
  const [currentMob, setCurrentMob] = useState(enemy1);
  
  useEffect(() => {
    let enemyChoice = Math.floor(Math.random() * (4 - 0) + 0)
    console.log(enemyChoice)
    const r = ()=>{
      setCurrentMob(mobList[enemyChoice])
    }
    r()
  }, []);
  const [currentBoss, setCurrentBoss] = useState(boss1);
  
  useEffect(() => {

    const r = ()=>{
      
      setCurrentBoss(boss1)
    }
    r()
  }, []);

  return (
    <div className="Game_Page">
      <h1>Clear The Krypt</h1>
      <div className="Player_Area">
        <div className="Player">
          <div className="Player_Stats">
            <div className="Stats">
              <h4>Hp: {currentPlayer._health}</h4>
            </div>
            <div className="Stats">
              <h4>Atk: {currentPlayer._attack}</h4>
            </div>
            <div className="Stats">
              <h4>Def: {currentPlayer._defense}</h4>
            </div>
            <div className="Stats">
              <h4>Spd: {currentPlayer._speed}</h4>
            </div>
            <div className="Stats">
              <h4>Coins: {currentPlayer._coin} </h4>
            </div>
          </div>
          <div className="Current_Player">
            <img src={currentPlayer._img} alt="" />
          </div>
          {currentMob._health  > 0 ? ' ' : <div className="Shop_Button " onClick={() => changePage("Shop")}> 
            <h4>Shop</h4>
          </div>}
        </div>
        <div className="Game_Events">
          <h3>Game Events</h3>
        </div>
        <div className="Mob">
          <div className="Mob_Stats">
            <div className="Stats">
              <h4>Hp: {currentMob._health}</h4>
            </div>
            <div className="Stats">
              <h4>Atk: {currentMob._attack}</h4>
            </div>
            <div className="Stats">
              <h4>Def: {currentMob._defense}</h4>
            </div>
            <div className="Stats">
              <h4>Spd: {currentMob._speed}</h4>
            </div>
          </div>
          <div className="Current_Player">
            <img src={currentMob._img} alt="" />
          </div>
          <div className="NextBattle_Button">
            <h4>Next Battle</h4>
          </div>
        </div>
      </div>
      <div className="Action_Containers">
        <div className="Attack_Button" onClick={ () => action.Attack(currentMob)}>
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
