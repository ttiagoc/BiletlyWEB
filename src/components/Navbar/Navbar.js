import React, {useState, useEffect} from 'react'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
 } from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import logo from '../../images/logo.png'


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);
    const [servicesClick, setServicesClick] = useState(false);
    const [productsClick, setProductsClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setProductsClick(false);
        setServicesClick(false);
    }
    const handleServicesClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(true);
    }
    const handleProductsClick = () => {
        setHomeClick(false);
        setProductsClick(true);
        setServicesClick(false);
    }

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }} >
            <Nav style={{backgroundColor:'#252525'}}>
                <NavbarContainer>
                    <NavLogo to='/' > 
                       <img src={logo} height={75} width={85} alt="LogoBiletly"></img>
                       <h3 style={{fontSize:35}}>Biletly</h3>
                    </NavLogo>
                    <HamburgerIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </HamburgerIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                                Home
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleServicesClick} servicesClick={servicesClick}>
                            <NavLinks to='/services' onClick={closeMobileMenu}>
                                About us
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleProductsClick} productsClick={productsClick}>
                            <NavLinks to='/Products' onClick={closeMobileMenu}>
                            Technologies
                            </NavLinks>
                        </NavItem>


                        
                        <NavItem onClick={handleProductsClick} productsClick={productsClick}>
                            <NavLinks to='/Products' onClick={closeMobileMenu}>
                            Contact
                            </NavLinks>
                        </NavItem>

                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar
