import Link from 'next/link'
import navStyles from '../styles/nav.module.css'

const Nav = ({children}) => {
    return(
      <nav className={navStyles.nav}>
          <ul>
              <li>
                  <Link href= '/' >Home</Link>
              </li>
              <li>
                  <Link href= '/about' >About</Link>
              </li>
              <li>
                  <Link href= '/about' >Contact</Link>
              </li>
          </ul>
      </nav>
    )
}

export default Nav