export type User = {
    handle: String,
    name: String,
    email: String,
}

export type RegisterForm = Pick<User, 'handle' | 'email' | 'name'> & {
    password: String
    password_confirmation: String
}