import { object, ref, string } from "yup";

export const signUpSchema = object().shape({
    email: string()
    .required('Ingrese un email')
    .email('Ingrese un email válido'),

    password: string()
    .required('Cree una contraseña')
    .min(6, 'La contraseña debe tener mínimo 6 caracteres'),

    confirmPassword: string()
    .oneOf([ref("password"), null], 'Debe ingresar la misma contraseña')
    .required('Confirme su contraseña para continuar')
})

export const signInSchema = object().shape({
    email: string()
    .required('Ingrese su email')
    .email('Ingrese un email válido'),
    password: string()
    .required('Ingrese su contraseña')
    .min(6, 'La contraseña debe tener mínimo 6 caracteres')
})