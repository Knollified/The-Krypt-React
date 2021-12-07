export class player {
  _classType = "";
  _maxHealth = 0;
  _health = 0;
  _attack = 0;
  _speed = 0;
  _defense = 0;
  _special = 0;
  _img = "";
  _coin = 0;

  constructor(classType, health, maxHealth, attack, speed, defense, special, img, coin) {
    this._classType = classType;
    this._maxHealth = maxHealth;
    this._health = health;
    this._attack = attack;
    this._speed = speed;
    this._defense = defense;
    this._special =special;
    this._img = img;
    this._coin = coin;
  }
  start() {
    return {
      classType: this._classType,
      _health: this._health,
      _maxHealth: this._maxHealth,
      _attack: this._attack,
      _speed: this._speed,
      _defense: this._defense,
      _special: this._special,
      _img: this._img,
      _coin: this._coin,
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
      _coin: this._coin,
    });
  }
}
