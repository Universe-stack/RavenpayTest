import logo from '../../../assets/Logo.png'
import './Navbar.css'



const Navbar = () => {
  return (
    <section className='navbar'>
        <div className='navbar__inner'>
            <div className='navbar__inner__left'>
                <div className='navbar__logo'>
                    <img src={logo} alt='logo' className=''/>
                </div>
            </div>
            <div className=''>
                PROFILE
            </div>
        </div>
    </section>
  )
}

export default Navbar