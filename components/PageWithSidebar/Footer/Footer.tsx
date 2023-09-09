import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

export type FooterProps = HTMLAttributes<HTMLElement>;

const Footer: FC<FooterProps> = ({ className, children, ...props }) => (
  <footer
    className={cn(
      atoms({
        bg: 'neutral50',
      }),
      className,
    )}
    {...props}
  >
    <div
      className={atoms({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '7xl',
        px: 2,
        py: { mobile: 1, desktop: 0 },
        mx: 'auto',
      })}
    >
      {children}
    </div>
  </footer>
);

export default Footer;
