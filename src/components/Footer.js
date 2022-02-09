import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-100">
      <div className="container mx-auto flex items-center justify-center py-16 px-4 md:px-0">
        <p className="text-gray-600 font-light text-sm md:text-base">
          Copyright © Smartz Bookkeeping & Accounts {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer