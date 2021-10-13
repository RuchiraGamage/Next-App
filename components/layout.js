import styles from '../styles/layout.module.css'
import Header from './header'
import Meta from './meta'
import Nav from './nav'

const Layout = ({children}) => {
    return(
        <>
        <Meta/>
        <Nav/>
        <div className={styles.container}>
            <div className={styles.main}>
                <Header/>
                {children}
            </div>
        </div>
        </>
    )
}

export default Layout