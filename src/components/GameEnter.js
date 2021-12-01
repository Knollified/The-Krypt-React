import { useState } from 'react';
import {Home, Class, Game, HowToPlay, Shop} from '../Pages/';


function GameEnter() {
    const [page,setPage] = useState('')

    const changePage = (str)=>{
      setPage(str)
    }

    const pageToShow = ()=>{
      switch (page) {
        case 'Class':
          return <Class changePage={changePage}/>
        case 'HowToPlay':
          return <HowToPlay changePage={changePage}/>
        case 'Game':
          return <Game changePage={changePage}/>
        case 'Shop':
          return <Shop changePage={changePage}/>  
        default: 
        return <Home changePage={changePage} />
        
      }
    }

    return (
      <div className="Game_Container">
        <div className="Game_Space">
         {pageToShow()}
        </div>
      </div>
    );
  }

  export default GameEnter