(this["webpackJsonpthe-krypt-react"]=this["webpackJsonpthe-krypt-react"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(7),i=a.n(n),h=(a(12),a(3)),l=a.p+"static/media/Skull.d4a418e2.gif",r=a(0),o=function(e){var t=e.changePage;return Object(r.jsxs)("div",{children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Welcome To The Krypt Enter If You Dare!"})}),Object(r.jsx)("div",{className:"Image_Container",children:Object(r.jsx)("img",{className:"Skull_img",src:l,alt:""})}),Object(r.jsxs)("div",{className:"Buttons",children:[Object(r.jsx)("div",{className:"Button_1",onClick:function(){return t("Class")},children:Object(r.jsx)("h2",{children:"Enter The Krypt"})}),Object(r.jsx)("div",{className:"Button_2",onClick:function(){return t("HowToPlay")},children:Object(r.jsx)("h2",{children:"How To Play"})})]})]})},_=a(1),d=a(4),j=a(5),f=function(){function e(t,a,c,s,n,i,h,l){Object(d.a)(this,e),this._mobType="",this._health=0,this._maxHealth=0,this._attack=0,this._speed=0,this._defense=0,this._coin=0,this._img="",this._mobType=t,this._health=a,this._maxHealth=c,this._attack=s,this._speed=n,this._defense=i,this._coin=h,this._img=l}return Object(j.a)(e,[{key:"start",value:function(){return{_mobType:this._mobType,_health:this._health,_maxHealth:this._maxHealth,_attack:this._attack,_speed:this._speed,_defense:this._defense,_img:this._img,_coin:this._coin}}}]),e}(),b=function(){function e(t,a,c,s,n,i,h,l){Object(d.a)(this,e),this._bossType="",this._health=0,this._maxHealth=0,this._attack=0,this._speed=0,this._defense=0,this._coin=0,this._img="",this._bossType=t,this._health=a,this._maxHealth=c,this._attack=s,this._speed=n,this._defense=i,this._coin=h,this._img=l}return Object(j.a)(e,[{key:"start",value:function(){return{_mobType:this._bossType,_health:this._health,_maxHealth:this._maxHealth,_attack:this._attack,_speed:this._speed,_defense:this._defense,_img:this._img,_coin:this._coin}}}]),e}(),u=function(){function e(t,a,c,s,n,i,h,l,r){Object(d.a)(this,e),this._classType="",this._maxHealth=0,this._health=0,this._attack=0,this._speed=0,this._defense=0,this._special=0,this._img="",this._coin=0,this._classType=t,this._maxHealth=c,this._health=a,this._attack=s,this._speed=n,this._defense=i,this._special=h,this._img=l,this._coin=r}return Object(j.a)(e,[{key:"start",value:function(){return{classType:this._classType,_health:this._health,_maxHealth:this._maxHealth,_attack:this._attack,_speed:this._speed,_defense:this._defense,_special:this._special,_img:this._img,_coin:this._coin}}},{key:"increaseLife",value:function(e){this._health=this._health+e,console.log({classType:this._classType,_health:this._health,_attack:this._attack,_speed:this._speed,_defense:this._defense,_coin:this._coin})}}]),e}(),m=a.p+"static/media/Skeleton_Warrior.f4013fea.gif",O=a.p+"static/media/Skeleton_Archer.2e9e5bda.gif",x=a.p+"static/media/Skeleton_Lancer.dfc99c4c.gif",k=a.p+"static/media/Skeleton_Warlock.d8a35ab7.gif",p=a.p+"static/media/Skeleton_King.dc3218c1.gif",v=a.p+"static/media/Skeleton_Rider.e893007b.gif",g=a.p+"static/media/Skeleton_Dragon.ad09202b.gif",M=a.p+"static/media/Skeleton_Heratic.fd7dc328.gif",S=a.p+"static/media/Skeleton_Collector.d771cbab.gif",y=a.p+"static/media/Skeleton_Titan.0679bdc8.gif",C=function(e){var t=e.changePage,a=e.currentPlayer,s=e.setCurrentPlayer,n=e.score,i=e.bossChoice,l=e.setBossChoice,o=e.setScore,d=e.specialAttackCount,j=e.setSpecialAttack,u=Math.floor(10*Math.random()+10),C=u,N=Math.floor(10*Math.random()+25),T=N,P=Math.floor(10*Math.random()+25),B=P,H=Math.floor(10*Math.random()+25),w=H,A=Math.floor(5*Math.random()+35),I=A,K=Math.floor(5*Math.random()+40),G=K,D=Math.floor(10*Math.random()+55),R=K,W=new f("Skeleton Warrior",u,C,Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),10,m),E=new f("Skeleton Archer",u,C,Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),10,O),L=new f("Skeleton Lancer",u,C,Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),10,x),F=new f("Skeleton Warlock",u,C,Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),10,k),Y=new b("Skeleton Rider",N,T,Math.floor(5*Math.random()+5),Math.floor(5*Math.random()+5),Math.floor(5*Math.random()+5),20,v),q=new b("Skeleton Heratic",P,B,Math.floor(5*Math.random()+5),Math.floor(5*Math.random()+5),Math.floor(5*Math.random()+5),20,M),J=new b("Skeleton Collector",H,w,Math.floor(5*Math.random()+5),Math.floor(5*Math.random()+5),Math.floor(5*Math.random()+5),20,S),Q=new b("Skeleton King",A,I,Math.floor(4*Math.random()+8),Math.floor(4*Math.random()+8),Math.floor(4*Math.random()+8),20,p),z=new b("Skeleton Dragon",K,G,Math.floor(5*Math.random()+10),Math.floor(5*Math.random()+10),Math.floor(5*Math.random()+10),20,g),U=new b("Skeleton Titan",D,R,Math.floor(5*Math.random()+10),Math.floor(5*Math.random()+10),Math.floor(5*Math.random()+10),20,y),V=Object(c.useState)(void 0),X=Object(h.a)(V,2),Z=X[0],$=X[1],ee=Object(c.useState)(void 0),te=Object(h.a)(ee,2),ae=te[0],ce=te[1],se=Object(c.useState)(!1),ne=Object(h.a)(se,2),ie=ne[0],he=ne[1],le=Object(c.useState)(0),re=Object(h.a)(le,2),oe=re[0],_e=re[1],de=Object(c.useState)(0),je=Object(h.a)(de,2),fe=je[0],be=je[1],ue=[W,E,L,F],me=Math.floor(4*Math.random()+0),Oe=[Y,q,J,Q,z,U],xe=function(){if(Z){var e=Object(_.a)({},a),t=Object(_.a)({},Z);if(e._health+e._defense-t._attack<=0)e._health=0,s(e);else if(t._health+t._defense-e._attack<=0)t._health=0,e._coin=e._coin+5,$(t),s(e);else if(e._speed>t._speed){var c=function(){return e._attack<=t._defense?1:e._attack>t._defense?e._attack-t._defense:void 0},n=function(){return t._attack<=e._defense?1:t._attack>e._defense?t._attack-e._defense:void 0};t._health=t._health-c(),$(t),_e(n()),be(c()),e._health=e._health-n(),s(e)}else if(t._speed>e._speed){var i=function(){return t._attack<=e._defense?1:t._attack>e._defense?t._attack-e._defense:void 0},h=function(){return e._attack<=t._defense?1:e._attack>t._defense?e._attack-t._defense:void 0};t._health=t._health-h(),$(t),_e(i()),be(h()),e._health=e._health-i(),s(e)}else if(e._speed===t._speed){var l=function(){return e._attack<=t._defense?1:e._attack>t._defense?e._attack-t._defense:void 0},r=function(){return t._attack<=e._defense?1:t._attack>e._defense?t._attack-e._defense:void 0};t._health=t._health-l(),$(t),_e(r()),be(l()),e._health=e._health-r(),s(e)}}else if(ae){var o=Object(_.a)({},a),d=Object(_.a)({},ae);if(o._health-d._attack<=0)o._health=0,s(o);else if(d._health-o._attack<=0)d._health=0,o._coin=o._coin+5,ce(d),s(o);else if(o._speed>d._speed){var j=function(){return o._attack<=d._defense?1:o._attack>d._defense?o._attack-d._defense:void 0},f=function(){return d._attack<=o._defense?1:d._attack>o._defense?d._attack-o._defense:void 0};d._health=d._health-j(),ce(d),_e(f()),be(j()),o._health=o._health-f(),s(o)}else if(d._speed>o._speed){var b=function(){return d._attack<=o._defense?1:d._attack>o._defense?d._attack-o._defense:void 0},u=function(){return o._attack<=d._defense?1:o._attack>d._defense?o._attack-d._defense:void 0};d._health=d._health-u(),ce(d),_e(b()),be(u()),o._health=o._health-b(),s(o)}else if(o._speed===d._speed){var m=function(){return o._attack<=d._defense?1:o._attack>d._defense?o._attack-d._defense:void 0},O=function(){return d._attack<=o._defense?1:d._attack>o._defense?d._attack-o._defense:void 0};d._health=d._health-m(),ce(d),_e(O()),be(m()),o._health=o._health-O(),s(o)}}};return Object(c.useEffect)((function(){he(!0),Z||ae||(n%5===0?ce(Oe[i]):(n>5&&n<10&&$(ue[me]),$(ue[me]))),he(!1)}),[n,me]),Object(c.useEffect)((function(){n%5===0&&Z&&ae&&ce(Oe[i])}),[n,i]),Object(c.useEffect)((function(){(Z&&Z._health)<=0?o(n+1):(ae&&ae._health)<=0&&(o(n+1),l(i+1))}),[Z,ae]),ie?Object(r.jsx)("h1",{style:{color:"bisque"},children:" ..."}):Object(r.jsxs)("div",{className:"Game_Page",children:[Object(r.jsx)("h1",{children:"Clear The Krypt"}),Object(r.jsxs)("div",{className:"Player_Area",children:[Object(r.jsxs)("div",{className:"Player",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h4",{children:a._classType})}),Object(r.jsxs)("div",{className:"Player_Stats",children:[Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Hp: ",a._health," / ",a._maxHealth]})}),Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Atk: ",a._attack]})}),Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Def: ",a._defense]})}),Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Spd: ",a._speed]})}),Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Coins: ",a._coin," "]})})]}),Object(r.jsx)("div",{className:"Current_Player",children:Object(r.jsx)("img",{src:a._img,alt:""})}),Z&&Z._health||(ae&&ae._health)>0||31===n?" ":Object(r.jsx)("div",{className:"Shop_Button ",onClick:function(){return t("Shop")},children:Object(r.jsx)("h4",{children:"Shop"})})]}),Object(r.jsxs)("div",{className:"Mob",children:[Object(r.jsx)("div",{children:Object(r.jsxs)("h4",{children:[" ",Z&&Z._mobType||ae&&ae._bossType," "]})}),Object(r.jsxs)("div",{className:"Mob_Stats",children:[Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Hp:"," ",Z&&Z._health||ae&&ae._health,"/ ","",Z&&Z._maxHealth||ae&&ae._maxHealth]})}),Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Atk:"," ",Z&&Z._attack||ae&&ae._attack]})}),Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Def:"," ",Z&&Z._defense||ae&&ae._defense]})}),Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Spd:"," ",Z&&Z._speed||ae&&ae._speed]})})]}),Object(r.jsx)("div",{className:"Current_Player",children:Object(r.jsx)("img",{src:Z&&Z._img||ae&&ae._img,alt:""})}),Z&&Z._health||(ae&&ae._health)>0||31===n?" ":Object(r.jsx)("div",{className:"NextBattle_Button",onClick:function(){n%5===0?($(void 0),ce(Oe[i])):(ce(void 0),$(ue[me]))},children:Object(r.jsx)("h4",{children:"Next Battle"})})]})]}),Object(r.jsxs)("div",{className:"Game_Events",children:[Z&&0===Z._health||ae&&0===ae._health||a&&0===a._health?" ":Object(r.jsxs)("h3",{children:[a._classType," lost ",oe," Hp from"," ",Z&&Z._mobType||ae&&ae._bossType," ","&"," "]}),Z&&0===Z._health||ae&&0===ae._health||0===(a&&a._health)?" ":Object(r.jsxs)("h3",{children:[Z&&Z._mobType||ae&&ae._bossType," ","Lost ",fe," Hp"]}),Z&&0===Z._health||ae&&0===ae._health?Object(r.jsxs)("h3",{children:[Z&&Z._mobType||ae&&ae._bossType," ","Defeated"," "]}):" ",31===n?Object(r.jsx)("h3",{children:"You Cleared The Krypt"}):" ",(a&&a._health)>0?" ":Object(r.jsxs)("h3",{children:[" ","You Were Defeated By"," ",Z&&Z._mobType||ae&&ae._bossType]})]}),Object(r.jsx)("div",{className:"Action_Containers",children:Z&&0===Z._health||0===a._health||ae&&0===ae._health?" ":Object(r.jsxs)(r.Fragment,{children:[(Z&&Z._mobType,Object(r.jsx)("div",{className:"Attack_Button",onClick:function(){return xe()},children:Object(r.jsx)("h2",{children:"Attack"})})),Object(r.jsx)("div",{className:"Defend_Button",onClick:function(){return function(){if(Z){var e=Object(_.a)({},a),t=Object(_.a)({},Z);if(e._health-t._attack<=0)e._health=0,s(e);else{var c=function(){return t._attack<=e._defense?0:t._attack>e._defense?t._attack-e._defense:void 0};e._health=e._health-c(),s(e),_e(c())}}else if(ae){var n=Object(_.a)({},a),i=Object(_.a)({},ae);if(n._health-i._attack<=0)n._health=0,s(n);else{var h=function(){return ae._attack<=n._defense?0:ae._attack>n._defense?i-n._defense:void 0};n._health=n._health-h(),s(n),_e(h())}}}()},children:Object(r.jsx)("h2",{children:"Defend/Dodge"})}),d<1?" ":Object(r.jsx)("div",{className:"SpecialAttack_Button",onClick:function(){return function(){if(Z){var e=Object(_.a)({},a),t=Object(_.a)({},Z);if(e._health-t._attack<=0)e._health=0,s(e);else if(t._health-(e._attack+e._special)<=0)t._health=0,e._coin=e._coin+5,$(t),s(e);else{var c=function(){return e._attack+e._special<=t._defense?e._attack:e._attack+e._special>t._defense?e._attack+e._special-t._defense:void 0},n=function(){return t._attack<=e._defense?1:t._attack>e._defense?t._attack-e._defense:void 0};t._health=t._health-c(),$(t),_e(n()),be(c()),e._health=e._health-n(),s(e)}}else if(ae){var i=Object(_.a)({},a),h=Object(_.a)({},ae);if(i._health-h._attack<=0)i._health=0,s(i);else if(h._health-(i._attack+i._special)<=0)h._health=0,i._coin=i._coin+5,$(h),s(i);else{var l=function(){return i._attack+i._special<=h._defense?i._attack:i._attack+i._special>h._defense?i._attack+i._special-h._defense:void 0},r=function(){return h._attack<=i._defense?1:h._attack>i._defense?h._attack-i._defense:void 0};h._health=h._health-l(),ce(h),_e(r()),be(l()),i._health=i._health-r(),s(i)}}j(d-1)}()},children:Object(r.jsx)("h2",{children:"Special Attack"})})]})}),Object(r.jsx)("div",{className:"Back_Button",onClick:function(){return t("Home"),s(""),o(1),j(0),void l(0)},children:Object(r.jsx)("h2",{children:"Quit Game"})})]})},N=a.p+"static/media/Mage.ad1c480e.gif",T=a.p+"static/media/Rouge.f49a7755.gif",P=a.p+"static/media/Knight.bbb32b24.gif",B=function(e){var t=e.changePage,a=e.resetPlayer,c=e.currentPlayer;return Object(r.jsxs)("div",{className:"ClassPage",children:[Object(r.jsx)("h1",{children:"Choose Your Class"}),Object(r.jsxs)("div",{className:"Player_Container",children:[Object(r.jsxs)("div",{className:"Mage",children:[Object(r.jsx)("img",{className:"Mage_Img",src:N,alt:"Mage Gif"}),Object(r.jsx)("div",{className:" ".concat(c&&"Mage"===c._classType?"Clicked":" "," Character_Button "),children:Object(r.jsx)("h2",{onClick:function(){return a("Mage")},children:"The Mage"})})]}),Object(r.jsxs)("div",{className:"Rouge",children:[Object(r.jsx)("img",{className:"Rouge_Img",src:T,alt:"Rouge Gif"}),Object(r.jsx)("div",{className:" ".concat(c&&"Rouge"===c._classType?"Clicked":" "," Character_Button "),children:Object(r.jsx)("h2",{onClick:function(){return a("Rouge")},children:"The Rouge"})})]}),Object(r.jsxs)("div",{className:"Knight",children:[Object(r.jsx)("img",{className:"Knight_Img",src:P,alt:"Knight Gif"}),Object(r.jsx)("div",{className:" ".concat(c&&"Knight"===c._classType?"Clicked":" "," Character_Button "),children:Object(r.jsx)("h2",{onClick:function(){return a("Knight")},children:"The Knight"})})]})]}),Object(r.jsxs)("div",{className:"Button_Container",children:[c&&Object(r.jsx)("div",{className:"Start_Game",onClick:function(){return t("Game")},children:Object(r.jsx)("h2",{children:"Start Game"})}),Object(r.jsx)("div",{className:"Back_Button",onClick:function(){return t("Home")},children:Object(r.jsx)("h2",{children:"Back"})})]})]})},H=a.p+"static/media/ShopKeeper.66f6a091.gif",w=function(e){var t=e.changePage,a=e.currentPlayer,c=e.setCurrentPlayer,s=e.setScore,n=e.specialAttackCount,i=e.setSpecialAttack,h=e.setBossChoice;return Object(r.jsxs)("div",{className:"Shop_Page",children:[Object(r.jsxs)("div",{className:"Shop_Area",children:[Object(r.jsxs)("div",{className:"Player",children:[Object(r.jsxs)("div",{className:"Player_Stats",children:[Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Hp: ",a._health]})}),Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Atk: ",a._attack]})}),Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Def: ",a._defense]})}),Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Spd: ",a._speed]})}),Object(r.jsx)("div",{className:"Stats",children:Object(r.jsxs)("h4",{children:["Coins: ",a._coin," "]})})]}),Object(r.jsx)("div",{className:"Current_Player",children:Object(r.jsx)("img",{src:a._img,alt:""})})]}),Object(r.jsxs)("div",{className:"Shop_Items",children:[Object(r.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(_.a)({},a);e._coin>=5&&(e._coin-=5,e._health=e._maxHealth,c(e))}()},children:Object(r.jsx)("h3",{children:"Potion: 5 Coin"})}),Object(r.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(_.a)({},a);e._coin>=10&&(e._coin-=10,i(n+1),c(e))}()},children:Object(r.jsx)("h3",{children:"Special: 10 Coin"})}),Object(r.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(_.a)({},a);e._coin>=5&&(e._coin-=5,e._maxHealth+=1,c(e))}()},children:Object(r.jsx)("h3",{children:"Hp Boost: 5 Coin"})}),Object(r.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(_.a)({},a);e._coin>=5&&(e._coin-=5,e._attack+=1,c(e))}()},children:Object(r.jsx)("h3",{children:"Atk Boost: 5 Coin"})}),Object(r.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(_.a)({},a);e._coin>=5&&(e._coin-=5,e._defense+=1,c(e))}()},children:Object(r.jsx)("h3",{children:"Def Boost: 5 Coin"})}),Object(r.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(_.a)({},a);e._coin>=5&&(e._coin-=5,e._speed+=1,c(e))}()},children:Object(r.jsx)("h3",{children:"Spd Boost: 5 Coin"})}),Object(r.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(_.a)({},a);e._coin>=5&&(e._coin-=5,e._special+=1,c(e))}()},children:Object(r.jsx)("h3",{children:"Spl Boost: 5 Coin"})})]}),Object(r.jsxs)("div",{className:"Shop_Keeper",children:[Object(r.jsx)("h3",{children:"Hello Explorer, Coin for My Wares?"}),Object(r.jsx)("img",{src:H,alt:"Shop Keeper",className:"ShopeKeeper_Img"})]})]}),Object(r.jsxs)("div",{className:"Button_Container",children:[Object(r.jsx)("div",{className:"Back_Button",onClick:function(){return t("Game")},children:Object(r.jsx)("h2",{children:"Back"})}),Object(r.jsx)("div",{className:"Back_Button",onClick:function(){return t("Home"),c(""),h(0),void s(1)},children:Object(r.jsx)("h2",{children:"Quit Game"})})]})]})},A=function(e){var t=e.changePage;return Object(r.jsxs)("div",{className:"How_To_Play_Page",children:[Object(r.jsx)("h1",{children:"How To Play"}),Object(r.jsxs)("div",{className:"Instructions_Container",children:[Object(r.jsx)("h2",{children:"Rules and Game Mechanics"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Player starts with a choice of class which has unique stats and weapon."}),Object(r.jsx)("li",{children:"The player then starts on the first floor of the Krypt and proceeds to fight enemys."}),Object(r.jsx)("li",{children:"After each floor the player has a choice to enter a shop to heal or increase their power."}),Object(r.jsx)("li",{children:"Purchasing items use coin which are earned from killing enemies."}),Object(r.jsx)("li",{children:"Battles are conducted in waves. You fight enemeis one at a time. The higher speed goes first."}),Object(r.jsx)("li",{children:"Player Loses the game if their hp falls to 0."}),Object(r.jsx)("li",{children:"Player Wins if they defeat 1 of 3 final boss."})]}),Object(r.jsx)("h2",{children:"Menu Interaction"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Start Game Button: Starts Game"}),Object(r.jsx)("li",{children:"Class selection Button: Mage, Rouge, and Warrior."}),Object(r.jsx)("li",{children:"Attack, Defend, or Dodge Buttons : Defend is for warior and mage class while dodge is for rouge class."}),Object(r.jsx)("li",{children:"Shop Interaction Buttons: For selecting items in a shop."}),Object(r.jsx)("li",{children:"Continue to Next floor interaction"})]})]}),Object(r.jsx)("div",{className:"Back_Button",onClick:function(){return t("Home")},children:Object(r.jsx)("h2",{children:"Back"})})]})};var I=function(){var e,t=Object(c.useState)(""),a=Object(h.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(),l=Object(h.a)(i,2),_=l[0],d=l[1],j=Object(c.useState)(1),f=Object(h.a)(j,2),b=f[0],m=f[1],O=Object(c.useState)(1),x=Object(h.a)(O,2),k=x[0],p=x[1],v=Object(c.useState)(0),g=Object(h.a)(v,2),M=g[0],S=g[1],y=function(t){switch(t){case"Mage":e=new u(t,35,35,8,5,3,8,N,0),d(e),p(1);break;case"Rouge":e=new u(t,30,30,7,7,5,7,T,0),d(e),p(1);break;case"Knight":e=new u(t,45,45,9,3,7,9,P,0),d(e),p(1)}},H=function(e){n(e)};return Object(r.jsx)("div",{className:"Game_Container",children:Object(r.jsx)("div",{className:"Game_Space",children:function(){switch(s){case"Class":return Object(r.jsx)(B,{changePage:H,resetPlayer:y,currentPlayer:_});case"HowToPlay":return Object(r.jsx)(A,{changePage:H});case"Game":return Object(r.jsx)(C,{changePage:H,currentPlayer:_,setCurrentPlayer:d,bossChoice:M,setBossChoice:S,score:b,setScore:m,specialAttackCount:k,setSpecialAttack:p});case"Shop":return Object(r.jsx)(w,{changePage:H,currentPlayer:_,setCurrentPlayer:d,bossChoice:M,setBossChoice:S,specialAttackCount:k,setSpecialAttack:p});default:return Object(r.jsx)(o,{changePage:H})}}()})})};a(14);var K=function(){return Object(r.jsx)(I,{})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(K,{})}),document.getElementById("root")),G()}},[[15,1,2]]]);
//# sourceMappingURL=main.b87c8b98.chunk.js.map