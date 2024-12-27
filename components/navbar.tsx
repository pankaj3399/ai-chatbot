"use client";

import {
  HelpCircle,
  Home,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Moon,
  Sun,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";



interface RouteProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Testimonials",
    icon: <MessageSquare className="h-5 w-5 mr-2" />,
  },
  {
    href: "#team",
    label: "Team",
    icon: <Users className="h-5 w-5 mr-2" />,
  },
  {
    href: "#contact",
    label: "Contact",
    icon: <Home className="h-5 w-5 mr-2" />,
  },
  {
    href: "#faq",
    label: "FAQ",
    icon: <HelpCircle className="h-5 w-5 mr-2" />,
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];




export  function Navbar  ({dontShowNav}:{
  dontShowNav?: boolean
})  {
  const { setTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" fixed shadow-inner dark:text-white text-black dark:bg-[#161412] bg-white  w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto   z-40 rounded-2xl flex justify-between items-center p-2 ">
      {/* Logo - Always on the far left */}
      <Link
        href="/"
        className="font-bold text-xl flex items-center  lg:w-1/4 gap-3 ml-2"
      >
       <div className=" text-white bg-orange-600 rounded ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23" className="w-8 h-8 fill-current">
          <path d="M12 19.1642L18.2071 12.9571L16.7929 11.5429L12 16.3358L7.20712 11.5429L5.79291 12.9571L12 19.1642ZM12 13.5143L18.2071 7.30722L16.7929 5.89301L12 10.6859L7.20712 5.89301L5.79291 7.30722L12 13.5143Z"></path>
        </svg>
      </div>

        Valor AI
      </Link>

      {/* Desktop Navigation - Center */}
      {
        !!!dontShowNav && <NavigationMenu className="hidden xl:block flex-1">
        <NavigationMenuList>
          {/* Features Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-white dark:bg-[#161412] hover:bg-gray-100 dark:hover:bg-[#1c1917] text-base text-gray-900 dark:text-gray-100">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4 bg-white dark:bg-[#161412] rounded-md shadow-md">
                <Image
                  src="/api/placeholder/600/600"
                  alt="Feature Preview"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-gray-100 dark:hover:bg-[#1c1917] bg-gray-50 dark:bg-[#161412] text-gray-900 dark:text-gray-100"
                    >
                      <p className="mb-1 font-semibold leading-none text-gray-900 dark:text-gray-100">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-gray-600 dark:text-gray-400">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
      
          {/* Navigation Links */}
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link
                  href={href}
                  className="text-base px-2 text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      }


      <div className="hidden xl:flex mx-12 gap-3 items-center">
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

      <div className="xl:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer mr-2"
              />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex flex-col justify-between rounded-tl-2xl rounded-bl-2xl bg-card border-secondary"
            >
              <div>
              <SheetHeader className="mb-6 ml-4">
                  <SheetTitle className="flex items-center">
                    <Link href="/" className="flex items-center text-xl">
                      <div className="mr-2">
                        <svg
                          fill="none"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                        >
                          <path
                            d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z"
                            clipRule="evenodd"
                            fill="#666"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                      Valor AI
                    </Link>
                  </SheetTitle>
                </SheetHeader>


                <div className="flex flex-col gap-2">
                  
                  
                        <Button
                          onClick={() => setIsOpen(false)}
                          asChild
                          variant="ghost"
                          className="justify-start text-base"
                        >
                          <Link
                            href="/home"
                            className="flex items-center gap-2"
                          >
                            <LayoutDashboard className="h-5 w-5 mr-2" />
                            Home
                          </Link>
                        </Button>

                        <SignedIn>
                        <Button
                          onClick={() => setIsOpen(false)}
                          asChild
                          variant="ghost"
                          className="justify-start text-base"
                        >
                            <SignOutButton />
                          
                        </Button>
                          </SignedIn>

                        <SignedOut>
                        <Button
                          onClick={() => setIsOpen(false)}
                          asChild
                          variant="ghost"
                          className="justify-start text-base"
                        >
                            <SignInButton  />
                          
                        </Button>
                          </SignedOut>
                        
                      
                    
                </div>
              </div>

              <div>
                <Separator className="mb-2" />
                <SheetFooter className="mt-auto w-full">
                  <div className="flex flex-col gap-2 w-full">
                    
                      <div>
                        <Button
                          variant="ghost"
                          className="w-full flex justify-start px-3"
                          asChild
                          onClick={() => setIsOpen(false)}
                        >
                          <SignedIn>
                            <UserButton />
                          </SignedIn>
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full flex justify-start"
                          asChild
                        >
                        </Button>
                        <Separator />
                        
                      </div>
                  
                  </div>
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        </div>
     
    </header>
  );
};

export default Navbar;