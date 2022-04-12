
import Header from './Header';

import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props): JSX.Element => (
  <>
    <Header />
    {children}
   </>
)

export default Layout
