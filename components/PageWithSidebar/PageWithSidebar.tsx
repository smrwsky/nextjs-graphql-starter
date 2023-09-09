import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { MobileNavigation } from './MobileNavigation';
import { Sidebar } from './Sidebar';

export type PageWithSidebarProps = HTMLAttributes<HTMLElement>;

const PageWithSidebarBase: FC<PageWithSidebarProps> = ({
  className,
  children,
  ...props
}: PageWithSidebarProps) => (
  <div
    className={cn(
      atoms({
        display: 'flex',
        minHeight: 'screen',
        flexDirection: 'column',
        pb: { mobile: 12, desktop: 0 },
      }),
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export const PageWithSidebar = Object.assign(PageWithSidebarBase, {
  Content,
  Header,
  Sidebar,
  Footer,
  Main,
  MobileNavigation,
});
