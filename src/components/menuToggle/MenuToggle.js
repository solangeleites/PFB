import React from 'react'
import { MenuHamburger, Icon } from './MenuToggleStyles'
import { useContext } from 'react'
import { MenuContext } from '../../context/Context'


const MenuToggle = () => {

const ctx = useContext(MenuContext)


  return (
    <MenuHamburger onClick={ctx.toggleMenu}>
      <Icon clicked={ctx.isMenuOpen} />
    </MenuHamburger>
  )
}

export default MenuToggle