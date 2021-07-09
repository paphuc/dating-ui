export interface IUser {
	email: string
	password: string
}

export interface IRegisterUser {
	name: string
	email: string
	password: string
	retypePassword: string
}

export interface IConfig {
	Host: string
	Port: string
}
