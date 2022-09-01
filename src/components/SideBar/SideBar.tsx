import React, { ReactElement } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './SideBar.css'

const SideBar = (props: any): ReactElement => {
  return (
    <Menu className={'sidebar-menu'} {...props}>
      <a className="sidebar-menu-item" href="/">
        Home
      </a>
      <a className="sidebar-menu-item" href="/burgers">
        Burgers
      </a>
      <a className="sidebar-menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="sidebar-menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  )
}

export default SideBar
