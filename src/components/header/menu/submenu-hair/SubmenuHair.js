import React from 'react'
import './submenu_styles/submenu-hair.css';
import product from '../../../../assets/product.png'

const SubmenuHair = () => (
  <div style={{ display: 'flex' }}>
    <div className='div__submenu'>
      <div className='span__submenu-title'>CABELO</div>
      <section className='section__submenu'>
        <article>
          <a href="#">LOERM IPSUM</a>
          <a href="#">LOERM IPSUM</a>
          <a href="#">LOERM IPSUM</a>
          <a href="#">LOERM IPSUM</a>
          <a href="#">LOERM IPSUM</a>
        </article>
        <article>
          <a href="#">LOERM IPSUM</a>
          <a href="#">LOERM IPSUM</a>
          <a href="#">LOERM IPSUM</a>
          <a href="#">LOERM IPSUM</a>
          <a href="#">LOERM IPSUM</a>
        </article>
        <article>
          <a href="#">LOERM IPSUM</a>
          <a href="#">LOERM IPSUM</a>
          <a href="#">LOERM IPSUM</a>
          <a href="#">LOERM IPSUM</a>
          <a href="#">LOERM IPSUM</a>
        </article>
      </section>
      <a href='#' className='div__go-to-header'>IR PARA CABEÇALHO</a>
    </div>
    <img src={product} alt='product'/>
  </div>
);

export default SubmenuHair