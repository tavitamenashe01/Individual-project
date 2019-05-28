import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { StickyContainer, Sticky } from 'react-sticky';

import "./styles/Header.css";
import "./styles/var.css";

class Header extends Component {
  render() {
    const active = {
      // borderBottom: "3px solid var(--main-color)",
      color: "var(--main-color)"
    };
    return (

      <StickyContainer>
      {/* Other elements can be in between `StickyContainer` and `Sticky`,
      but certain styles can break the positioning logic used. */}
      <Sticky>
        {({
          style,

          // the following are also available but unused in this example
          isSticky,
          wasSticky,
          distanceFromTop,
          distanceFromBottom,
          calculatedHeight
        }) => (
          // <header>
           <div className="container">
        <div className="Header row">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
       
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                    <li class="nav-item">
              <NavLink
                exact
                class="nav-link link headerLinks  "
                activeStyle={active}
                to="/"
              >Главная</NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                exact
                class="nav-link"
                activeStyle={active}
                to="/"
              >Верховая езда</NavLink>
            </li>
            <li class="nav-item">
            <NavLink
                exact
                class="nav-link"
                activeStyle={active}
                to="/"
              >Цены</NavLink>
            </li>
            <li class="nav-item">
            <NavLink
                exact
                class="nav-link link headerLinks  "
                activeStyle={active}
                to="/"
              >Расписание</NavLink>
            </li>
            <li class="nav-item">
            <NavLink
                exact
                class="nav-link"
                activeStyle={active}
                to="/"
              >Новости</NavLink>
            </li>
            <li class="nav-item">
            <NavLink
                exact
                class="nav-link"
                activeStyle={active}
                to="/AboutUs"
              >О нас</NavLink>
            </li>

                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle link text-white"
                    to="/"
                    id="navbarDropdown"
                    activeStyle={active}
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Еще
                  </Link>
                  <div class="dropdown-menu headerDropDown">
                    <NavLink class="dropdown-item link headerDropItem" to="/">
                      О нас
                    </NavLink>
                    <NavLink class="dropdown-item link headerDropItem" to="/">
                      Услуги
                    </NavLink>
                    <NavLink class="dropdown-item link headerDropItem" to="/">
                      Наши кони
                    </NavLink>
                    <NavLink class="dropdown-item link headerDropItem" to="/">
                      Наши тренера
                    </NavLink>
                    <NavLink class="dropdown-item link headerDropItem" to="/">
                      Отзывы
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
            {/* ... */}
          {/* </header>   */}
           </div>
      </div>
        )}
      </Sticky>
      {/* ... */}
    </StickyContainer>
     
        
     
    );
  }
}

export default Header;
