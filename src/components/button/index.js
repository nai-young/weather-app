import * as S from "./styled";

const Button = ({ children, type = "button", ...props }) => {
  return (
    <S.StyledButton type={type} {...props}>
      {children}
    </S.StyledButton>
  );
};

export default Button;