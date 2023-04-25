import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface PixelContainerProps {
  background: string;
}
const PixelContainer: React.FC<PropsWithChildren<PixelContainerProps>> = ({
  children,
  background,
}) => {
  return <Container background={background}>{children} </Container>;
};

const Container = styled.div<PixelContainerProps>`
  background: ${(props) => props.background};
  border-style: solid;
  border-radius: 20px;
  border-width: 4px;
  border-color: #000;
  border-image-slice: 4;
  border-image-width: 2;
  border-image-outset: 0;
  border-image-source: url("data:image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12'><path d='M2 2h2v2H2zM4 0h2v2H4zM10 4h2v2h-2zM0 4h2v2H0zM6 0h2v2H6zM8 2h2v2H8zM8 8h2v2H8zM6 10h2v2H6zM0 6h2v2H0zM10 6h2v2h-2zM4 10h2v2H4zM2 8h2v2H2z' fill='%23000'/></svg>");
`;

export default PixelContainer;
