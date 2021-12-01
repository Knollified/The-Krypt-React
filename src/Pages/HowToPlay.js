const HowToPlay = ({ changePage }) => {
  return (
    <div className="How_To_Play_Page">
      <h1>How To Play</h1>
      <div className="Instructions_Container">
          <h2>Rules and Game Mechanics</h2>
          <ul>
              <li>Player starts with a choice of class which has unique stats and weapon.</li>
              <li>The player then starts on the first floor of the Krypt and proceeds to fight enemys.</li>
              <li>After each floor the player has a choice to enter a shop to heal or increase their power.</li>
              <li>Purchasing items use coin which are earned from killing enemies.</li>
              <li>Battles are conducted in waves. You fight enemeis one at a time. The higher speed goes first.</li>
              <li>Player Loses the game if their hp falls to 0.</li>
              <li>Player Wins if they defeat 1 of 3 final boss.</li>
          </ul>
          <h2>Menu Interaction</h2>
          <ul>
              <li>Start Game Button: Starts Game</li>
              <li>Class selection Button: Mage, Rouge, and Warrior.</li>
              <li>Attack, Defend, or Dodge Buttons : Defend is for warior and mage class while dodge is for rouge class.</li>
              <li>Shop Interaction Buttons: For selecting items in a shop.</li>
              <li>Continue to Next floor interaction</li>
          </ul>
      </div>
      <div className="Back_Button" onClick={() => changePage("Home")}>
        <h2>Back</h2>
      </div>
    </div>
  );
};

export default HowToPlay;
