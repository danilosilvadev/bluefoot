import React from 'react'
import styled from 'styled-components'
import './cart_styles/cart.css'
import mock from '../../../mock.js'
import currencyValidator from '../../../util/currencyValidation'

const handleCartList = (mock) => mock.cart.map(list => (
  <article key={list.id} className='article__product-list'>
    <div>{list.name}</div>
    <div>{currencyValidator(list.price)}</div>
  </article>
)
)

const Cart = ({ cart }) => (
  <CartWrapper cart={cart} className='CartWrapper'>
    {handleCartList(mock)}
    <div className='div__finish-cart-wrapper'>
      <section className='section__finish-cart'>
        <div>total</div>
        <div style={{ color: '#5A9711' }}>{currencyValidator(mock.cart.reduce((a, b) => a.price + b.price))}</div>
      </section>
      <a href='#' className='a__finish-button'>FINALIZAR COMPRA</a>
    </div>
  </CartWrapper>
)

const CartWrapper = styled.section`
  visibility: ${props => props.cart ? 'visible' : 'hidden'};
  opacity: ${props => props.cart ? '1' : '0'};
  right: 13.75rem;
  background-color: white;
`


export default Cart