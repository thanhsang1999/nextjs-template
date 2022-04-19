import { KeyedMutator } from "swr";

interface PayloadLogin {
	username: string;
	password: string;
}

interface Profile {
	username: string;
	city: string;
	email: string;
}
interface IUseAuth {
	profile: any;
	error: any;
	login: Function;
	logout: Function;
	getProfile: Function;
	firstLoading: boolean;
}
export type {PayloadLogin, IUseAuth};
