import React , {useState , useEffect }from "react";

import { ConditionallyRender } from "react-util-kit";

import Header from "../../components/Header/Header";
import Subheader from "../../components/Subheader/Subheader";
import ExchangeList from "../../components/ExchangeList/ExchangeList";
import TopFiveDividendStocksList from "../../components/TopFiveDividendStocksList/TopFiveDividendStocksList";
import InfoCard from "../../components/InfoCard/InfoCard";
import StockList from "../../components/StockList/StockList";
import Layout from "../../components/Layout/Layout";

import { getTopFiveDividendStocks, getInfoCardData } from "./helpers";
import { Form } from "./form";

import { useHistory } from "react-router-dom"

import styles from "./Dashboard.module.css";

import logo from "./logo.png"




const Register = () => {

  const [ Email , setEmail ] = useState('');

  const [ PanNumber , setPanNumber ] = useState('');

  const [ toDate , settoDate ] = useState('');

  const [ fromDate , setfromDate ] = useState('');

  const [ password , setpassword ] = useState('');
  
  

  const handleEmailChange = (inputValue) => {
    setEmail(inputValue);
  } 
  
  const handlePanNumberChange = (inputValue) => {
    setPanNumber(inputValue);
  } 

  const handletoDateChange = (inputValue) => {
    settoDate(inputValue);
  } 

  const handlefromDateChange = (inputValue) => {
    setfromDate(inputValue);
  } 

  const handlepasswordChange = (inputValue) => {
    setpassword(inputValue);
  } 

  const history = useHistory();

  const handleFormSubmit = () => {
    fetch('/fetch_cas', {
        method: 'POST',
        body: JSON.stringify({
            email:Email,
            pan_no:PanNumber,
            from_date:fromDate,
            to_date:toDate,
            password:password
        })
    })

    history.push("/stocks");
}

  return (
    <>

    

    <Form email={Email} onEmailChange={handleEmailChange} 
          panNumber={PanNumber} onPanNumberChange={handlePanNumberChange}
          toDate={toDate} toDateChange={handletoDateChange}
          fromDate={fromDate} fromDateChange={handlefromDateChange}
          password={password} passwordChange={handlepasswordChange} handleFormSubmit={handleFormSubmit} />

    <center><img src={logo  }></img></center>
    </>
  );
};

export default Register;
