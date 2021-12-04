import React from "react";
import "../css/Auth.css";

export default function Login() {
  return (
    <section className="auth-container">
      <form action className="auth-form">
        <h1>Enter Your Account</h1>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit" className="btn auth">
          Login
        </button>
      </form>
    </section>
  );
}
