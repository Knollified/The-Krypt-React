import { useState } from "react";
import { Home, Class, Game, HowToPlay, Shop } from "../Pages/";
import Mage from "../Assets/Mage.gif";
import Rouge from "../Assets/Rouge.gif";
import Knight from "../Assets/Knight.gif";
import { player } from "../Classes/Player";

function GameEnter() {
  const [page, setPage] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState();
  const [score, setScore] = useState(0);
  const [specialAttackCount, setSpecialAttack] = useState(1);

  let Player;
  const resetPlayer = (classType) => {
    switch (classType) {
      case "Mage":
        Player = new player(classType, 25, 25, 5, 5, 5, 5, Mage, 0);
        setCurrentPlayer(Player);
        setSpecialAttack(1);
        break;
      case "Rouge":
        Player = new player(classType, 20, 20, 7, 7, 3, 7, Rouge, 0);
        setCurrentPlayer(Player);
        setSpecialAttack(1);
        break;
      case "Knight":
        Player = new player(classType, 28, 28, 7, 3, 7, 7, Knight, 0);
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
