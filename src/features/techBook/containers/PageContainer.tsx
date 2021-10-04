import { FC } from 'react';
import styled from 'styled-components';

interface PageContainerProps {
  title: string;
}

const Wrap = styled.div`

`;

export const PageContainer: FC<PageContainerProps> = ({
  title,
  children,
}) => {
  return (
    <Wrap>
      <h2>{title}</h2>
      {children}
    </Wrap>
  );
};
