import type { ComponentProps } from 'react';

import { type SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { SidebarLeftIcon } from './icons';
import { Button } from './ui/button';

export function SidebarToggle({
  className,
}: ComponentProps<typeof SidebarTrigger>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={toggleSidebar}
          variant="outline"
          className="md:px-2 md:h-fit bg-white dark:bg-black dark:border-black border-gray-200 text-black dark:text-white hover:dark:bg-black hover:bg-gray-200 hover:text-black hover:dark:text-white"
        >
          <SidebarLeftIcon size={16} />
        </Button>
      </TooltipTrigger>
      <TooltipContent align="start" className='bg-white dark:bg-black dark:border-black border-gray-200 text-black dark:text-white'>Toggle Sidebar</TooltipContent>
    </Tooltip>
  );
}
