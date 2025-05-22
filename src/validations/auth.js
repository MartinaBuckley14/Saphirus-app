export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(emailInput)
}
export const isValidPassword = (input) => {
    const regex = /.{6,}/
    return regex.test(input)
}