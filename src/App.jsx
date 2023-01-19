import React, { useState } from "react";
import CustomInput from "./components/CustomInput";

function App() {
  const [method, setmethod] = useState(true);
  const [obj, setObj] = useState({ name: "", email: "" });

  const handleStorage = (e) => {
    e.preventDefault();
    const objStorage = JSON.stringify(obj);
    if (method) {
      sessionStorage.setItem("obj", objStorage);
    } else {
      localStorage.setItem("obj", objStorage);
    }
  };

  return (
    <>
      <div className="title">
        <h1>{method ? "Session" : "Local"} Storage </h1>
        <p
          onClick={() => {
            setmethod(!method);
            localStorage.removeItem("obj");
            sessionStorage.removeItem("obj");
          }}
        >
          Change
        </p>
      </div>
      <form onSubmit={handleStorage}>
        <CustomInput
          type="text"
          placeholder="Name"
          onChange={(e) => setObj({ ...obj, name: e.target.value })}
          value={obj.name}
        />
        <CustomInput
          type="email"
          placeholder="Email"
          onChange={(e) => setObj({ ...obj, email: e.target.value })}
          value={obj.email}
        />
        <button>Check</button>
      </form>
    </>
  );
}

export default App;
