'use client';

import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export type HeaderProps = HTMLAttributes<HTMLElement>;

const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className, children, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        atoms({
          position: 'sticky',
          top: 0,
          bg: 'white',
          boxShadow: 'md',
          zIndex: 20,
        }),
        className,
      )}
      {...props}
    >
      <div
        className={atoms({
          display: 'flex',
          flexDirection: 'column',
          width: 'full',
          maxWidth: '7xl',
          px: 4,
          py: { mobile: 2.5, desktop: 0 },
          mx: 'auto',
        })}
      >
        {children}
      </div>
    </header>
  ),
);

Header.displayName = 'Header';

export default Header;
