import Head from 'next/head'
import Image from 'next/image'

import type { FC } from 'react'
import { LocationOnIcon } from '@/components/Icon'

const profileClass = 'w-full flex flex-col items-center'
const profileImageClass =
  'h-32 w-32 overflow-hidden rounded-full border border-gray-200 object-cover'
const profileTitleClass = 'my-4 text-2xl font-bold'
const locationClass = 'flex items-center text-gray-500 text-sm'

const Profile: FC = () => {
  return (
    <>
      <div className={profileClass}>
        <div className={profileImageClass}>
          <Image src={'/images/img_profile.jpg'} width={128} height={128} alt='profile image' />
        </div>
        <h1 className={profileTitleClass}>Shinsuke Saito</h1>
        <div className={locationClass}>
          <LocationOnIcon width={16} height={16} />
          <p>Tokyo</p>
        </div>
      </div>
    </>
  )
}

export default Profile
