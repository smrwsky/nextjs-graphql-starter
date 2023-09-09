import { atoms } from '@seed-ui/styles';
import React, { FC, HTMLAttributes } from 'react';

import { Box } from '@/lib/seed-ui';

export type SidebarProps = HTMLAttributes<HTMLElement>;

const Sidebar: FC<SidebarProps> = ({ className, children, ...props }) => (
  <Box
    className={className}
    display={{ mobile: 'none', desktop: 'block' }}
    px={{ desktop: 3 }}
    width="1/3"
    {...props}
  >
    <div
      className={atoms({
        position: 'sticky',
        top: 16,
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      {children}
    </div>
  </Box>
);

export default Sidebar;
