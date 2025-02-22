import React from 'react'
import './global.css'
import Header from '@/components/Header'
import Tabs from '@/components/Tabs'
import Providers from './Providers'

const Layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Providers>
            <Header/>
            <Tabs/>
            {children}
          </Providers>
        </body>
    </html>
  )
}

export default Layout
