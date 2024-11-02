import { useEffect, useState } from 'react'

import './App.css'
import Service from './components/Blogs/Service';

function App() {

  const [card, setCard] = useState([]);

  useEffect(() => {
        fetch('/blogs.json')
         .then(res => res.json())
         .then(data => setCard(data))
  }, [])

console.log("form app",card)

  return (
    <>
   <div className='container mx-auto'>
   <div className='grid grid-cols-1 lg:grid-cols-3 gap-16'>
    {
      card.map(item => (
        <div key={item.id}>
          <div className='border-2 rounded-xl p-10 bg-red-500 text-white'>
            <img className='w-24 h-' src={item.image} alt="" />
            <h2>{item.name}</h2>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        
        </div>
      ))
    }
    </div>
    <Service/>
   </div>
     
    </>
  )
}

export default App
