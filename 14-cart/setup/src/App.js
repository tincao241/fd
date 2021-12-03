import React from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar />
      {/* <CartContainer /> */}
      <iframe width="500" height="300" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/1.embed"></iframe>
      <iframe width="500" height="300" frameborder="0" scrolling="no" src="//plotly.com/~tincao241/1.embed"></iframe>




    </main>

  )
}

export default App
