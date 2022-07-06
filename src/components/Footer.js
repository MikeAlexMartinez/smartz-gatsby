import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-100">
      <div className="container mx-auto flex flex-col items-center justify-center py-16 px-4 md:px-0 text-gray-600 font-light text-sm md:text-base">
        <p className="py-2">
          Copyright © Smartz Bookkeeping & Accounts {new Date().getFullYear()}. All Rights Reserved.
        </p>
        <p className="text-xs py-2">Company Registration No: 11799879. Registered Office: 108 Buckingham Road, Bicester, Oxfordshire, OX26 4EQ</p>
        <p className="text-xs py-2">Registered in England and Wales.</p>
      </div>
    </footer>
  )
}

export default Footer