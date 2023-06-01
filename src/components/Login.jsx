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
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={inputName}
            onChange={(event) => {
              setInputName(event.target.value);
            }}
          />
        </label>
        <button type="submit" value="Submit" onClick={handleSubmit}>
          Log In
        </button>
      </form>
    </main>
  );
}

export default Login;
