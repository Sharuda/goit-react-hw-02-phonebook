import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  max-width: 100%;
  width: 300px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: rgb(78 216 217);
  padding: 5px;
  color: #000;
  cursor: pointer;
`;
