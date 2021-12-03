import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
        <div>
          <a href="https://plotly.com/~tincao241/1/?share_key=1JTcZnzvRlNZN5gLc7J1jm" target="_blank" title="Test Graph" style="display: block; text-align: center;"><img src="https://plotly.com/~tincao241/1.png?share_key=1JTcZnzvRlNZN5gLc7J1jm" alt="Test Graph" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
          <script data-plotly="tincao241:1" sharekey-plotly="1JTcZnzvRlNZN5gLc7J1jm" src="https://plotly.com/embed.js" async></script>
      </div>
      </section>
      
  
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>$0.00</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => console.log('clear cart')}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
