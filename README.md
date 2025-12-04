#  Introduction
This project is a full-featured cloud storage and file-sharing platform, built to function much like a modern, lightweight version of Google Drive. It enables users to effortlessly upload, organize, preview, and share files in a clean, intuitive interface.

Powered by Next.js 15 and the Appwrite Node SDK, the system takes advantage of the latest server-side capabilities, optimized routing, and secure backend integration. Users can manage their personal file library with features such as folder organization, secure access control, real-time updates, and link-based file sharing.

The platform is designed to be fast, responsive, and scalable—providing a smooth user experience across devices while maintaining secure and efficient file storage operations. Whether for personal use or team collaboration, this system offers a reliable and modern solution for managing files online.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React 19
- Next.js 15
- Appwrite
- TailwindCSS
- ShadCN
- TypeScript

## <a name="features">🔋 Features</a>

👉 **User Authentication with Appwrite**: Implement signup, login, and logout functionality using Appwrite's authentication system.

👉 **FIle Uploads**: Effortlessly upload a variety of file types, including documents, images, videos, and audio, ensuring all your important data.

👉 **View and Manage Files**: Users can browse through their uploaded files stored in Appwrite storage, view on a new tab, rename file or delete.

👉 **Download Files**: Users can download their uploaded files giving them instant access to essential documents.

👉 **File Sharing**: Users can easily share their uploaded files with others, enabling collaboration and easy access to important content.

👉 **Dashboard**: Gain insights at a glance with a dynamic dashboard that showcases total and consumed storage, recent uploads, and a summary of files grouped by type.

👉 **Global Search**: Users can quickly find files and shared content across the platform with a robust global search feature.

👉 **Sorting Options**: Organize files efficiently by sorting them by date, name, or size, making file management a breeze.

👉 **Modern Responsive Design**: A fresh and minimalist UI that emphasizes usability, ensuring a clean aesthetic across all devices.

and many more, including the latest **React 19**, **Next.js 15** and **Appwrite** features alongside code architecture and
reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""
```

Replace the values with your actual Appwrite credentials. You can obtain these credentials by signing up &
creating a new project on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.


## <a name="application-preview">📷 Application Preview</a>

Here are the screenshots demonstrating how the platform works in action — from uploading and managing files to organizing folders and sharing content. These images provide an overview of the core functionality and interface design.


## Sign Up Page

![App Screenshot](https://github.com/Nzaya/Storage_management/blob/main/public/assets/images/sign_up.png?raw=true)

## Dashboard Page

![App Screenshot](https://github.com/Nzaya/Storage_management/blob/main/public/assets/images/dashboard.png?raw=true)


## Side Menu

![App Screenshot](https://github.com/Nzaya/Storage_management/blob/main/public/assets/images/Sidemenu.png?raw=true)

## Side Menu

![App Screenshot](https://github.com/Nzaya/Storage_management/blob/main/public/assets/images/actions_dropdown.png?raw=true)