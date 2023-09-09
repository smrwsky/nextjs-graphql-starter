import { FC, HTMLAttributes } from 'react';

import { Box } from '@/lib/seed-ui';

export type ContentProps = HTMLAttributes<HTMLElement>;

const Content: FC<ContentProps> = ({ className, children }) => (
  <Box
    className={className}
    px={{ desktop: 3 }}
    width={{ mobile: 'full', desktop: '2/3' }}
  >
    {children}
  </Box>
);

export default Content;
