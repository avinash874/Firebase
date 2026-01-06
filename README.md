# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


* git add .
* git commit -m ""
* git push origin main

# 8. we are going to learn about Firebase Authentication and how we can get the information about currently logged-in users. We would be checking out firebase's onAuthStateChange method and get the information of the current user.

* onAuthStateChanged is a Firebase Authentication listener that detects changes in authentication state and provides the currently logged-in user object or null when logged out.

* onAuthStateChanged is a listener that:
* Automatically runs when the app loads
* Runs when a user logs in
* Runs when a user logs out
* Tells us who is currently authenticated

👉 This is the correct & official way to track login state in Firebase.

# 9. we are going to learn firebase could firestore and how to use cloud firestore with reactjs application.

* Cloud Firestore is a NoSQL, real-time database by Firebase.
* It’s fast, scalable, and commonly used with React / Next.js / Android / iOS apps.

* Stores data in Collections → Documents
* document -> data -> collection
* Real-time sync (auto updates UI)
* Offline support
* Serverless (no backend server needed)
* Strong security with rules
