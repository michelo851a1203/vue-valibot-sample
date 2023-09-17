import * as v from 'valibot'
import { toTypedSchema } from '@vee-validate/valibot'
import { useForm, useField } from 'vee-validate'

export const loginSchema = v.object({
  email: v.string([
    v.email('is not email format'),
    v.endsWith('@gmail.com', 'email must be gmail'),
    v.minLength(1, 'email is required'),
  ]),
  password: v.string([
    v.minLength(1, 'password is required'),
    v.minLength(8, 'password at least 8 characters'),
    v.regex(/[a-z]/, 'password at least 1 lowercase'),
    v.regex(/[A-Z]/, 'password at least 1 lowercase'),
    v.regex(/[0-9]/, 'password at least 1 number'),
  ]),
});

export type LoginSchema = v.Input<typeof loginSchema>;

export const useLogin = (
  submitAction: (input: LoginSchema) => void,
) => {
  const validationSchema = toTypedSchema(loginSchema);
  const initialValues: LoginSchema = {
    email: '',
    password: '',
  }

  const { 
    handleSubmit, 
    errors,
  } = useForm<LoginSchema>({
    validationSchema,
    initialValues,
  });

  const { value: email } = useField<string>('email');
  const { value: password } = useField<string>('password');

  const loginSubmit = handleSubmit((values) => {
    submitAction(values);
  });

  return {
    email,
    password,
    errors,
    loginSubmit,
  }
}
