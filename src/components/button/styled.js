import styled, { css } from "styled-components";

export const StyledButton = styled.button.attrs(({ outline, fontColor }) => ({
  backgroundColor: outline ? "transparent" : "#48484a",
  fontColor: fontColor ? "red" : "white",
}))`
  width: 100%;
  padding: 10px 20px;
  border-radius: 4rem;
  border: none;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  box-shadow: 0 6px 1.5px #7c7f82;
  :hover {
    background: #585a5b;
  }
  :active {
  background-color:  #585a5b;
  box-shadow: 0 3.5px 1.5px #65686b;
  transform: translateY(2px);
}
  ${(props) => {
    return (
      props.inverse &&
      css`
        background-color: #fff;
        color: #a1cdf1;
      `
    );
  }}
`;