import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

export type MobileNavigationProps = HTMLAttributes<HTMLElement>;

const MobileNavigation: FC<MobileNavigationProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      atoms({
        display: { mobile: 'block', desktop: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: 'full',
        borderTop: 'thin',
        borderColor: 'neutral100',
        zIndex: 20,
      }),
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export default MobileNavigation;
