import logo from '@public/Logo/logo.svg'
import { Avatar } from 'primereact/avatar'
import { FC } from 'react'

import styles from './Navbar.module.scss'

import itemNav from './data'

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__navContainer">
        <div className="flex justify-center items-center mt-5">
          <img src={logo} width="245px" />
        </div>
        <div className="flex items-center gap-5 mt-5 ">
          <Avatar label="АК" size="large" shape="circle" />
          <p className="text-lg">Андрей Куропаткин</p>
        </div>
        <div className="mt-10">
          {itemNav.map(el => {
            return (
              <a href={el.href} className={styles.navbar__button}>
                {el.icons && <el.icons size={24} />}
                <span>{el.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
