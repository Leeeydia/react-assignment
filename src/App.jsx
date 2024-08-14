// import React from "react";
import React, { useState } from "react";
import "./App.css";

function App() {
const [countries, setCountries] = useState([])
const [countryInput, setCountryInput] = useState ("");
const [goldInput, setGoldInput] = useState (0);
const [silverInput, setSilverInput] = useState (0);
const [bronzeInput, setBronzeInput] = useState (0);

const checkExistance = () => {
  return countries.find((country) => {
    if (country.name.toLowerCase() === countryInput.toLowerCase()) {
      return true;
    } else { 
      return false; 
    }
  });
};

const addCountry = (event) => {
  event.preventDefault();
    if (checkExistance()){
      alert("이미 등록된 국가입니다")
    }else{
      const newCountry = {
        name : countryInput,
        gold : goldInput,
        silver : silverInput,
        bronze : bronzeInput,
      }
      setCountries([...countries, newCountry])
    }
    }

const updateCountries = () => {
  event.preventDefault();
 
    if(checkExistance()){
      setCountries(
        countries.map((country) => {
          if(country.name.toLowerCase() === countryInput.toLowerCase()){
            return{
              name : countryInput,
              gold : goldInput,
              silver : silverInput,
              bronze : bronzeInput,
            }
          }else{
            return country;
          }
        }
        )
      )
    } else {
      alert("등록되지 않은 국가입니다.")
    }
}

const deleteCountry = (name) => {
setCountries(countries.filter((country)=> {
  console.log(country.name.toLowerCase);
  if (country.name.toLowerCase() !== name){
    return country;
  }; 
  }))
  alert(`${name} 이 삭제되었습니다`)
}

  return (
    <div className="main-container">
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <form className="input-form" onSubmit={addCountry}>
        <div className="input-field">
          <label htmlFor="country">국가명</label>
          <input 
          id="country"
          onChange={(e)=> {
            setCountryInput(e.target.value);
          }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="gold">금메달</label>
          <input 
          id="gold"
          onChange={(e)=> {
            setGoldInput(e.target.value);
          }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="silver">은메달</label>
          <input 
          id="silver"
          onChange={(e)=> {
            setSilverInput(e.target.value);
          }}/>
        </div>
        <div className="input-field">
          <label htmlFor="bronze">동메달</label>
          <input 
          id="bronze"
          onChange={(e)=> {
            setBronzeInput(e.target.value);
          }}/>      
        </div>
        <div className="button-group">
          <button type="submit">추가하기</button>
          <button onClick={updateCountries}>업데이트</button>
        </div>
      </form>
      <div className="table-wrapper">
        <table>
          <thead>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
          </thead>
          <tbody>
            {countries.map((country) => {
          return (
             <tr>
            <td>{country.name}</td>
            <td>{country.gold}</td>
            <td>{country.silver}</td>
            <td>{country.bronze}</td>
            <td className="delete-btn" onClick={()=>{
              deleteCountry(country.name);
            }}>삭제</td>
          </tr>
          )
        })}
          </tbody>
          
        </table>
        
      </div>
    </div>
  );
}

export default App;