'use client';
import { ChevronUp } from 'lucide-react';
import Image from 'next/image';
import type { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useTheme } from 'next-themes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { auth } from '@clerk/nextjs/server';
import { SignOutButton, useAuth } from '@clerk/nextjs';

export function SidebarUserNav() {
  const { setTheme, theme } = useTheme();
  const session = useAuth()
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className=" h-10">
              <p>Menu</p>
              <ChevronUp className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            className="w-[--radix-popper-anchor-width] bg-white dark:bg-black text-black dark:text-white hover:bg-transparent hover:text-black hover:dark:text-white active:text-black active:dark:text-white focus:bg-transparent"
          >
            <DropdownMenuItem
              className="cursor-pointer bg-white dark:bg-black text-black dark:text-white hover:bg-transparent hover:text-black hover:dark:text-white active:text-black active:dark:text-white focus:bg-transparent focus:text-black focus:dark:text-white"
              onSelect={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='cursor-pointer focus:bg-transparent focus:text-black focus:dark:text-white'>
              <SignOutButton redirectUrl='/'/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
