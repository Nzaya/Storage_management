'use server';

// To use node-appwrite sdk
// (To make sure all our services work on the server side) 

// Create an appwrite client
import { Account, Avatars, Client, Databases, Storage } from "node-appwrite"
import { appwriteConfig } from "./config"
import { cookies } from "next/headers"

// Creating a session client so that it will be linked to a specific user session letting users access their data
export const createSessionClient = async () => {
    // client will be used to initialize instances and services like databases and accounts etc in the same appwrite project
    const client = new Client()
        .setEndpoint(appwriteConfig.endpointUrl)
        .setProject(appwriteConfig.projectId)

        const session = (await cookies()).get('appwrite-session');

        if(!session || !session.value) throw new Error('No session');

        client.setSession(session.value);

        return {
            get account() {
                return new Account(client)
            },
            get databases() {
                return new Databases(client);
            },
        };
};


//  Creating a client instance with admin level permissions to manage our entire appwrite project
// To be used only on the server to create users, manage databases etec anything requiring high level access
export const createAdminClient = async () => {
      const client = new Client()
        .setEndpoint(appwriteConfig.endpointUrl)
        .setProject(appwriteConfig.projectId)
        .setKey(appwriteConfig.secretKey)

        return {
            get account() {
                return new Account(client)
            },
            get databases() {
                return new Databases(client);
            },
            get storage() {
                return new Storage(client);
            },
            get avatars() {
                return new Avatars(client);
            }
        };

}