import envImport from "../envImport/envImport.js"

import { Client, ID, Databases, Storage, Query } from "appwrite"


export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(envImport.appwriteUrl)
            .setProject(envImport.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }


    // create post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                envImport.appwriteDatabaseId,
                envImport.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }


    //updatepost

    async updatePost(slug, { title, content, featuredImage, status, }) {
        try {
            return await this.databases.updateDocument(
                envImport.appwriteDatabaseId,
                envImport.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error

        }
    }

    //deletepost

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                envImport.appwriteDatabaseId,
                envImport.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }


    //getpost

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                envImport.appwriteDatabaseId,
                envImport.appwriteCollectionId,
                slug
            )

        } catch (error) {
            throw error
            return false
        }
    }

    //queryy 

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                envImport.appwriteDatabaseId,
                envImport.appwriteCollectionId,
                queries
            )

        } catch (error) {
            throw error
            return false
        }
    }


    //file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                envImport.appwriteBucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            throw error
            return false
        }

    }

    // file delete

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                envImport.appwriteBucketId,
                fileId
            )
            return true

        } catch (error) {
            throw error
            return false
        }
    }


    //file preview

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            envImport.appwriteBucketId,
            fileId
        )
    }

}


const service = new Service

export default service