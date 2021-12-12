export class mob {
    _mobType = "";
    _health = 0;
    _maxHealth = 0;
    _attack = 0;
    _speed = 0;
    _defense = 0;
    _coin = 0;
    _img = '';
    _exp = 0;

  
    constructor(mobType, health, maxHealth, attack, speed, defense,coin, img , exp) {
    this._mobType = mobType;
    this._health = health;
    this._maxHealth = maxHealth;
    this._attack = attack;
    this._speed = speed;
    this._defense = defense;
    this._coin = coin;
    this._img = img;
    this._exp = exp;

  }
  start(){
      return {
        _mobType :this._mobType,
        _health :this._health,
        _maxHealth: this._maxHealth,
        _attack :this._attack,
        _speed :this._speed,
        _defense :this._defense,
        _img :this._img,
        _coin :this._coin,
        _exp: this._exp


      }
  }
  
}
