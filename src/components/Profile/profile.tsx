import Image from 'next/image'
import React, { FC } from 'react'
import { LocationOnIcon } from '@/components/Icon'
import IconButton from '@/components/IconButton/IconButton'

const profileClass = 'w-full flex flex-col items-center'
const profileImageClass =
  'h-32 w-32 overflow-hidden rounded-full border border-gray-200 object-cover'
const profileTitleClass = 'font-montserrat my-4 text-2xl font-bold'
const locationClass = 'font-montserrat flex items-center text-gray-500 text-sm'

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
        <div className='mt-11 flex gap-8'>
          <a href='https://github.com/ssaitho' target='_blank' rel='noreferrer'>
            <IconButton variant='github' />
          </a>
          <a href='https://twitter.com/s_s_saito' target='_blank' rel='noreferrer'>
            <IconButton variant='twitter' />
          </a>
          <a href='https://qiita.com/ssaitho' target='_blank' rel='noreferrer'>
            <IconButton variant='qiita' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Profile
