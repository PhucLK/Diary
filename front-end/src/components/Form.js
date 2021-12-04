import React from "react";
import "../css/Form.css";

export default function form() {
  return (
    <section className="form-section">
      <form className="form">
        <textarea
          type="text"
          value=""
          placeholder="How's  your  day?"
          className="content"
          defaultValue={""}
        />
        <button type="submit" className="btn">
          Journal
        </button>
      </form>
    </section>
  );
}
