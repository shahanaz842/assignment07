
import { Suspense, } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import CustomerTickets from './Components/CustomerTickets/CustomerTickets'
import StatusCard from './Components/StatusCard/StatusCard'
import { useState } from 'react'
import Footer from './Components/Footer/Footer'
 import { ToastContainer, toast } from 'react-toastify';


const fetchIssues = async () => {
  const res = await fetch('/ticket.json')
  return (res).json();
}
const fetchPromise = fetchIssues();

function App() {


  const [countProgress, setCountProgress] = useState([]);
  const [resolvedCount, setResolvedCount] = useState([])
 

  const handleStatusCard = (ticket) => {
    const newCount = [...countProgress, ticket]
    setCountProgress(newCount);
    
  }
 
  const handleTaskCard = (ticket)=>{
    // console.log(ticket)
  }
  
  const handleResolvedCard = (count) =>{
    const newResolvedCount = [...resolvedCount, count];
    setResolvedCount(newResolvedCount)
    console.log(newResolvedCount)
  }


  return (
    <>
      <Navbar></Navbar>

      <StatusCard countProgress={countProgress} resolvedCount={resolvedCount}></StatusCard>

      <Suspense fallback={<h2>Tickets are loading...</h2>}>
        <CustomerTickets handleTaskCard={handleTaskCard} countProgress={countProgress} handleStatusCard={handleStatusCard}
        handleResolvedCard={handleResolvedCard} resolvedCount={resolvedCount}
         fetchPromise={fetchPromise}></CustomerTickets>
      </Suspense>

      <Footer></Footer>

 <ToastContainer />
    </>
  )
}

export default App
