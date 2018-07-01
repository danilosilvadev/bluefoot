import React from 'react'
import './menu_styles/menu.css';
import SubmenuHair from './submenu-hair/SubmenuHair'

const Menu = () => (
  <section>
    <article className='article__menu'>
      <nav className='nav__menu'>
        <a href='#'>ROSTO</a>

        <article className='article__cabelo-option'>

          <a href='#'>CABELO</a>
          <div className='div__submenu-cheat' />
          <div className='div__triangle' />
          <div className="submenu-hair" >
            <SubmenuHair />
          </div>

        </article>
        <a href='#'>CORPO E BANHO</a>
      </nav>

      <nav className='nav__menu'>
        <a href='#'>BARBA</a>
        <a href='#'>ACESSÓRIOS</a>
        <a href='#'>KITS E PRESENTES</a>
      </nav>
    </article>
  </section>
)

export default Menu