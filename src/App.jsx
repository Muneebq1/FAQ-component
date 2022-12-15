import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown, faQ } from '@fortawesome/free-solid-svg-icons'

function App() {

  const FAQ = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
    },
  ];

  const [faq, setFaq] = useState([0]);
  const [ans, setAns] = useState([0]);
  const [toggle, setToggle] = useState(true)
  const [toggle2, setToggle2] = useState(true)
  const [toggle3, setToggle3] = useState(true)


  const clickHandler = () => {
    setToggle(!toggle)

  }
  const clickHandler2 = () => {
    setToggle2(!toggle2)

  }
  const clickHandler3 = () => {
    setToggle3(!toggle3)

  }
  useEffect(() => {

    setFaq(FAQ.map(d => <div key={d.question}>{d.question}</div>))
    setAns(FAQ.map(d => <div key={d.question}>{d.answer}</div>))


  }, [])

  return (

    <div className="App">

      <h1>FAQ Components</h1>

      <div onClick={clickHandler} className='faq'>
        <div className='flex'>
          <span  className={`${(toggle) ? "icon" : "hidden"}`} ><FontAwesomeIcon icon={faAngleDown} /></span>
          <span  className={`${(toggle) ? "hidden" : "icon"}`}><FontAwesomeIcon icon={faAngleRight} /></span>
          <span className='text'>{faq[0]}</span>
        </div>
        <span className={`${(toggle) ? "gray text" : "hidden"}`} >{ans[0]}</span>
      </div>

      <div onClick={clickHandler2} className='faq'>
        <div className='flex'>
          <span  className={`${(toggle2) ? "icon" : "hidden"}`} ><FontAwesomeIcon icon={faAngleRight} /></span>
          <span  className={`${(toggle2) ? "hidden" : "icon"}`} ><FontAwesomeIcon icon={faAngleDown} /></span>
          <span className='text'>{faq[1]}</span>
        </div>
        <span id='ans2' className={`${(toggle2) ? "hidden" : "gray text"}`}>{ans[1]}</span>
      </div>

      <div onClick={clickHandler3} className='faq'>
        <div className='flex'>
        <span  className={`${(toggle3) ? "icon" : "hidden"}`} ><FontAwesomeIcon icon={faAngleRight} /></span>
          <span  className={`${(toggle3) ? "hidden" : "icon"}`} ><FontAwesomeIcon icon={faAngleDown} /></span>
          <span className='text'>{faq[2]}</span>
        </div>
        <span  className={`${(toggle3) ? "hidden" : "gray text"}`}>{ans[2]}</span>
      </div>

    </div>
  );

}
export default App;
