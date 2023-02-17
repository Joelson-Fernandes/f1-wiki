import styled from 'styled-components';

export const Container = styled.div`
  width: 45%;
  margin: 10px 0;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Table = styled.table`
  width: 100%;
  height: 95%;
  border-bottom: 2px solid red;
  border-right: 2px solid red;
  border-bottom-right-radius: 15px;
  padding: 10px;
`;

export const Th = styled.th`
  color: ${(props) => props.theme.title};
  padding: 5px;
  border-bottom: 2px solid red;
`;

export const Tr = styled.tr`
  font-size: 14px;
  &:nth-child(odd) {
    background: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  &:nth-child(even) {
    background-color: ${(props) => props.theme.backgroundTable};
  }
`;

export const Td = styled.td`
  padding: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  color: ${(props) => props.theme.title};
`;
