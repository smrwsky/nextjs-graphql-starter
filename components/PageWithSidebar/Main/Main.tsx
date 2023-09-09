import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import { Flex } from '@/lib/seed-ui';

export type MainProps = HTMLAttributes<HTMLElement>;

const Main: FC<MainProps> = ({ className, children, ...props }) => (
  <main
    className={cn(
      atoms({
        flex: 1,
        py: { mobile: 0, tablet: 4 },
      }),
      className,
    )}
    {...props}
  >
    <div
      className={atoms({
        position: 'relative',
        width: 'full',
        maxWidth: { tablet: '3xl', desktop: '5xl' },
        mx: 'auto',
        px: { tablet: 4, desktop: 6 },
      })}
    >
      <Flex justifyContent="center" mx={{ desktop: '-3' }}>
        {children}
      </Flex>
    </div>
  </main>
);

export default Main;
