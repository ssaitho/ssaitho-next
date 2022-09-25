import React, { FC } from 'react'
import Profile from '@/components/Profile/profile'
import Tab from '@/components/Tab/tab'

type Props = {
  children?: React.ReactNode
}

const mainClass = 'm-auto max-w-[672px] px-8 pt-16'

const Layout: FC<Props> = ({ children }) => {
  return (
    <main className={mainClass}>
      <section className='mb-14'>
        <Profile />
      </section>
      <section>
        <Tab />
        {children}
      </section>
    </main>
  )
}

export default Layout
