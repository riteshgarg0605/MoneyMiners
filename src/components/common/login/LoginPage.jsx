import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit" onClick={() => (window.location = "/submit")}>
          submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
