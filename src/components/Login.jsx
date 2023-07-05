import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const [inputName, setInputName] = useState("");
  const { setUser } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    setUser(inputName);
  }

  return (
    <main>
      <form className="loginForm">
          <input
          className="loginInput"
            type="text"
            name="username"
            placeholder="Username..."
            value={inputName}
            onChange={(event) => {
              setInputName(event.target.value);
            }}
          />

        <button className="loginButton" type="submit" value="Submit" onClick={handleSubmit}>
          Log In
        </button>
      </form>
    </main>
  );
}

export default Login;
