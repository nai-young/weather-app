import * as S from './styled'

const Input = ({
  name,
  type,
  placeholder,
  required = false,
  onChange = () => {},
}) => {
  return (
    <S.Label htmlFor={name}>
      <S.StyledInput
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
      <S.Placeholder>{placeholder}</S.Placeholder>
    </S.Label>
  );
};

export default Input;
