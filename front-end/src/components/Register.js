import React from "react";
import "../css/Auth.css";

export default function Register() {
  return (
    <section className="auth-container">
      <form action className="auth-form">
        <h1>Create New Account</h1>
        <div className="error-message" />
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
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
          Register
        </button>
      </form>
    </section>
  );
}
