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
import Skeleton_Titan from "../Assets/Skeleton_Titan.gif";

const Game = ({
  changePage,
  currentPlayer,
  setCurrentPlayer,
  score,
  bossChoice,
  setBossChoice,
  setScore,
  specialAttackCount,
  setSpecialAttack,
}) => {
  //Mobs
  let Health = Math.floor(Math.random() * (20 - 10) + 10);
  let maxHealth = Health;

  let boss1Health = Math.floor(Math.random() * (35 - 25) + 25);
  let boss1MaxHealth = boss1Health;

  let boss2Health = Math.floor(Math.random() * (35 - 25) + 25);
  let boss2MaxHealth = boss2Health;

  let boss3Health = Math.floor(Math.random() * (35 - 25) + 25);
  let boss3MaxHealth = boss3Health;

  let boss4Health = Math.floor(Math.random() * (40 - 35) + 35);
  let boss4MaxHealth = boss4Health;

  let boss5Health = Math.floor(Math.random() * (45 - 40) + 40);
  let boss5MaxHealth = boss5Health;

  let boss6Health = Math.floor(Math.random() * (65 - 55) + 55);
  let boss6MaxHealth = boss6Health;

  let enemy1 = new mob(
    "Skeleton Warrior",
    Health,
    maxHealth,
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    10,
    Skeleton_Warrior
  );
  let enemy2 = new mob(
    "Skeleton Archer",
    Health,
    maxHealth,
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    10,
    Skeleton_Archer
  );
  let enemy3 = new mob(
    "Skeleton Lancer",
    Health,
    maxHealth,
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    10,
    Skeleton_Lancer
  );
  let enemy4 = new mob(
    "Skeleton Warlock",
    Health,
    maxHealth,
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    Math.floor(Math.random() * (5 - 2) + 2),
    10,
    Skeleton_Warlock
  );
  //Bosses
  let boss1 = new boss(
    "Skeleton Rider",
    boss1Health,
    boss1MaxHealth,
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    20,
    Skeleton_Rider
  );
  let boss2 = new boss(
    "Skeleton Heratic",
    boss2Health,
    boss2MaxHealth,
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    20,
    Skeleton_Heratic
  );
  let boss3 = new boss(
    "Skeleton Collector",
    boss3Health,
    boss3MaxHealth,
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    Math.floor(Math.random() * (10 - 5) + 5),
    20,
    Skeleton_Collector
  );
  let boss4 = new boss(
    "Skeleton King",
    boss4Health,
    boss4MaxHealth,
    Math.floor(Math.random() * (12 - 8) + 8),
    Math.floor(Math.random() * (12 - 8) + 8),
    Math.floor(Math.random() * (12 - 8) + 8),
    20,
    Skeleton_King
  );
  let boss5 = new boss(
    "Skeleton Dragon",
    boss5Health,
    boss5MaxHealth,
    Math.floor(Math.random() * (15 - 10) + 10),
    Math.floor(Math.random() * (15 - 10) + 10),
    Math.floor(Math.random() * (15 - 10) + 10),
    20,
    Skeleton_Dragon
  );
  let boss6 = new boss(
    "Skeleton Titan",
    boss6Health,
    boss6MaxHealth,
    Math.floor(Math.random() * (15 - 10) + 10),
    Math.floor(Math.random() * (15 - 10) + 10),
    Math.floor(Math.random() * (15 - 10) + 10),
    20,
    Skeleton_Titan
  )

  const [currentMob, setCurrentMob] = useState(undefined);
  const [currentBoss, setCurrentBoss] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [damageTake, setDamageTaken] = useState(0);
  const [damageTakeM, setDamageTakenM] = useState(0);

  let mobList = [enemy1, enemy2, enemy3, enemy4];
  let enemyChoice = Math.floor(Math.random() * (4 - 0) + 0);
  let bossList = [boss1, boss2, boss3, boss4, boss5,boss6];

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
  const defend = () => {
    if (currentMob) {
      const newStatePlayer = { ...currentPlayer };
      const newStateMob = { ...currentMob };
      if (newStatePlayer._health - newStateMob._attack <= 0) {
        newStatePlayer._health = 0;
        setCurrentPlayer(newStatePlayer);
      } else {
        let battleDamagePlayer = () => {
          if (newStateMob._attack <= newStatePlayer._defense) {
            return 0;
          } else if (newStateMob._attack > newStatePlayer._defense) {
            return newStateMob._attack - newStatePlayer._defense;
          }
        };
        newStatePlayer._health = newStatePlayer._health - battleDamagePlayer();
        setCurrentPlayer(newStatePlayer);
        setDamageTaken(battleDamagePlayer());
      }
    } else if (currentBoss) {
      const newStatePlayer = { ...currentPlayer };
      const newStateBoss = { ...currentBoss };
      if (newStatePlayer._health - newStateBoss._attack <= 0) {
        newStatePlayer._health = 0;
        setCurrentPlayer(newStatePlayer);
      } else {
        let battleDamagePlayer = () => {
          if (currentBoss._attack <= newStatePlayer._defense) {
            return 0;
          } else if (currentBoss._attack > newStatePlayer._defense) {
            return newStateBoss - newStatePlayer._defense;
          }
        };
        newStatePlayer._health = newStatePlayer._health - battleDamagePlayer();
        setCurrentPlayer(newStatePlayer);
        setDamageTaken(battleDamagePlayer());
      }
    }
  };
  //Special Attack
  const specialAttack = () => {
    if (currentMob) {
      const newStatePlayer = { ...currentPlayer };
      const newStateMob = { ...currentMob };
      if (newStatePlayer._health - newStateMob._attack <= 0) {
        newStatePlayer._health = 0;
        setCurrentPlayer(newStatePlayer);
      } else if (
        newStateMob._health -
          (newStatePlayer._attack + newStatePlayer._special) <=
        0
      ) {
        newStateMob._health = 0;
        newStatePlayer._coin = newStatePlayer._coin + 5;
        setCurrentMob(newStateMob);
        setCurrentPlayer(newStatePlayer);
      } else {
        let battleDamageMob = () => {
          if (
            newStatePlayer._attack + newStatePlayer._special <=
            newStateMob._defense
          ) {
            return newStatePlayer._attack;
          } else if (
            newStatePlayer._attack + newStatePlayer._special >
            newStateMob._defense
          ) {
            return (
              newStatePlayer._attack +
              newStatePlayer._special -
              newStateMob._defense
            );
          }
        };
        let battleDamagePlayer = () => {
          if (newStateMob._attack <= newStatePlayer._defense) {
            return 1;
          } else if (newStateMob._attack > newStatePlayer._defense) {
            return newStateMob._attack - newStatePlayer._defense;
          }
        };
        newStateMob._health = newStateMob._health - battleDamageMob();
        setCurrentMob(newStateMob);
        setDamageTaken(battleDamagePlayer());
        setDamageTakenM(battleDamageMob());
        newStatePlayer._health = newStatePlayer._health - battleDamagePlayer();
        setCurrentPlayer(newStatePlayer);
      }
    } else if (currentBoss) {
      const newStatePlayer = { ...currentPlayer };
      const newStateBoss = { ...currentBoss };
      if (newStatePlayer._health - newStateBoss._attack <= 0) {
        newStatePlayer._health = 0;
        setCurrentPlayer(newStatePlayer);
      } else if (
        newStateBoss._health -
          (newStatePlayer._attack + newStatePlayer._special) <=
        0
      ) {
        newStateBoss._health = 0;
        newStatePlayer._coin = newStatePlayer._coin + 5;
        setCurrentMob(newStateBoss);
        setCurrentPlayer(newStatePlayer);
      } else {
        let battleDamageMob = () => {
          if (
            newStatePlayer._attack + newStatePlayer._special <=
            newStateBoss._defense
          ) {
            return newStatePlayer._attack;
          } else if (
            newStatePlayer._attack + newStatePlayer._special >
            newStateBoss._defense
          ) {
            return (
              newStatePlayer._attack +
              newStatePlayer._special -
              newStateBoss._defense
            );
          }
        };
        let battleDamagePlayer = () => {
          if (newStateBoss._attack <= newStatePlayer._defense) {
            return 1;
          } else if (newStateBoss._attack > newStatePlayer._defense) {
            return newStateBoss._attack - newStatePlayer._defense;
          }
        };
        newStateBoss._health = newStateBoss._health - battleDamageMob();
        setCurrentBoss(newStateBoss);
        setDamageTaken(battleDamagePlayer());
        setDamageTakenM(battleDamageMob());
        newStatePlayer._health = newStatePlayer._health - battleDamagePlayer();
        setCurrentPlayer(newStatePlayer);
      }
    }
    setSpecialAttack(specialAttackCount - 1);
  };

  // Player Attack
  const Attack = () => {
    if (currentMob) {
      const newStatePlayer = { ...currentPlayer };
      const newStateMob = { ...currentMob };
      if (
        newStatePlayer._health +
          newStatePlayer._defense -
          newStateMob._attack <=
        0
      ) {
        newStatePlayer._health = 0;
        setCurrentPlayer(newStatePlayer);
      } else if (
        newStateMob._health + newStateMob._defense - newStatePlayer._attack <=
        0
      ) {
        newStateMob._health = 0;
        newStatePlayer._coin = newStatePlayer._coin + 5;
        setCurrentMob(newStateMob);
        setCurrentPlayer(newStatePlayer);
      } else {
        if (newStatePlayer._speed > newStateMob._speed) {
          let battleDamageMob = () => {
            if (newStatePlayer._attack <= newStateMob._defense) {
              return 1;
            } else if (newStatePlayer._attack > newStateMob._defense) {
              return newStatePlayer._attack - newStateMob._defense;
            }
          };
          let battleDamagePlayer = () => {
            if (newStateMob._attack <= newStatePlayer._defense) {
              return 1;
            } else if (newStateMob._attack > newStatePlayer._defense) {
              return newStateMob._attack - newStatePlayer._defense;
            }
          };
          newStateMob._health = newStateMob._health - battleDamageMob();
          setCurrentMob(newStateMob);
          setDamageTaken(battleDamagePlayer());
          setDamageTakenM(battleDamageMob());
          newStatePlayer._health =
            newStatePlayer._health - battleDamagePlayer();
          setCurrentPlayer(newStatePlayer);
        } else if (newStateMob._speed > newStatePlayer._speed) {
          let battleDamagePlayer = () => {
            if (newStateMob._attack <= newStatePlayer._defense) {
              return 1;
            } else if (newStateMob._attack > newStatePlayer._defense) {
              return newStateMob._attack - newStatePlayer._defense;
            }
          };
          let battleDamageMob = () => {
            if (newStatePlayer._attack <= newStateMob._defense) {
              return 1;
            } else if (newStatePlayer._attack > newStateMob._defense) {
              return newStatePlayer._attack - newStateMob._defense;
            }
          };
          newStateMob._health = newStateMob._health - battleDamageMob();
          setCurrentMob(newStateMob);
          setDamageTaken(battleDamagePlayer());
          setDamageTakenM(battleDamageMob());
          newStatePlayer._health =
            newStatePlayer._health - battleDamagePlayer();
          setCurrentPlayer(newStatePlayer);
        } else {
          if (newStatePlayer._speed === newStateMob._speed) {
            let battleDamageMob = () => {
              if (newStatePlayer._attack <= newStateMob._defense) {
                return 1;
              } else if (newStatePlayer._attack > newStateMob._defense) {
                return newStatePlayer._attack - newStateMob._defense;
              }
            };
            let battleDamagePlayer = () => {
              if (newStateMob._attack <= newStatePlayer._defense) {
                return 1;
              } else if (newStateMob._attack > newStatePlayer._defense) {
                return newStateMob._attack - newStatePlayer._defense;
              }
            };
            newStateMob._health = newStateMob._health - battleDamageMob();
            setCurrentMob(newStateMob);
            setDamageTaken(battleDamagePlayer());
            setDamageTakenM(battleDamageMob());
            newStatePlayer._health =
              newStatePlayer._health - battleDamagePlayer();
            setCurrentPlayer(newStatePlayer);
          }
        }
      }
    } else if (currentBoss) {
      const newStatePlayer = { ...currentPlayer };
      const newStateBoss = { ...currentBoss };
      if (newStatePlayer._health - newStateBoss._attack <= 0) {
        newStatePlayer._health = 0;
        setCurrentPlayer(newStatePlayer);
      } else if (newStateBoss._health - newStatePlayer._attack <= 0) {
        newStateBoss._health = 0;
        newStatePlayer._coin = newStatePlayer._coin + 5;
        setCurrentBoss(newStateBoss);
        setCurrentPlayer(newStatePlayer);
      } else {
        if (newStatePlayer._speed > newStateBoss._speed) {
          let battleDamageMob = () => {
            if (newStatePlayer._attack <= newStateBoss._defense) {
              return 1;
            } else if (newStatePlayer._attack > newStateBoss._defense) {
              return newStatePlayer._attack - newStateBoss._defense;
            }
          };
          let battleDamagePlayer = () => {
            if (newStateBoss._attack <= newStatePlayer._defense) {
              return 1;
            } else if (newStateBoss._attack > newStatePlayer._defense) {
              return newStateBoss._attack - newStatePlayer._defense;
            }
          };
          newStateBoss._health = newStateBoss._health - battleDamageMob();
          setCurrentBoss(newStateBoss);
          setDamageTaken(battleDamagePlayer());
          setDamageTakenM(battleDamageMob());
          newStatePlayer._health =
            newStatePlayer._health - battleDamagePlayer();
          setCurrentPlayer(newStatePlayer);
        } else if (newStateBoss._speed > newStatePlayer._speed) {
          let battleDamagePlayer = () => {
            if (newStateBoss._attack <= newStatePlayer._defense) {
              return 1;
            } else if (newStateBoss._attack > newStatePlayer._defense) {
              return newStateBoss._attack - newStatePlayer._defense;
            }
          };
          let battleDamageMob = () => {
            if (newStatePlayer._attack <= newStateBoss._defense) {
              return 1;
            } else if (newStatePlayer._attack > newStateBoss._defense) {
              return newStatePlayer._attack - newStateBoss._defense;
            }
          };
          newStateBoss._health = newStateBoss._health - battleDamageMob();
          setCurrentBoss(newStateBoss);
          setDamageTaken(battleDamagePlayer());
          setDamageTakenM(battleDamageMob());
          newStatePlayer._health =
            newStatePlayer._health - battleDamagePlayer();
          setCurrentPlayer(newStatePlayer);
        } else {
          if (newStatePlayer._speed === newStateBoss._speed) {
            let battleDamageMob = () => {
              if (newStatePlayer._attack <= newStateBoss._defense) {
                return 1;
              } else if (newStatePlayer._attack > newStateBoss._defense) {
                return newStatePlayer._attack - newStateBoss._defense;
              }
            };
            let battleDamagePlayer = () => {
              if (newStateBoss._attack <= newStatePlayer._defense) {
                return 1;
              } else if (newStateBoss._attack > newStatePlayer._defense) {
                return newStateBoss._attack - newStatePlayer._defense;
              }
            };
            newStateBoss._health = newStateBoss._health - battleDamageMob();
            setCurrentBoss(newStateBoss);
            setDamageTaken(battleDamagePlayer());
            setDamageTakenM(battleDamageMob());
            newStatePlayer._health =
              newStatePlayer._health - battleDamagePlayer();
            setCurrentPlayer(newStatePlayer);
          }
        }
      }
    }
  };
  //Quit
  const quit = () => {
    changePage("Home");
    setCurrentPlayer("");
    setScore(1);
    setSpecialAttack(0);
    setBossChoice(0);
  };

  useEffect(() => {
    const a = () => {
      setLoading(true);
      if (!currentMob && !currentBoss) {
        if (score % 5 === 0) {
          setCurrentBoss(bossList[bossChoice]);
        } else {
          if (score > 5 && score < 10) {
            setCurrentMob(mobList[enemyChoice]);
          }
          setCurrentMob(mobList[enemyChoice]);
        }
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
  }, [score, bossChoice]);

  useEffect(() => {
    if ((currentMob && currentMob._health) <= 0) {
      setScore(score + 1);
    } else if ((currentBoss && currentBoss._health) <= 0) {
      setScore(score + 1);
      setBossChoice(bossChoice + 1);
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
                <h4>
                  Hp: {currentPlayer._health} / {currentPlayer._maxHealth}
                </h4>
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
            {((currentMob && currentMob._health) ||
            (currentBoss && currentBoss._health) > 0) || score === 31 ? (
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
                  / {""}
                  {(currentMob && currentMob._maxHealth) ||
                    (currentBoss && currentBoss._maxHealth)}
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
            {((currentMob && currentMob._health) ||
            (currentBoss && currentBoss._health) > 0) || score === 31  ? (
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
          {(currentMob && currentMob._health === 0) ||
          (currentBoss && currentBoss._health === 0) ||
          (currentPlayer && currentPlayer._health === 0) ? (
            " "
          ) : (
            <h3>
              {currentPlayer._classType} lost {damageTake} Hp from{" "}
              {(currentMob && currentMob._mobType) ||
                (currentBoss && currentBoss._bossType)}{" "}
              &{" "}
            </h3>
          )}
          {(currentMob && currentMob._health === 0) ||
          (currentBoss && currentBoss._health === 0) ||
          (currentPlayer && currentPlayer._health) === 0 ? (
            " "
          ) : (
            <h3>
              {(currentMob && currentMob._mobType) ||
                (currentBoss && currentBoss._bossType)}{" "}
              Lost {damageTakeM} Hp
            </h3>
          )}
          {(currentMob && currentMob._health === 0) ||
          (currentBoss && currentBoss._health === 0) ? (
            <h3>
              {(currentMob && currentMob._mobType) ||
                (currentBoss && currentBoss._bossType)}{" "}
              Defeated{" "}
            </h3>
          ) : (
            " "
          )}
          {score === 31 ? (
            <h3>
            You Cleared The Krypt
          </h3>
          ) : (
            " "
            
          )}
          {(currentPlayer && currentPlayer._health) > 0 ? (
            " "
          ) : (
            <h3>
              {" "}
              You Were Defeated By{" "}
              {(currentMob && currentMob._mobType) ||
                (currentBoss && currentBoss._bossType)}
            </h3>
          )}
          
        </div>
        <div className="Action_Containers">
          {(currentMob && currentMob._health === 0) ||
          currentPlayer._health === 0 ||
          (currentBoss && currentBoss._health === 0) ? (
            " "
          ) : (
            <>
              {currentMob && currentMob._mobType ? (
                <div className="Attack_Button" onClick={() => Attack()}>
                  <h2>Attack</h2>
                </div>
              ) : (
                <div className="Attack_Button" onClick={() => Attack()}>
                  <h2>Attack</h2>
                </div>
              )}
              <div className="Defend_Button" onClick={() => defend()}>
                <h2>Defend/Dodge</h2>
              </div>
              {specialAttackCount < 1 ? (
                " "
              ) : (
                <div
                  className="SpecialAttack_Button"
                  onClick={() => specialAttack()}
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
