import styled from 'styled-components';

const Button = styled.button`
  font-size: ${({ theme, isSmall }) => (isSmall ? theme.fontSize.xs : theme.fontSize.s)};
  line-height: 1;
  padding: 0.5em 1.25em;
  color: ${({ theme }) => theme.buttonTextColor};
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  border: none;
  border-radius: 99999px;
  cursor: pointer;
`;

export default Button;
