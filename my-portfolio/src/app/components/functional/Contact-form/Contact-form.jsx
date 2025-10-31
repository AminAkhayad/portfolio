import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact-form.css";

function floatLabel(e) {
  const hasValue = e.currentTarget.value.trim().length > 0;
  e.currentTarget.parentElement.classList.toggle("filled", hasValue);
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvgwdlen");

  useEffect(() => {
    document.querySelectorAll(".contact-item input, .contact-item textarea").forEach((el) => {
      if (el.value.trim()) el.parentElement.classList.add("filled");
    });
  }, []);

  if (state.succeeded) return <p>Thanks for joining!</p>;

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-item">
        <input
          id="email"
          type="email"
          name="email"
          onInput={floatLabel}
          onBlur={floatLabel}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="email">Email Address</label>
      </div>

      <div className="contact-item">
        <textarea
          id="message"
          name="message"
          onInput={floatLabel}
          onBlur={floatLabel}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <label htmlFor="message">Bericht</label>
      </div>

      <button type="submit" disabled={state.submitting}>Submit</button>
    </form>
  );
}
