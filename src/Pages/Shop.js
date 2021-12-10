import ShopKeeper from "../Assets/ShopKeeper.gif";

const Shop = ({
  changePage,
  currentPlayer,
  setCurrentPlayer,
  setScore,
  specialAttackCount,
  setSpecialAttack,
  setBossChoice,
}) => {
  //Quit
  const quit = () => {
    changePage("Home");
    setCurrentPlayer("");
    setBossChoice(0)
    setScore(1);
  };
  //Buy Potion
  const buyPotion = () => {
    const newStatePlayer = { ...currentPlayer };
    if (newStatePlayer._coin >= 5) {
      newStatePlayer._coin -= 5;
      newStatePlayer._health = newStatePlayer._maxHealth
      setCurrentPlayer(newStatePlayer);
    }
  };
  //Buy Special Attack
  const buySpecialAttack = () => {
    const newStatePlayer = { ...currentPlayer };
    if (newStatePlayer._coin >= 10) {
      newStatePlayer._coin -= 10;
      setSpecialAttack(specialAttackCount + 1);
      setCurrentPlayer(newStatePlayer);
    }
  };
  //Buy Attack Boost
  const buyAttackBoost = () => {
    const newStatePlayer = { ...currentPlayer };
    if (newStatePlayer._coin >= 5) {
      newStatePlayer._coin -= 5;
      newStatePlayer._attack += 1;
      setCurrentPlayer(newStatePlayer);
    }
  };
  //Buy Defense Boost
  const buyDefenseBoost = () => {
    const newStatePlayer = { ...currentPlayer };
    if (newStatePlayer._coin >= 5) {
      newStatePlayer._coin -= 5;
      newStatePlayer._defense += 1;
      setCurrentPlayer(newStatePlayer);
    }
  };
  //Buy Speed Boost
  const buySpeedBoost = () => {
    const newStatePlayer = { ...currentPlayer };
    if (newStatePlayer._coin >= 5) {
      newStatePlayer._coin -= 5;
      newStatePlayer._speed += 1;
      setCurrentPlayer(newStatePlayer);
    }
  };
  //Buy Health boost
  const buyHealthBoost = () => {
    const newStatePlayer = { ...currentPlayer };
    if (newStatePlayer._coin >= 5) {
      newStatePlayer._coin -= 5;
      newStatePlayer._maxHealth += 1;
      setCurrentPlayer(newStatePlayer);
    }
  };
  //Buy Special Boost
  const buySpecialBoost = () => {
    const newStatePlayer = { ...currentPlayer };
    if (newStatePlayer._coin >= 5) {
      newStatePlayer._coin -= 5;
      newStatePlayer._special += 1;
      setCurrentPlayer(newStatePlayer);
    }
  };
  return (
    <div className="Shop_Page">
      <div className="Shop_Area">
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
        </div>
        <div className="Shop_Items">
          <div className="Item" onClick={() => buyPotion()}>
            <h3>Potion: 5 Coin</h3>
          </div>
          <div className="Item" onClick={() => buySpecialAttack()}>
            <h3>Special: 10 Coin</h3>
          </div>
          <div className="Item" onClick={() => buyHealthBoost()}>
            <h3>Hp Boost: 5 Coin</h3>
          </div>
          <div className="Item" onClick={() => buyAttackBoost()}>
            <h3>Atk Boost: 5 Coin</h3>
          </div>
          <div className="Item" onClick={() => buyDefenseBoost()}>
            <h3>Def Boost: 5 Coin</h3>
          </div>
          <div className="Item" onClick={() => buySpeedBoost()}>
            <h3>Spd Boost: 5 Coin</h3>
          </div>
          <div className="Item" onClick={() => buySpecialBoost()}>
            <h3>Spl Boost: 5 Coin</h3>
          </div>
        </div>
        <div className="Shop_Keeper">
          <h3>Hello Explorer, Coin for My Wares?</h3>
          <img src={ShopKeeper} alt="Shop Keeper" className="ShopeKeeper_Img" />
        </div>
      </div>
      <div className="Button_Container">
        <div className="Back_Button" onClick={() => changePage("Game")}>
          <h2>Back</h2>
        </div>
        <div className="Back_Button" onClick={() => quit()}>
          <h2>Quit Game</h2>
        </div>
      </div>
    </div>
  );
};

export default Shop;
