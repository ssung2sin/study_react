import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import OneApp from "./components/OneApp";
import TwoApp from "./components/TwoApp";
import FiveApp from "./components/FiveApp";
import ThreeApp from "./components/ThreeApp";
import FourApp from "./components/FourApp";
import SixApp from "./components/SixApp";
<<<<<<< HEAD
import SevenApp from "./components/SevenApp";
=======
>>>>>>> 15c9e18740b1590def59dd2a16165c6faf19e85e

function App() {

  const [index,setIndex]=useState(1);

  return (
    <div className="App">
      <b style={{marginLeft:'100px',fontSize:'20px'}}>컴포넌트 선택하기 : </b>

      <select onChange={(e)=>{
        setIndex(Number(e.target.value));
      }}>
        <option value='1'>OneApp확인하기</option>
        <option value='2'>TwoApp확인하기</option>
        <option value='3'>ThreeApp확인하기</option>
        <option value='4'>FourApp확인하기</option>
        <option value='5'>FiveApp확인하기</option>
        <option value='6'>SixApp확인하기</option>
<<<<<<< HEAD
          <option value='7'>SevenApp확인하기</option>
      </select>

      {index===1?<OneApp/>:index===2?<TwoApp/>:index===3?<ThreeApp/>:index===4?<FourApp/>:index===5?<FiveApp/>:index===6?<SixApp/>:<SevenApp/>}
=======
      </select>

      {index===1?<OneApp/>:index===2?<TwoApp/>:index===3?<ThreeApp/>:index===4?<FourApp/>:index===5?<FiveApp/>:<SixApp/>}
>>>>>>> 15c9e18740b1590def59dd2a16165c6faf19e85e

    </div>
  );
}

export default App;
