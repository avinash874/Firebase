import React from 'react'
import { getFirestore,
    collection, 
    addDoc,
    doc, 
    getDoc,
    query,
    where,
    getDocs,
    updateDoc,
} from "firebase/firestore"
import { app } from "./firebase"

const firestore = getFirestore(app);


const Appp = () => {

    // Add data
    const writeData = async () => {
       const result = await addDoc(collection(firestore, "cities") ,{
            name: "Delhi",
            pinCode: "1234",
            lat: "123",
            long: "456",
        });
        console.log('result',result);  
    };

    const makeSubcollection = async () => {
        await addDoc(collection(firestore, "cities/vT3yrssGK56x7hnQ1mA5/places"),{
            name: "This a place2",
            desc: "Awsm Desc",
            date: Date.now(),
        })
    };

//    Read data
      const getDocument = async () => {
        const ref = doc(firestore, "cities/vT3yrssGK56x7hnQ1mA5");
        const snap = await getDoc(ref);

        console.log(snap);
      }

    //   Firestore Queries:
    const getDocumentByQuery = async () => {
        const collenctionRef = collection(firestore, "users");
        const q = query(collenctionRef, where("isMale", "==", true));
        const snapshot = await getDocs(q);
        snapshot.forEach((data) => console.log(data.data()));
    };

    // updatate data
    const update = async () => {
        const docRef = doc(firestore, "cities", "vT3yrssGK56x7hnQ1mA5");
        await updateDoc(docRef, {
            name: "New Delhi",
        })
    }


  return (
    <div className='App'>
        <h1>firebase Firestore</h1> 
        <button onClick={writeData}>Put Data</button>
        <br /><br />
        <button onClick={makeSubcollection}>Put Subdata</button>
        <br /> <br />
        <button onClick={getDocument}>Get Doc</button>
        <button onClick={getDocumentByQuery}>Get Document By Query</button>
        <button onClick={update}>Update Data</button>
    </div>
  )
}

export default Appp
