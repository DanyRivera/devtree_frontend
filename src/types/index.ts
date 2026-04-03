export type User = {
    handle: String,
    name: String,
    email: String,
    _id: string,
    description: string
}

export type RegisterForm = Pick<User, 'handle' | 'email' | 'name'> & {
    password: String
    password_confirmation: String
}

export type LoginForm = Pick<User, 'email'> & {
    password: string
}

export type ProfileForm = Pick<User, 'handle' | 'description'> 