import styled from 'styled-components';
import Title from '@/scene/Title/Title';

export default function Home() {
  return (
    <StyledIndex>
      <div className="title">
        <Title />
      </div>
    </StyledIndex>
  );
}

const StyledIndex = styled.div``;
