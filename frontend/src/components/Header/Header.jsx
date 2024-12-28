import React from 'react'
import { Container, Row, Button} from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
  import { Form } from 'react-router-dom'
  import logo from '../../assets/images/logo.png'
  import './Header.css'

  const nav__link = [
    {
      Path:'/home',
      display:'Home'
    },
    {
      Path:'/about',
      display:'About'
    }
    , {
      Path:'/tours',
      display:'Treks'
    }
    , {
      Path:'/contact',
      display:'Contact'
    }
    , {
      Path:'/blogs',
      display:'Blog'
    }
    , {
      Path:'/shop',
      display:'Shop'
    }

  ]

const Header = () => {
  return <header className="header">
    <Container>
      <Row>
        <div className="nav__wraper d-flex align-items-center justify-content-between">
          {/*======== logo ======= */}
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/*======== logo End======= */}
          {/*======== menu start======= */}
          <div className="navigation">
            <ul className="menu d-flex align-item-center gap-5">
              {
                  nav__link.map((item,index)=>(
                    <li className="nav__item" key={index}>
                    <NavLink to={item.Path} className={navClass => navClass.isActive? 'active__link': ''}>{item.display}</NavLink>
                    </li>
                  ))
              }
              <li></li>
            </ul>
          </div>
          {/*======== Menu End======= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <div className="nav__btns d-flex align-items-center gap-4">   
              <Button className="btn secondary__btn"><link to='/login'/>Login</Button>
              <Button className="btn primary__btn"><link to='/register'/>Register</Button>
            </div>
            <span className="mobile__menu">
            <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header
