import { Link } from "react-router-dom"
import './Header.scss';

import logo from '../../img/logo.svg';
import logoMobile from '../../img/logo-mobile.png';

export const Header = () => {
  return (
    <>
      <header className="header">
        <Link to='/' className="header__logo">
          <img src={logo} alt="logo of company" />
        </Link>
  
        <nav className="header__menu">
          <Link 
            to='/' 
            className="header__menu-link"
          >
            каталог
          </Link>
  
          <Link 
            to='/' 
            className="header__menu-link"
          >
            о компании
          </Link>
          <Link 
            to='/' 
            className="header__menu-link"
          >
            правила
          </Link>
  
          <Link 
            to='/' 
            className="header__menu-link"
          >
            новости
          </Link>
  
          <Link 
            to='/' 
            className="header__menu-link"
          >
            контакты
          </Link>
        </nav>
  
        <ul className="header__indicators">
          <li className="header__indicator header__indicator--star"></li>
          <li className="header__indicator header__indicator--compare"></li>
          <li className="header__indicator header__indicator--cart"></li>
          <li className="header__indicator header__indicator--search"></li>
          <li className="header__indicator header__indicator--user"></li>
        </ul>
      </header>

      <header className="header__mobile nav-mobile">
        <ul className="nav-mobile__indicators">
          <li className="nav-mobile__star"></li>
          <li className="nav-mobile__compare"></li>
          <li className="nav-mobile__cart"></li>
        </ul>

        <Link to="/" className="nav-mobile__logo">
          <img src={logoMobile} alt="logo" />
        </Link>

        <nav className="nav-mobile__menu">
          <li className="nav-mobile__item nav-mobile__item--search"></li>
          <li className="nav-mobile__item nav-mobile__item--lock"></li>
          <li className="nav-mobile__item nav-mobile__item--burger"></li>
        </nav>
      </header>

      <header className="header-bg">
        <div className="header-bg__circle"></div>

        <h1 className="header-bg__title">
          <span className="header-bg__title-part">
            <span className="header-bg__rental-word">Аренда</span>
            <span className="header-bg__photo-word">фото</span>
          </span>
          <span className="header-bg__title-part header-bg__title-part--video">
            и видео
          </span>
          <span className="header-bg__title-part">оборудования</span>
        </h1>
      </header>
    </>
  )
}