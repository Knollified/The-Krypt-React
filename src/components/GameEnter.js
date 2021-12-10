import { useState } from "react";
import { Home, Class, Game, HowToPlay, Shop } from "../Pages/";
import Mage from "../Assets/Mage.gif";
import Rouge from "../Assets/Rouge.gif";
import Knight from "../Assets/Knight.gif";
import { player } from "../Classes/Player";

function GameEnter() {
  const [page, setPage] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState();
  const [score, setScore] = useState(1);
  const [specialAttackCount, setSpecialAttack] = useState(1);
  const [bossChoice, setBossChoice] = useState(0);

  let Player;
  const resetPlayer = (classType) => {
    switch (classType) {
      case "Mage":
        Player = new player(classType, 35, 35, 8, 5, 3, 8, Mage, 0);
        setCurrentPlayer(Player);
        setSpecialAttack(1);
        break;
      case "Rouge":
        Player = new player(classType, 30, 30, 7, 7, 5, 7, Rouge, 0);
        setCurrentPlayer(Player);
        setSpecialAttack(1);
        break;
      case "Knight":
        Player = new player(classType, 45, 45, 9, 3, 7, 9, Knight, 0);
        setCurrentPlayer(Player);
        setSpecialAttack(1);
        break;
      default:
    }
  };

  const changePage = (str) => {
    setPage(str);
  };

  const pageToShow = () => {
    switch (page) {
      case "Class":
        return (
          <Class
            changePage={changePage}
            resetPlayer={resetPlayer}
            currentPlayer={currentPlayer}
          />
        );
      case "HowToPlay":
        return <HowToPlay changePage={changePage} />;
      case "Game":
        return (
          <Game
            changePage={changePage}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            bossChoice={bossChoice}
            setBossChoice={setBossChoice}
            score={score}
            setScore={setScore}
            specialAttackCount={specialAttackCount}
            setSpecialAttack={setSpecialAttack}
          />
        );
      case "Shop":
        return (
          <Shop
            changePage={changePage}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            bossChoice={bossChoice}
            setBossChoice={setBossChoice}
            specialAttackCount={specialAttackCount}
            setSpecialAttack={setSpecialAttack}
          />
        );
      default:
        return <Home changePage={changePage} />;
    }
  };

  return (
    <div className="Game_Container">
      <div className="Game_Space">{pageToShow()}</div>
    </div>
  );
}

export default GameEnter;
