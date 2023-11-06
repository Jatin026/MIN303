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

import { useHistory } from "react-router-dom"

import styles from "./Dashboard.module.css";





const Stocks = () => {

  const [ file , setFile ] = useState() ;

  function handleFile(event){
    setFile(event.target.files[0]);
  }

  const history = useHistory();

  function handleUpload(){
    const formData = new FormData();
    formData.append('file',file);
    fetch(
      'url',
      {
        method:"POST",
        body:formData
      }
    )
    
    history.push("/");

  }

  return (
    <>
     <form onSubmit={handleUpload}>
      <input type="file" name="file" onChange={handleFile}/>
      <button> Upload </button>
     </form>
    </>
  );
};

export default Stocks;
