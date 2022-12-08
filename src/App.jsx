import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown, faQ } from '@fortawesome/free-solid-svg-icons'

function App() {

  const clickHandler = () => {
    document.getElementById("right").classList.toggle("hidden")
    document.getElementById("down").classList.toggle("hidden")
    document.getElementById("ans").classList.toggle("hidden")
  }
  const clickHandler2 = () => {
    document.getElementById("right2").classList.toggle("hidden")
    document.getElementById("down2").classList.toggle("hidden")
    document.getElementById("ans2").classList.toggle("hidden")
  }
  const clickHandler3 = () => {
    document.getElementById("right3").classList.toggle("hidden")
    document.getElementById("down3").classList.toggle("hidden")
    document.getElementById("ans3").classList.toggle("hidden")
  }



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


  useEffect(() => {

    setFaq(FAQ.map(d => <div key={d.question}>{d.question}</div>))
    setAns(FAQ.map(d => <div key={d.question}>{d.answer}</div>))


  }, [])

  return (

    <div className="App">

      <h1>FAQ Components</h1>

      <div onClick={clickHandler} className='faq'>
        <div className='flex'>
          <span id='right' className='hidden icon'><FontAwesomeIcon icon={faAngleRight} /></span>
          <span id='down' className='icon' ><FontAwesomeIcon icon={faAngleDown} /></span>
          <span className='text'>{faq[0]}</span>
        </div>
        <span id='ans' className='a gray text'>{ans[0]}</span>
      </div>

      <div onClick={clickHandler2} className='faq'>
        <div className='flex'>
          <span id='right2' className='icon'><FontAwesomeIcon icon={faAngleRight} /></span>
          <span id='down2' className='hidden icon' ><FontAwesomeIcon icon={faAngleDown} /></span>
          <span className='text'>{faq[1]}</span>
        </div>
        <span id='ans2' className='hidden gray text'>{ans[1]}</span>
      </div>

      <div onClick={clickHandler3} className='faq'>
        <div className='flex'>
          <span id='right3' className='icon'><FontAwesomeIcon icon={faAngleRight} /></span>
          <span id='down3' className='hidden icon' ><FontAwesomeIcon icon={faAngleDown} /></span>
          <span className='text'>{faq[2]}</span>
        </div>
        <span id='ans3' className='hidden gray text'>{ans[2]}</span>
      </div>

    </div>
  );

}
export default App;
