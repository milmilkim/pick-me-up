import pickmeup from '@/assets/images/background/pickmeup.gif';
import styled from 'styled-components';

const Title = () => {
  return (
    <StyledTitle>
      <div className="img-container">
        <img src={pickmeup.src} alt="타이틀 로고: pick me up" />
      </div>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  .img-container {
    width: 100%;
    height: 100vh;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export default Title;
