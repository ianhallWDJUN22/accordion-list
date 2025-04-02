import { useState } from 'react'
import './App.css'
import AccordianList from './Components/AccordionList'

function App() {
  const [listData, setListData] = useState([
    {
      id: 1,
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces."
    },
    {
      id: 2,
      title: "What is a component?",
      content: "Components are the building blocks of a React application."
    },
    {
      id: 3,
      title: "What is state?",
      content: "State is a built-in object that stores property values that belong to a component."
    },
    {
      id: 4,
      title: "What is a prop?",
      content: "Props are inputs to components used to pass data and event handlers."
    },
    {
      id: 5,
      title: "What is JSX?",
      content: "JSX is a syntax extension for JavaScript that looks similar to HTML."
    }
  ])
  const [expandedItem, setExpandedItem] = useState(null) 
  
  function toggleShow(id) {
    setExpandedItem(prev => (prev === id ? null : id))
  }

  return (
    <>
    <h1>Accordian List</h1>
    <div className="list-container">
      <AccordianList listData={listData} toggleShow={toggleShow} expandedItem={expandedItem} />
    </div>
    </>
  )
}

export default App
