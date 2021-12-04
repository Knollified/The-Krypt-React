export class mob {
    _mobType = "";
    _health = 0;
    _attack = 0;
    _speed = 0;
    _defense = 0;
    _coin = 0;
    _img = '';
  
    constructor(mobType, health, attack, speed, defense,coin, img) {
    this._mobType = mobType;
    this._health = health;
    this._attack = attack;
    this._speed = speed;
    this._defense = defense;
    this._coin = coin;
    this._img = img;

  }
  start(){
      return {
        _mobType :this._mobType,
        _health :this._health,
        _attack :this._attack,
        _speed :this._speed,
        _defense :this._defense,
        _img :this._img,
        _coin :this._coin,


      }
  }
}
