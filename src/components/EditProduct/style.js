import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled(StyledDiv)`
  justify-content: center;
  width: 570px;
`;

export const StyledInputContainer = styled(StyledDiv)`
  margin-bottom: 10px;
  width: 100%;
`;

export const StyledInputLabel = styled.label`
  margin: 10px 20px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 20px;
  padding-left: 20px;
  border: 1px solid #ccc;
  border-radius: 50px;
`;

export const StyledSelect = styled.select`
  width: 104%;
  height: 25px;
  padding-left: 20px;
  border: 1px solid #ccc;
  border-radius: 50px;
`;

