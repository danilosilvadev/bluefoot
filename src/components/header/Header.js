import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './menu/Menu'
import cart from '../../assets/cart.png'
import logo from '../../assets/logo.png'
import logout from '../../assets/logout.png'
import search from '../../assets/search.png'
import logoMobile from '../../assets/logo-mobile.png'
import Cart from './cart/cart'
import './header_styles/header.css';

class Header extends Component {

  state = {
    styles: {
      cartActived: false,
      searchActived: false,
      mobileMenuActived: false
    },
  }

  hiddeSearch = () => {
    this.setState({ styles: { searchActived: false } })
    if (this.inputSearch) {
      this.inputSearch.value = '';
      this.inputSearch.style.width = '0';
    }
  }

  handleActivatedStyles = (prop, value) => {
    if (prop === 'searchActived') {
      this.setState({ styles: { [prop]: true } })
      this.inputSearch.focus();
      this.inputSearch.style.width = '20%';
    } else {
      this.setState({ styles: { [prop]: !value } })
    }
  }

  render() {
    const { styles: { cartActived, searchActived, mobileMenuActived } } = this.state

    return (
      <div className='div__header--background'>
        <section className='section__header'>
          <article className='article__header-welcome'>
            <div className='div__header--margin-border'>
              <strong>Bem vindo!</strong>
              <span>Já é cadastrado?</span>
            </div>
            <div className='div__header--margin-border'>
              <a href='#' className='a__header--margin-right'>Meus pedidos</a>
              <a href='#' className='a__attendance--color'>Central de atendimento</a>
            </div>
          </article>
          <article className='article__user-menu'>
            <section className='section__user-menu-mobile'>
              <div
                id="div__mobile-menu"
                className={mobileMenuActived ? 'change' : ''}
                onClick={() => (
                  this.handleActivatedStyles('mobileMenuActived', mobileMenuActived)
                )}
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
              <img src={logoMobile} className='img__logo-mobile' alt='logo mobile' />
              <img src={search} className='img__search-mobile' alt='search' />
            </section>
              <div
                className='div__search-menu'
                onClick={() => (
                  this.handleActivatedStyles('searchActived', searchActived)
                )}
                onBlur={this.hiddeSearch}
              >
                <img src={search} className='img__search' alt='search' />
                <SearchInput
                  type="search"
                  className='input__search'
                  placeholder="search"
                  rel="search"
                  innerRef={(input) => { this.inputSearch = input }}
                  searchstyle={searchActived}
                />
              </div>
              <article>
                <div className='div__logout--margin'>
                  <img src={logout} className='img__user-menu--size' alt='logout' />
                </div>
                <CartSection is_cart_actived={cartActived}>
                  <img
                    src={cart}
                    className='img__user-menu--size'
                    onClick={() => (
                      this.setState({ styles: { cartActived: !cartActived } })
                    )}
                    alt='cart'
                  />
                  <Cart cart={cartActived} />
                </CartSection>
              </article>
          </article>
          <img src={logo} className='img__logo' alt='logo' />
        </section>
        <div className='div__menu-wrapper'>
          <Menu />
        </div>
      </div>
    )
  }
}

const SearchInput = styled.input`
  visibility: ${props => props.searchstyle ? 'visible' : 'hidden'};
  opacity: ${props => props.searchstyle ? '1' : '0'};
  transition: width 0.3s ease-in-out
`
const CartSection = styled.section`
  background-color: ${props => props.is_cart_actived ? 'white' : '#1F1F1F'};
  padding: .7rem;
  margin-top: .3rem;
`

export default Header