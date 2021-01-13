import React from "react";
import Navigation from "./Navigation";
import SaladMaker from "./SaladMaker";
import UserContext from "./User/User";

const user = {
  name: "User",
  favorites: ["avocado", "carrot"],
};

function App() {
  return (
    <UserContext.Provider value={user}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  );
}

export default App;
