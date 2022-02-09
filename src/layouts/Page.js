import React from 'react'
import Helmet from 'react-helmet'
import useMobileMenu from '../hooks/useMobileMenu'
import NavBar from '../components/NavBar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function PageLayout({ children }) {
  const [mobileMenuIsVisible, setMobileMenu] = useMobileMenu(768);

  return (
    <div>
      <Helmet>
        <title>Smartz Bookkeeping & Accounts</title>
        <meta name='description' content="Get in touch with Smartz Bookkeeping & Accounts so that they can help manage your accounts for you." />
      </Helmet>
      <NavBar isActive={mobileMenuIsVisible} toggleNavbar={() => setMobileMenu((curVal) => !curVal)} />
      <div className='z-10'>
        {children}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default PageLayout