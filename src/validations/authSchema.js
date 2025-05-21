import { object, ref, string } from "yup";

export const signUpSchema = object().shape({
    email: string().required('Ingrese un mail').email('Ingrese un email valido'),
    password: string().required('Cree una comtraseña').min(4, 'La contraseña debe ser de mini 4 caracteres'),
    confirmPassword: string().oneOf([ref("password"), null], 'Debe ingresar la misma contraseña').required('Confirme su contraseña para continuar')
})