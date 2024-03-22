import envImport from "../envImport/envImport.js"

import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client();
    account;


    constructor() {
        this.client
            .setEndpoint(envImport.appwriteUrl)
            .setProject(envImport.appwriteProjectId)
        this.account = new Account(this.client);

    }

    async createAcount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //jab create ho gaya hai account to login wala method call kar denge
                return this.login({ email, password });
            } else {
                return userAccount
            }

        } catch (error) {
            throw error
        }
    }


    // login 

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    // check karne ke leye ki app login ho ya nahi agar app home ya kissi page pe direct gaye to

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }

        return null
    }


    // logout

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService