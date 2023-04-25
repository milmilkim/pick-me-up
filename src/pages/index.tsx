import styled from "styled-components";

export default function Home() {
  return (
    <StyledIndex>
      <div className='title'>
        <h1>My Next Project</h1>
      </div>
    </StyledIndex>
  );
}

const StyledIndex = styled.div`
padding: 5px;
  .title {
    color: #467b56;
    font-size: 32px;
  }
`