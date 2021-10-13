import headerStyles from '../styles/header.module.css'

const Header = () =>{
    return (
       <div>
           <h1 className={headerStyles.title}>
               <span>WebDev</span> News
           </h1>
           <p className={headerStyles.description}>
               keep up with the date with latest technologies
           </p>
       </div>
    )
}

export default Header