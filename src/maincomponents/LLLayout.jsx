// import React from 'react'

import Footer from "./Footer"
import Navbar from "./Navbar"

const LLLayout = ({children}) => {
  return (
    <div>
<Navbar/>
<main>{children}</main>

<Footer/>

    </div>
  )
}

export default LLLayout