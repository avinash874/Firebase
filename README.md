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

* Cloud Firestore is a scalable NoSQL document database by Firebase that supports real-time synchronization, offline persistence, and powerful querying. Data is stored in collections and documents, and CRUD operations are performed securely using Firebase SDKs with rule-based access control.

* Cloud Firestore is a NoSQL, real-time database by Firebase.
* It’s fast, scalable, and commonly used with React / Next.js / Android / iOS apps.

* Stores data in Collections → Documents
* collection => document => collection => document  
* Real-time sync (auto updates UI)
* Offline support
* Serverless (no backend server needed)
* Strong security with rules

* Collection → Document → Fields
  * Collection → Group of documents (like a table)
  * Document → Single record (JSON-like object)
  * Field → Key–value pair

# Add / Write Data (Create)
Adding data means creating a new document inside a collection.
* Firestore can auto-generate document IDs
* Or you can set your own ID

* // Add data
   * const writeData = async () => {
    *    const result = await addDoc(collection(firestore, "cities") ,{
    *         name: "Delhi",
    *         pinCode: "1234",
    *         lat: "123",
    *         long: "456",
    *     });
    *     console.log('result',result);  
 *    };

    * const makeSubcollection = async () => {
        await addDoc(collection(firestore, "cities/vT3yrssGK56x7hnQ1mA5/* places"),{
     *        name: "This a place2",
     *        desc: "Awsm Desc",
      *       date: Date.now(),
    *     })
  *   };


# Read / Get Data
Reading data means fetching documents from Firestore.


  *  //    Read data
   *   const getDocument = async () => {
   *     const ref = doc(firestore, "cities/vT3yrssGK56x7hnQ1mA5");
    *    const snap = await getDoc(ref);* 
    *    console.log(snap);
    *  }



# Update Data
Updating data means modifying specific fields of a document.

 * // updatate data
 *   const update = async () => {
 *       const docRef = doc(firestore, "cities", "vT3yrssGK56x7hnQ1mA5");
 *       await updateDoc(docRef, {
 *           name: "New Delhi",
 *       })
 *   }



# Delete Data
Deleting removes a document completely.
# Simple Queries or Compound Queries
* A simple query uses one condition.
* A compound query uses multiple conditions.

* //   Firestore Queries:
 *    const getDocumentByQuery = async () => {
 *        const collenctionRef = collection(firestore, "users");
  *       const q = query(collenctionRef, where("isMale", "==", true));
  *       const snapshot = await getDocs(q);
  *       snapshot.forEach((data) => console.log(data.data()));
  *   };

