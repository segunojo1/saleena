'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import MobileView from './MobileView';
import useIsMobile from '../hooks/useIsMobile';

interface MobileRestrictionWrapperProps {
  children: ReactNode;
}

export default function MobileRestrictionWrapper({ children }: MobileRestrictionWrapperProps) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const isLandingPage = pathname === '/';
  console.log(isMobile, isLandingPage);
  

  // If it's a mobile device and not on the landing page, show the restriction
  if (isMobile && isLandingPage) {
    return <MobileView />;
  }

  // Otherwise, render the children
  return <>{children}</>;
}
