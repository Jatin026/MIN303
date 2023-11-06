import React from "react";
import Subheader from "../../components/Subheader/Subheader";
import Header from "../../components/Header/Header";
import styles from  "../../components/Header/Header.module.css";
export const Form = ( { email , onEmailChange , panNumber , onPanNumberChange , toDate , toDateChange , fromDate , fromDateChange , password , passwordChange , handleFormSubmit})=> {

    const handleEmailChangeState = (event) => {
        onEmailChange(event.target.value)
        } 
    const handlePanNumberChangeState = (event) => {
        onPanNumberChange(event.target.value)
    }
    const handletoDateChangeState = (event) => {
        toDateChange(event.target.value)
    }
    const handlefromDateChangeState = (event) => {
        fromDateChange(event.target.value)
    }
    const handlepasswordChangeState = (event) => {
        passwordChange(event.target.value)
    } 


    const handleSubmit = ( event) => {
        event.preventDefault() 
        handleFormSubmit();
    }

    
    return(
        <>

        <Header/>
        <Subheader>
            <form onSubmit={handleSubmit}>  
                <div className= {styles.container}>
                <h3>
                Email 
                <input type="text" required value = {email} onChange={handleEmailChangeState}></input>
                </h3>
                <h3>
                Pan Number 
                <input type="text" value = {panNumber} onChange={handlePanNumberChangeState}></input>
                </h3>
                <h3>
                From Date 
                <input type="text" value = {fromDate} onChange={handlefromDateChangeState}></input>
                </h3>
                <h3>
                To Date 
                <input type="text" value = {toDate} onChange={handletoDateChangeState}></input>
                </h3>
                <h3>
                Password 
                <input type="text" value = {password} onChange={handlepasswordChangeState}></input>
                </h3>

                </div>
                <input type="submit" id="input-field" className= {styles.container} ></input>
            </form>
        </Subheader>
        </>
    )
};

