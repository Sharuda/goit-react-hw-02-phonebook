import styled from '@emotion/styled';
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  max-width: 100%;
  width: 500px;
  border: 2px solid black;
  padding: 10px;
  border-radius: 5px;
`;

export const FieldFormik = styled(Field)`
  max-width: 100%;
  border-radius: 8px;

  font-size: 16px;
  padding-left: 8px;
  margin-top: 5px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;

  margin-top: 5px;
  margin-bottom: 25px;
`;

export const ErrorMessage = styled(FormikError)`
  max-width: 500px;
  font-style: italic;
  color: #9e0202;
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

export const StyledButton = styled.button`
  margin-top: 10px;
  max-width: 100%;
  outline: none;
  border-radius: 8px;
  cursor: pointer;

  background-color: rgb(78 216 217);

  padding: 8px 16px;
  display: block;
  margin: 0 auto;
`;
