import ShopKeeper from "../Assets/ShopKeeper.gif";

const Shop = ({ changePage }) => {
  return (
    <div className="Shop_Page">
      <div className="Shop_Area">
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
        </div>
        <div className="Shop_Items">
          <div className="Item">
            <h3>Potion</h3>
          </div>
          <div className="Item">
            <h3>Special</h3>
          </div>
          <div className="Item">
            <h3>Hp Boost</h3>
          </div>
          <div className="Item">
            <h3>Atk Boost</h3>
          </div>
          <div className="Item">
            <h3>Def Boost</h3>
          </div>
          <div className="Item">
            <h3>Spd Boost</h3>
          </div>
          <div className="Item">
            <h3>Spl Boost</h3>
          </div>
        </div>
        <div className="Shop_Keeper">
          <h3>Hello Explorer, Coin for My Wares?</h3>
          <img
            src={ShopKeeper}
            alt="Shop Keeper Image"
            className="ShopeKeeper_Img"
          />
        </div>
      </div>
      <div className="Button_Container">
        <div className="Back_Button" onClick={() => changePage("Game")}>
          <h2>Back</h2>
        </div>
        <div className="Back_Button" onClick={() => changePage("Home")}>
          <h2>Quit</h2>
        </div>
      </div>
    </div>
  );
};

export default Shop;
