import { FC, PropsWithChildren } from 'react'

import Navbar from '../elements/Navbar/Navbar'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="page">
        <div className="page__container"> {children}</div>
      </main>
    </>
  )
}

export default Layout
