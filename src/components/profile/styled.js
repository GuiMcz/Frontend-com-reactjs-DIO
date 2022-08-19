import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 30px auto 100px auto;
`;

export const WrapperImg = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: flex-start;
  justify-content: space-between;
  height: 200px;
  margin-left: 10px;
  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold:
  }
  h4 {
    font-size: 16px;
    font-weight: bold:
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin-right: 10px;
  }

  a {
    color: #00008b;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  div {
    text-align: center;
  }
`;
