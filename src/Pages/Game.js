import { mob } from "../Classes/Mob";
import { boss } from "../Classes/Boss";
import { player } from "../Classes/Player";
import { useEffect, useState } from "react";
import Skeleton_Warrior from "../Assets/Skeleton_Warrior.gif";
import Skeleton_Archer from "../Assets/Skeleton_Archer.gif";
import Skeleton_Lancer from "../Assets/Skeleton_Lancer.gif";
import Skeleton_Warlock from "../Assets/Skeleton_Warlock.gif";
import Skeleton_King from "../Assets/Skeleton_King.gif";
import Skeleton_Rider from "../Assets/Skeleton_Rider.gif";
import Skeleton_Dragon from "../Assets/Skeleton_Dragon.gif";
import Skeleton_Heratic from "../Assets/Skeleton_Heratic.gif";
import Skeleton_Collector from "../Assets/Skeleton_Collector.gif";

const Game = ({
  changePage,
  currentPlayer,
  setCurrentPlayer,
  score,
  setScore,
  specialAttackCount,
  setSpecialAttack,
}) => {
  //Mobs
  let enemy1 = new mob(
    "Skeleton Warrior",
    Math.floor(Math.random() * (20 - 10) + 10),
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    10,
    Skeleton_Warrior
  );
  let enemy2 = new mob(
    "Skeleton Archer",
    Math.floor(Math.random() * (20 - 10) + 10),
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    10,
    Skeleton_Archer
  );
  let enemy3 = new mob(
    "Skeleton Lancer",
    Math.floor(Math.random() * (20 - 10) + 10),
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    10,
    Skeleton_Lancer
  );
  let enemy4 = new mob(
    "Skeleton Warlock",
    Math.floor(Math.random() * (20 - 10) + 10),
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    10,
    Skeleton_Warlock
  );
  //Bosses
  let boss1 = new boss(
    "Skeleton Rider",
    Math.floor(Math.random() * (35 - 20) + 20),
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    20,
    Skeleton_Rider
  );
  let boss2 = new boss(
    "Skeleton Heratic",
    Math.floor(Math.random() * (35 - 20) + 20),
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    20,
    Skeleton_Heratic
  );
  let boss3 = new boss(
    "Skeleton Collector",
    Math.floor(Math.random() * (35 - 20) + 20),
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    20,
    Skeleton_Collector
  );
  let boss4 = new boss(
    "Skeleton King",
    Math.floor(Math.random() * (40 - 25) + 25),
    Math.floor(Math.random() * (12 - 8) + 8),
    Math.floor(Math.random() * (12 - 8) + 8),
    Math.floor(Math.random() * (12 - 8) + 8),
    20,
    Skeleton_King
  );
  let boss5 = new boss(
    "Skeleton Dragon",
    Math.floor(Math.random() * (45 - 30) + 30),
    Math.floor(Math.random() * (15 - 10) + 10),
    Math.floor(Math.random() * (15 - 10) + 10),
    Math.floor(Math.random() * (15 - 10) + 10),
    20,
    Skeleton_Dragon
  );

  const [currentMob, setCurrentMob] = useState(undefined);
  const [currentBoss, setCurrentBoss] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [bossChoice, setBossChoice] = useState(0);
  const [damageTake,setDamageTaken] = useState(0)

  let mobList = [enemy1, enemy2, enemy3, enemy4];
  let enemyChoice = Math.floor(Math.random() * (4 - 0) + 0);
  let bossList = [boss1, boss2, boss3, boss4, boss5];

  const nextButtonHandler = () => {
    if (score % 5 === 0) {
      setCurrentMob(undefined);
      setCurrentBoss(bossList[bossChoice]);
    } else {
      setCurrentBoss(undefined);
      setCurrentMob(mobList[enemyChoice]);
    }
  };
  // Player Defend
  const defend = (mobDamage) => {
    if (currentPlayer) {
      const newStatePlayer = { ...currentPlayer };
      if (newStatePlayer._health - mobDamage <= 0) {
        newStatePlayer._health = 0;
        setCurrentPlayer(newStatePlayer);
      } else {
        let battleDamagePlayer = (mobDamage) => {
          if (mobDamage <= newStatePlayer._defense) {
            return 0;
          } else if (mobDamage > newStatePlayer._defense) {
            return mobDamage - newStatePlayer._defense;
          }
        };
        newStatePlayer._health =
          newStatePlayer._health - battleDamagePlayer(mobDamage);
        setCurrentPlayer(newStatePlayer);
        setDamageTaken(battleDamagePlayer(mobDamage));
      }
    } else if (currentBoss) {
      const newState = { ...currentBoss };
      if (newState._health - mobDamage <= 0) {
        newState._health = 0;
        setCurrentPlayer(newState);
      } else {
        let battleDamagePlayer = (bossDamage) => {
          if (bossDamage <= newState._defense) {
            return 1;
          } else if (bossDamage > newState._defense) {
            return bossDamage - newState._defense;
          }
        };
        newState._health = newState._health - battleDamagePlayer(mobDamage);
        setCurrentPlayer(newState);
        setDamageTaken(battleDamagePlayer(mobDamage));
      }
    }
  };
  //Special Attack
  const specialAttack = (playerDamage, mobDamage) => {
    if (currentMob) {
      const newStatePlayer = { ...currentPlayer };
      const newStateMob = { ...currentMob };
      if (newStatePlayer._health - mobDamage <= 0) {
        newStatePlayer._health = 0;
        setCurrentPlayer(newStatePlayer);
      } else if (newStateMob._health - playerDamage <= 0) {
        newStateMob._health = 0;
        newStatePlayer._coin = newStatePlayer._coin + 5;
        setCurrentMob(newStateMob);
        setCurrentPlayer(newStatePlayer);
      } else {
        let battleDamageMob = (playerDamage) => {
          if (playerDamage <= newStateMob._defense) {
            return 1;
          } else if (playerDamage > newStateMob._defense) {
            return playerDamage - newStateMob._defense;
          }
        };
        let battleDamagePlayer = (mobDamage) => {
          if (mobDamage <= newStatePlayer._defense) {
            return 1;
          } else if (mobDamage > newStatePlayer._defense) {
            return mobDamage - newStatePlayer._defense;
          }
        };
        newStatePlayer._health =
          newStatePlayer._health - battleDamageMob(mobDamage);
        setCurrentPlayer(newStatePlayer);
        newStateMob._health =
          newStateMob._health - battleDamagePlayer(playerDamage);
        setCurrentMob(newStateMob);
        setDamageTaken(battleDamagePlayer(mobDamage));
      }
    } else if (currentBoss) {
      const newStatePlayer = { ...currentPlayer };
      const newStateBoss = { ...currentBoss };
      if (newStatePlayer._health - mobDamage <= 0) {
        newStatePlayer._health = 0;
        setCurrentPlayer(newStatePlayer);
      } else if (newStateBoss._health - playerDamage <= 0) {
        newStateBoss._health = 0;
        setCurrentBoss(newStateBoss);
      } else {
        let battleDamageBoss = (playerDamage) => {
          if (playerDamage <= newStateBoss._defense) {
            return 1;
          } else if (playerDamage > newStateBoss._defense) {
            return playerDamage - newStateBoss._defense;
          }
        };
        let battleDamagePlayer = (mobDamage) => {
          if (mobDamage <= newStatePlayer._defense) {
            return 1;
          } else if (mobDamage > newStatePlayer._defense) {
            return mobDamage - newStatePlayer._defense;
          }
        };
        newStateBoss._health =
          newStateBoss._health - battleDamageBoss(playerDamage);
        setCurrentBoss(newStateBoss);
        newStatePlayer._health =
          newStatePlayer._health - battleDamagePlayer(mobDamage);
        setCurrentPlayer(newStatePlayer);
        setDamageTaken(battleDamagePlayer(mobDamage));
      }
    }
    setSpecialAttack(specialAttackCount - 1);
  };

  // Player Attack
  const Attack = (playerDamage, mobDamage) => {
    if (currentMob) {
      const newStatePlayer = { ...currentPlayer };
      const newStateMob = { ...currentMob };
      if (newStatePlayer._health - mobDamage <= 0) {
        newStatePlayer._health = 0;
        setCurrentPlayer(newStatePlayer);
      } else if (newStateMob._health - playerDamage <= 0) {
        newStateMob._health = 0;
        newStatePlayer._coin = newStatePlayer._coin + 5;
        setCurrentMob(newStateMob);
        setCurrentPlayer(newStatePlayer);
      } else {
        let battleDamageMob = (playerDamage) => {
          if (playerDamage <= newStateMob._defense) {
            return 1;
          } else if (playerDamage > newStateMob._defense) {
            return playerDamage - newStateMob._defense;
          }
          newStateMob._health =
          newStateMob._health - battleDamagePlayer(playerDamage);
        };
        let battleDamagePlayer = (mobDamage) => {
          if (mobDamage <= newStatePlayer._defense) {
            return 1;
          } else if (mobDamage > newStatePlayer._defense) {
            return mobDamage - newStatePlayer._defense;
          }
          newStatePlayer._health =
          newStatePlayer._health - battleDamageMob(mobDamage);
        };
        setCurrentPlayer(newStatePlayer);
        setDamageTaken(battleDamageMob(mobDamage));

        setCurrentMob(newStateMob);
      }
    } else if (currentBoss) {
      const newStatePlayer = { ...currentPlayer };
      const newStateBoss = { ...currentBoss };
      if (newStatePlayer._health - mobDamage <= 0) {
        newStatePlayer._health = 0;
        setCurrentPlayer(newStatePlayer);
      } else if (newStateBoss._health - playerDamage <= 0) {
        newStateBoss._health = 0;
        setCurrentBoss(newStateBoss);
      } else {
        let battleDamageBoss = (playerDamage) => {
          if (playerDamage <= newStateBoss._defense) {
            return 1;
          } else if (playerDamage > newStateBoss._defense) {
            return playerDamage - newStateBoss._defense;
          }
        };
        let battleDamagePlayer = (mobDamage) => {
          if (mobDamage <= newStatePlayer._defense) {
            return 1;
          } else if (mobDamage > newStatePlayer._defense) {
            return mobDamage - newStatePlayer._defense;
          }
        };
        newStateBoss._health =
          newStateBoss._health - battleDamageBoss(playerDamage);
        setCurrentBoss(newStateBoss);
        newStatePlayer._health =
          newStatePlayer._health - battleDamagePlayer(mobDamage);
        setCurrentPlayer(newStatePlayer);
        setDamageTaken(battleDamagePlayer(mobDamage));
      }
    }
  };
  //Quit
  const quit = () => {
    changePage("Home");
    setCurrentPlayer("");
    setScore(0);
    setSpecialAttack(0);
  };

  useEffect(() => {
    const a = () => {
      setLoading(true);
      if (!currentMob && !currentBoss) {
        setCurrentMob(mobList[enemyChoice]);
      }
      setLoading(false);
    };
    a();
  }, [score, enemyChoice]);

  useEffect(() => {
    if (score % 5 === 0) {
      if (currentMob && currentBoss) {
        setCurrentBoss(bossList[bossChoice]);
      }
    }
  }, [score]);

  useEffect(() => {
    if ((currentMob && currentMob._health) <= 0) {
      setScore(score + 1);
    } else if ((currentBoss && currentBoss._health) <= 0) {
      setScore(score + 1);
      setBossChoice(bossChoice + 0.5);
    }
  }, [currentMob, currentBoss]);

  if (loading) {
    return <h1 style={{ color: "bisque" }}> ...</h1>;
  } else
    return (
      <div className="Game_Page">
        <h1>Clear The Krypt</h1>
        <div className="Player_Area">
          <div className="Player">
            <div>
              <h4>{currentPlayer._classType}</h4>
            </div>
            <div className="Player_Stats">
              <div className="Stats">
                <h4>Hp: {currentPlayer._health} / {currentPlayer._maxHealth}</h4>
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
            {(currentMob && currentMob._health) ||
            (currentBoss && currentBoss._health) > 0 ? (
              " "
            ) : (
              <div className="Shop_Button " onClick={() => changePage("Shop")}>
                <h4>Shop</h4>
              </div>
            )}
          </div>
          <div className="Mob">
            <div>
              <h4>
                {" "}
                {(currentMob && currentMob._mobType) ||
                  (currentBoss && currentBoss._bossType)}{" "}
              </h4>
            </div>
            <div className="Mob_Stats">
              <div className="Stats">
                <h4>
                  Hp:{" "}
                  {(currentMob && currentMob._health) ||
                    (currentBoss && currentBoss._health)}
                </h4>
              </div>
              <div className="Stats">
                <h4>
                  Atk:{" "}
                  {(currentMob && currentMob._attack) ||
                    (currentBoss && currentBoss._attack)}
                </h4>
              </div>
              <div className="Stats">
                <h4>
                  Def:{" "}
                  {(currentMob && currentMob._defense) ||
                    (currentBoss && currentBoss._defense)}
                </h4>
              </div>
              <div className="Stats">
                <h4>
                  Spd:{" "}
                  {(currentMob && currentMob._speed) ||
                    (currentBoss && currentBoss._speed)}
                </h4>
              </div>
            </div>
            <div className="Current_Player">
              <img
                src={
                  (currentMob && currentMob._img) ||
                  (currentBoss && currentBoss._img)
                }
                alt=""
              />
            </div>
            {(currentMob && currentMob._health) ||
            (currentBoss && currentBoss._health) > 0 ? (
              " "
            ) : (
              <div
                className="NextBattle_Button"
                onClick={() => {
                  nextButtonHandler();
                }}
              >
                <h4>Next Battle</h4>
              </div>
            )}
          </div>
        </div>
        <div className="Game_Events">
            {(currentMob && currentMob._health) === 0 || (currentPlayer && currentPlayer._health) === 0 ? (" ") : (<h3>you lost {damageTake} Hp from {(currentMob && currentMob._mobType) || (currentBoss && currentBoss._bossType)}</h3>)}
            {(currentMob && currentMob._health) === 0  ? (<h3>{(currentMob && currentMob._mobType) || (currentBoss && currentBoss._BossType)} Defeated</h3>) : (" ")}
            {(currentPlayer && currentPlayer._health) > 0 ? (" ") : (<h3> You Were Defeated By {(currentMob && currentMob._mobType) || (currentBoss && currentBoss._bossType)}</h3>)}
          </div>
        <div className="Action_Containers">
          {(currentMob && currentMob._health === 0) ||
          currentPlayer._health === 0 ? (
            " "
          ) : (
            <>
              {currentMob && currentMob._mobType ? ( <div
                className="Attack_Button"
                onClick={() =>
                  Attack(
                    currentPlayer._attack,
                    (currentMob._attack)
                  )
                }
              >
                <h2>Attack</h2>
              </div>) : (<div
                className="Attack_Button"
                onClick={() =>
                  Attack(
                    currentPlayer._attack,
                    (currentBoss._attack)
                  )
                }
              >
                <h2>Attack</h2>
              </div>)}
              <div
                className="Defend_Button"
                onClick={() =>
                  defend(currentMob._attack || currentBoss._attack)
                }
              >
                <h2>Defend/Dodge</h2>
              </div>
              {specialAttackCount < 1 ? (
                " "
              ) : (
                <div
                  className="SpecialAttack_Button"
                  onClick={() =>
                    specialAttack(
                      currentPlayer._attack + currentPlayer._special,
                      (currentMob && currentMob._attack) ||
                        (currentBoss && currentBoss._attack)
                    )
                  }
                >
                  <h2>Special Attack</h2>
                </div>
              )}
            </>
          )}
        </div>
        <div className="Back_Button" onClick={() => quit()}>
          <h2>Quit Game</h2>
        </div>
      </div>
    );
};

export default Game;
