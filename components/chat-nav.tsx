import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const ChatNav = () => {
    const { setTheme, theme } = useTheme();
  return (
    <div className='p-4 flex justify-between'>
        <Link
        href="/"
        className="font-bold text-xl flex items-center lg:w-1/4 gap-3 ml-2 text-black dark:text-white"
      >
       <div className=" text-white bg-orange-600 rounded ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23" className="w-8 h-8 fill-current">
          <path d="M12 19.1642L18.2071 12.9571L16.7929 11.5429L12 16.3358L7.20712 11.5429L5.79291 12.9571L12 19.1642ZM12 13.5143L18.2071 7.30722L16.7929 5.89301L12 10.6859L7.20712 5.89301L5.79291 7.30722L12 13.5143Z"></path>
        </svg>
      </div>

        Valor AI
      </Link>

      <div className="flex mx-12 gap-3 items-center text-black dark:text-white">
            <div>
              <Button className="bg-transparent hover:bg-transparent"
                onClick={()=>{
                  setTheme(() => theme == 'light' ? 'dark':'light')
                }}
              >
                {theme == 'light' ? <Moon className="w-32" color="#000" size={44} />:<Sun className="w-32" size={44} />}
                
              </Button>
            </div>
            
            <SignedIn>
                <div className="flex gap-3 items-center">
                     <UserButton />
                     <SignOutButton />
                </div>
            </SignedIn>

            <SignedOut>
                <SignInButton  />
            </SignedOut>
      </div>
    </div>
  )
}

export default ChatNav