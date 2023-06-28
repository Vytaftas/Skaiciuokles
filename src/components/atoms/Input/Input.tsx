import { StyledInputWrapper, StyledInput } from './style';

interface IInputProps {
  type: 'number' | 'checkbox' | 'date' | 'radio';
}

const Input = ({ type }: IInputProps) => {
  return (
    <StyledInputWrapper>
      <StyledInput type={type} />
    </StyledInputWrapper>
  );
};

export default Input;