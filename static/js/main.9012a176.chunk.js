(this["webpackJsonpthe-krypt-react"]=this["webpackJsonpthe-krypt-react"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(7),i=a.n(n),h=(a(12),a(3)),r=a.p+"static/media/Skull.d4a418e2.gif",l=a(0),o=function(e){var t=e.changePage;return Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Welcome To The Krypt Enter If You Dare!"})}),Object(l.jsx)("div",{className:"Image_Container",children:Object(l.jsx)("img",{className:"Skull_img",src:r,alt:""})}),Object(l.jsxs)("div",{className:"Buttons",children:[Object(l.jsx)("div",{className:"Button_1",onClick:function(){return t("Class")},children:Object(l.jsx)("h2",{children:"Enter The Krypt"})}),Object(l.jsx)("div",{className:"Button_2",onClick:function(){return t("HowToPlay")},children:Object(l.jsx)("h2",{children:"How To Play"})})]})]})},d=a(1),j=a(4),_=a(5),f=function(){function e(t,a,c,s,n,i,h){Object(j.a)(this,e),this._mobType="",this._health=0,this._attack=0,this._speed=0,this._defense=0,this._coin=0,this._img="",this._mobType=t,this._health=a,this._attack=c,this._speed=s,this._defense=n,this._coin=i,this._img=h}return Object(_.a)(e,[{key:"start",value:function(){return{_mobType:this._mobType,_health:this._health,_attack:this._attack,_speed:this._speed,_defense:this._defense,_img:this._img,_coin:this._coin}}}]),e}(),b=function(){function e(t,a,c,s,n,i,h){Object(j.a)(this,e),this._bossType="",this._health=0,this._attack=0,this._speed=0,this._defense=0,this._coin=0,this._img="",this._bossType=t,this._health=a,this._attack=c,this._speed=s,this._defense=n,this._coin=i,this._img=h}return Object(_.a)(e,[{key:"start",value:function(){return{_mobType:this._bossType,_health:this._health,_attack:this._attack,_speed:this._speed,_defense:this._defense,_img:this._img,_coin:this._coin}}}]),e}(),u=function(){function e(t,a,c,s,n,i,h,r,l){Object(j.a)(this,e),this._classType="",this._maxHealth=0,this._health=0,this._attack=0,this._speed=0,this._defense=0,this._special=0,this._img="",this._coin=0,this._classType=t,this._maxHealth=c,this._health=a,this._attack=s,this._speed=n,this._defense=i,this._special=h,this._img=r,this._coin=l}return Object(_.a)(e,[{key:"start",value:function(){return{classType:this._classType,_health:this._health,_maxHealth:this._maxHealth,_attack:this._attack,_speed:this._speed,_defense:this._defense,_special:this._special,_img:this._img,_coin:this._coin}}},{key:"increaseLife",value:function(e){this._health=this._health+e,console.log({classType:this._classType,_health:this._health,_attack:this._attack,_speed:this._speed,_defense:this._defense,_coin:this._coin})}}]),e}(),m=a.p+"static/media/Skeleton_Warrior.f4013fea.gif",O=a.p+"static/media/Skeleton_Archer.2e9e5bda.gif",x=a.p+"static/media/Skeleton_Lancer.dfc99c4c.gif",p=a.p+"static/media/Skeleton_Warlock.d8a35ab7.gif",v=a.p+"static/media/Skeleton_King.dc3218c1.gif",g=a.p+"static/media/Skeleton_Rider.e893007b.gif",k=a.p+"static/media/Skeleton_Dragon.ad09202b.gif",M=a.p+"static/media/Skeleton_Heratic.fd7dc328.gif",S=a.p+"static/media/Skeleton_Collector.d771cbab.gif",N=function(e){var t=e.changePage,a=e.currentPlayer,s=e.setCurrentPlayer,n=e.score,i=e.setScore,r=e.specialAttackCount,o=e.setSpecialAttack,j=new f("Skeleton Warrior",Math.floor(10*Math.random()+10),Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),10,m),_=new f("Skeleton Archer",Math.floor(10*Math.random()+10),Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),10,O),u=new f("Skeleton Lancer",Math.floor(10*Math.random()+10),Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),10,x),N=new f("Skeleton Warlock",Math.floor(10*Math.random()+10),Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),Math.floor(3*Math.random()+2),10,p),y=new b("Skeleton Rider",Math.floor(15*Math.random()+20),Math.floor(5*Math.random()+5),Math.floor(5*Math.random()+5),Math.floor(5*Math.random()+5),20,g),C=new b("Skeleton Heratic",Math.floor(15*Math.random()+20),Math.floor(5*Math.random()+5),Math.floor(5*Math.random()+5),Math.floor(5*Math.random()+5),20,M),P=new b("Skeleton Collector",Math.floor(15*Math.random()+20),Math.floor(5*Math.random()+5),Math.floor(5*Math.random()+5),Math.floor(5*Math.random()+5),20,S),B=new b("Skeleton King",Math.floor(15*Math.random()+25),Math.floor(4*Math.random()+8),Math.floor(4*Math.random()+8),Math.floor(4*Math.random()+8),20,v),T=new b("Skeleton Dragon",Math.floor(15*Math.random()+30),Math.floor(5*Math.random()+10),Math.floor(5*Math.random()+10),Math.floor(5*Math.random()+10),20,k),w=Object(c.useState)(void 0),A=Object(h.a)(w,2),H=A[0],I=A[1],K=Object(c.useState)(void 0),G=Object(h.a)(K,2),D=G[0],R=G[1],W=Object(c.useState)(!1),E=Object(h.a)(W,2),F=E[0],L=E[1],Y=Object(c.useState)(0),q=Object(h.a)(Y,2),J=q[0],Q=q[1],z=Object(c.useState)(0),U=Object(h.a)(z,2),V=U[0],X=U[1],Z=[j,_,u,N],$=Math.floor(4*Math.random()+0),ee=[y,C,P,B,T],te=function(e,t){if(H){var c=Object(d.a)({},a),n=Object(d.a)({},H);if(c._health-t<=0)c._health=0,s(c);else if(n._health-e<=0)n._health=0,c._coin=c._coin+5,I(n),s(c);else{var i=function(e){return e<=n._defense?1:e>n._defense?e-n._defense:void(n._health=n._health-h(e))},h=function(e){return e<=c._defense?1:e>c._defense?e-c._defense:void(c._health=c._health-i(e))};s(c),X(i(t)),I(n)}}else if(D){var r=Object(d.a)({},a),l=Object(d.a)({},D);if(r._health-t<=0)r._health=0,s(r);else if(l._health-e<=0)l._health=0,R(l);else{var o=function(e){return e<=r._defense?1:e>r._defense?e-r._defense:void 0};l._health=l._health-function(e){return e<=l._defense?1:e>l._defense?e-l._defense:void 0}(e),R(l),r._health=r._health-o(t),s(r),X(o(t))}}};return Object(c.useEffect)((function(){L(!0),H||D||I(Z[$]),L(!1)}),[n,$]),Object(c.useEffect)((function(){n%5===0&&H&&D&&R(ee[J])}),[n]),Object(c.useEffect)((function(){(H&&H._health)<=0?i(n+1):(D&&D._health)<=0&&(i(n+1),Q(J+.5))}),[H,D]),F?Object(l.jsx)("h1",{style:{color:"bisque"},children:" ..."}):Object(l.jsxs)("div",{className:"Game_Page",children:[Object(l.jsx)("h1",{children:"Clear The Krypt"}),Object(l.jsxs)("div",{className:"Player_Area",children:[Object(l.jsxs)("div",{className:"Player",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h4",{children:a._classType})}),Object(l.jsxs)("div",{className:"Player_Stats",children:[Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Hp: ",a._health," / ",a._maxHealth]})}),Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Atk: ",a._attack]})}),Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Def: ",a._defense]})}),Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Spd: ",a._speed]})}),Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Coins: ",a._coin," "]})})]}),Object(l.jsx)("div",{className:"Current_Player",children:Object(l.jsx)("img",{src:a._img,alt:""})}),H&&H._health||(D&&D._health)>0?" ":Object(l.jsx)("div",{className:"Shop_Button ",onClick:function(){return t("Shop")},children:Object(l.jsx)("h4",{children:"Shop"})})]}),Object(l.jsxs)("div",{className:"Mob",children:[Object(l.jsx)("div",{children:Object(l.jsxs)("h4",{children:[" ",H&&H._mobType||D&&D._bossType," "]})}),Object(l.jsxs)("div",{className:"Mob_Stats",children:[Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Hp:"," ",H&&H._health||D&&D._health]})}),Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Atk:"," ",H&&H._attack||D&&D._attack]})}),Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Def:"," ",H&&H._defense||D&&D._defense]})}),Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Spd:"," ",H&&H._speed||D&&D._speed]})})]}),Object(l.jsx)("div",{className:"Current_Player",children:Object(l.jsx)("img",{src:H&&H._img||D&&D._img,alt:""})}),H&&H._health||(D&&D._health)>0?" ":Object(l.jsx)("div",{className:"NextBattle_Button",onClick:function(){n%5===0?(I(void 0),R(ee[J])):(R(void 0),I(Z[$]))},children:Object(l.jsx)("h4",{children:"Next Battle"})})]})]}),Object(l.jsxs)("div",{className:"Game_Events",children:[0===(H&&H._health)||0===(a&&a._health)?" ":Object(l.jsxs)("h3",{children:["you lost ",V," Hp from ",H&&H._mobType||D&&D._bossType]}),0===(H&&H._health)?Object(l.jsxs)("h3",{children:[H&&H._mobType||D&&D._BossType," Defeated"]}):" ",(a&&a._health)>0?" ":Object(l.jsxs)("h3",{children:[" You Were Defeated By ",H&&H._mobType||D&&D._bossType]})]}),Object(l.jsx)("div",{className:"Action_Containers",children:H&&0===H._health||0===a._health?" ":Object(l.jsxs)(l.Fragment,{children:[H&&H._mobType?Object(l.jsx)("div",{className:"Attack_Button",onClick:function(){return te(a._attack,H._attack)},children:Object(l.jsx)("h2",{children:"Attack"})}):Object(l.jsx)("div",{className:"Attack_Button",onClick:function(){return te(a._attack,D._attack)},children:Object(l.jsx)("h2",{children:"Attack"})}),Object(l.jsx)("div",{className:"Defend_Button",onClick:function(){return function(e){if(a){var t=Object(d.a)({},a);if(t._health-e<=0)t._health=0,s(t);else{var c=function(e){return e<=t._defense?0:e>t._defense?e-t._defense:void 0};t._health=t._health-c(e),s(t),X(c(e))}}else if(D){var n=Object(d.a)({},D);if(n._health-e<=0)n._health=0,s(n);else{var i=function(e){return e<=n._defense?1:e>n._defense?e-n._defense:void 0};n._health=n._health-i(e),s(n),X(i(e))}}}(H._attack||D._attack)},children:Object(l.jsx)("h2",{children:"Defend/Dodge"})}),r<1?" ":Object(l.jsx)("div",{className:"SpecialAttack_Button",onClick:function(){return function(e,t){if(H){var c=Object(d.a)({},a),n=Object(d.a)({},H);if(c._health-t<=0)c._health=0,s(c);else if(n._health-e<=0)n._health=0,c._coin=c._coin+5,I(n),s(c);else{var i=function(e){return e<=c._defense?1:e>c._defense?e-c._defense:void 0};c._health=c._health-function(e){return e<=n._defense?1:e>n._defense?e-n._defense:void 0}(t),s(c),n._health=n._health-i(e),I(n),X(i(t))}}else if(D){var h=Object(d.a)({},a),l=Object(d.a)({},D);if(h._health-t<=0)h._health=0,s(h);else if(l._health-e<=0)l._health=0,R(l);else{var j=function(e){return e<=h._defense?1:e>h._defense?e-h._defense:void 0};l._health=l._health-function(e){return e<=l._defense?1:e>l._defense?e-l._defense:void 0}(e),R(l),h._health=h._health-j(t),s(h),X(j(t))}}o(r-1)}(a._attack+a._special,H&&H._attack||D&&D._attack)},children:Object(l.jsx)("h2",{children:"Special Attack"})})]})}),Object(l.jsx)("div",{className:"Back_Button",onClick:function(){return t("Home"),s(""),i(0),void o(0)},children:Object(l.jsx)("h2",{children:"Quit Game"})})]})},y=a.p+"static/media/Mage.ad1c480e.gif",C=a.p+"static/media/Rouge.f49a7755.gif",P=a.p+"static/media/Knight.bbb32b24.gif",B=function(e){var t=e.changePage,a=e.resetPlayer,c=e.currentPlayer;return Object(l.jsxs)("div",{className:"ClassPage",children:[Object(l.jsx)("h1",{children:"Choose Your Class"}),Object(l.jsxs)("div",{className:"Player_Container",children:[Object(l.jsxs)("div",{className:"Mage",children:[Object(l.jsx)("img",{className:"Mage_Img",src:y,alt:"Mage Gif"}),Object(l.jsx)("div",{className:" ".concat(c&&"Mage"===c._classType?"Clicked":" "," Character_Button "),children:Object(l.jsx)("h2",{onClick:function(){return a("Mage")},children:"The Mage"})})]}),Object(l.jsxs)("div",{className:"Rouge",children:[Object(l.jsx)("img",{className:"Rouge_Img",src:C,alt:"Rouge Gif"}),Object(l.jsx)("div",{className:" ".concat(c&&"Rouge"===c._classType?"Clicked":" "," Character_Button "),children:Object(l.jsx)("h2",{onClick:function(){return a("Rouge")},children:"The Rouge"})})]}),Object(l.jsxs)("div",{className:"Knight",children:[Object(l.jsx)("img",{className:"Knight_Img",src:P,alt:"Knight Gif"}),Object(l.jsx)("div",{className:" ".concat(c&&"Knight"===c._classType?"Clicked":" "," Character_Button "),children:Object(l.jsx)("h2",{onClick:function(){return a("Knight")},children:"The Knight"})})]})]}),Object(l.jsxs)("div",{className:"Button_Container",children:[c&&Object(l.jsx)("div",{className:"Start_Game",onClick:function(){return t("Game")},children:Object(l.jsx)("h2",{children:"Start Game"})}),Object(l.jsx)("div",{className:"Back_Button",onClick:function(){return t("Home")},children:Object(l.jsx)("h2",{children:"Back"})})]})]})},T=a.p+"static/media/ShopKeeper.66f6a091.gif",w=function(e){var t=e.changePage,a=e.currentPlayer,c=e.setCurrentPlayer,s=e.setScore,n=e.specialAttackCount,i=e.setSpecialAttack;return Object(l.jsxs)("div",{className:"Shop_Page",children:[Object(l.jsxs)("div",{className:"Shop_Area",children:[Object(l.jsxs)("div",{className:"Player",children:[Object(l.jsxs)("div",{className:"Player_Stats",children:[Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Hp: ",a._health]})}),Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Atk: ",a._attack]})}),Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Def: ",a._defense]})}),Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Spd: ",a._speed]})}),Object(l.jsx)("div",{className:"Stats",children:Object(l.jsxs)("h4",{children:["Coins: ",a._coin," "]})})]}),Object(l.jsx)("div",{className:"Current_Player",children:Object(l.jsx)("img",{src:a._img,alt:""})})]}),Object(l.jsxs)("div",{className:"Shop_Items",children:[Object(l.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(d.a)({},a);e._coin>=5&&(e._coin-=5,e._health=e._maxHealth,c(e))}()},children:Object(l.jsx)("h3",{children:"Potion: 5 Coin"})}),Object(l.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(d.a)({},a);e._coin>=10&&(e._coin-=10,i(n+1),c(e))}()},children:Object(l.jsx)("h3",{children:"Special: 10 Coin"})}),Object(l.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(d.a)({},a);e._coin>=5&&(e._coin-=5,e._maxHealth+=1,c(e))}()},children:Object(l.jsx)("h3",{children:"Hp Boost: 5 Coin"})}),Object(l.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(d.a)({},a);e._coin>=5&&(e._coin-=5,e._attack+=1,c(e))}()},children:Object(l.jsx)("h3",{children:"Atk Boost: 5 Coin"})}),Object(l.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(d.a)({},a);e._coin>=5&&(e._coin-=5,e._defense+=1,c(e))}()},children:Object(l.jsx)("h3",{children:"Def Boost: 5 Coin"})}),Object(l.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(d.a)({},a);e._coin>=5&&(e._coin-=5,e._speed+=1,c(e))}()},children:Object(l.jsx)("h3",{children:"Spd Boost: 5 Coin"})}),Object(l.jsx)("div",{className:"Item",onClick:function(){return function(){var e=Object(d.a)({},a);e._coin>=5&&(e._coin-=5,e._special+=1,c(e))}()},children:Object(l.jsx)("h3",{children:"Spl Boost: 5 Coin"})})]}),Object(l.jsxs)("div",{className:"Shop_Keeper",children:[Object(l.jsx)("h3",{children:"Hello Explorer, Coin for My Wares?"}),Object(l.jsx)("img",{src:T,alt:"Shop Keeper",className:"ShopeKeeper_Img"})]})]}),Object(l.jsxs)("div",{className:"Button_Container",children:[Object(l.jsx)("div",{className:"Back_Button",onClick:function(){return t("Game")},children:Object(l.jsx)("h2",{children:"Back"})}),Object(l.jsx)("div",{className:"Back_Button",onClick:function(){return t("Home"),c(""),void s(0)},children:Object(l.jsx)("h2",{children:"Quit Game"})})]})]})},A=function(e){var t=e.changePage;return Object(l.jsxs)("div",{className:"How_To_Play_Page",children:[Object(l.jsx)("h1",{children:"How To Play"}),Object(l.jsxs)("div",{className:"Instructions_Container",children:[Object(l.jsx)("h2",{children:"Rules and Game Mechanics"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Player starts with a choice of class which has unique stats and weapon."}),Object(l.jsx)("li",{children:"The player then starts on the first floor of the Krypt and proceeds to fight enemys."}),Object(l.jsx)("li",{children:"After each floor the player has a choice to enter a shop to heal or increase their power."}),Object(l.jsx)("li",{children:"Purchasing items use coin which are earned from killing enemies."}),Object(l.jsx)("li",{children:"Battles are conducted in waves. You fight enemeis one at a time. The higher speed goes first."}),Object(l.jsx)("li",{children:"Player Loses the game if their hp falls to 0."}),Object(l.jsx)("li",{children:"Player Wins if they defeat 1 of 3 final boss."})]}),Object(l.jsx)("h2",{children:"Menu Interaction"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Start Game Button: Starts Game"}),Object(l.jsx)("li",{children:"Class selection Button: Mage, Rouge, and Warrior."}),Object(l.jsx)("li",{children:"Attack, Defend, or Dodge Buttons : Defend is for warior and mage class while dodge is for rouge class."}),Object(l.jsx)("li",{children:"Shop Interaction Buttons: For selecting items in a shop."}),Object(l.jsx)("li",{children:"Continue to Next floor interaction"})]})]}),Object(l.jsx)("div",{className:"Back_Button",onClick:function(){return t("Home")},children:Object(l.jsx)("h2",{children:"Back"})})]})};var H=function(){var e,t=Object(c.useState)(""),a=Object(h.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(),r=Object(h.a)(i,2),d=r[0],j=r[1],_=Object(c.useState)(0),f=Object(h.a)(_,2),b=f[0],m=f[1],O=Object(c.useState)(1),x=Object(h.a)(O,2),p=x[0],v=x[1],g=function(t){switch(t){case"Mage":e=new u(t,35,35,5,5,6,5,y,0),j(e),v(1);break;case"Rouge":e=new u(t,30,30,7,7,3,7,C,0),j(e),v(1);break;case"Knight":e=new u(t,45,45,7,3,7,7,P,0),j(e),v(1)}},k=function(e){n(e)};return Object(l.jsx)("div",{className:"Game_Container",children:Object(l.jsx)("div",{className:"Game_Space",children:function(){switch(s){case"Class":return Object(l.jsx)(B,{changePage:k,resetPlayer:g,currentPlayer:d});case"HowToPlay":return Object(l.jsx)(A,{changePage:k});case"Game":return Object(l.jsx)(N,{changePage:k,currentPlayer:d,setCurrentPlayer:j,score:b,setScore:m,specialAttackCount:p,setSpecialAttack:v});case"Shop":return Object(l.jsx)(w,{changePage:k,currentPlayer:d,setCurrentPlayer:j,specialAttackCount:p,setSpecialAttack:v});default:return Object(l.jsx)(o,{changePage:k})}}()})})};a(14);var I=function(){return Object(l.jsx)(H,{})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),K()}},[[15,1,2]]]);
//# sourceMappingURL=main.9012a176.chunk.js.map