import { getAuth,onAuthStateChanged,signOut } from "firebase/auth"
import { app } from "./firebase";

// import "./App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { useState } from "react";
import { useEffect } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //Yes, you are logged in
      if(user){
        setUser(user);
      }else{
        // User is signed out
        console.log("You are logged out");
        setUser(null);
        
      }
  });
},[]);

  if(user === null){
  return (
    <div className="App">
      <Signup />
      <Signin />
    </div>
  );
}
return(
  <div className="App">
    <h1>Hello {user.email}</h1>
    <button onClick={() => signOut(auth)}>Logout</button>
  </div>
)
};

export default App;
