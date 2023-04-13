// Write a function validCardthat takes a number as an argument and returns true for a valid number and false for an invalid number.

// validCard(1234567890123456); //should be false
// validCard(4408041234567893); //should be true
// validCard(38520000023237); //should be true
// validCard(4222222222222); //should be true
// Create A Luhn Algorithm Validator
// A user enters a credit card in your form
// If the Luhn Algorithm says its valid, show a message that the card is valid
// If the Luhn Algorith says its invalid show a message that it is not valid
// The Luhn Algo should be checking every time the state changes using the useEffect hook
import "./App.css";
import { useState, useEffect } from "react";

import Display from "./components/Display";
import Form from "./components/Form";

export default function App() {
  const [cardNum, setCardNum] = useState(null);

  const validCard = (nums) => {
    let sum = 0;
    //splitting the number into individual string elements in an array
    const newNum = nums.toString().split("");
    //reversing the split array, mapping each element then converting each element to a number
    const reversed = newNum.reverse().map(Number);
    //cycling through the whole array and multiplying the every second element by 2
    for (let i = 1; i < reversed.length; i += 2) {
      reversed[i] = reversed[i] * 2;
      if (reversed[i] > 9) {
        const smallArr = reversed[i].toString().split("").map(Number);
        smallArr.forEach((i) => {
          sum += i;
        });
      }
    }
    //adding the numbers less than or equal to 9 to the sum
    for (let i = 0; i < reversed.length; i++) {
      if (reversed[i] <= 9) {
        sum += reversed[i];
      }
    }
    //checking if the number is true or false
    console.log(sum);
    if (sum % 10 === 0) {
      setCardNum("card is Valid!");
    } else {
      setCardNum("Invalid Card Number");
    }
  };

  // useEffect(() => {
  //   validCard();
  // }, []);

  return (
    <div className="App">
      <h1>CREDIT CARD CHECKER</h1>
    
      <Form cardSearch={validCard} />
      <Display response={cardNum} />
    </div>
  );
}


