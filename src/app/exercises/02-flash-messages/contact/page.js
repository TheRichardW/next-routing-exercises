"use client";
import React from "react";
import { ToastContext } from "../../../../components/ToastProvider";
import { useRouter } from "next/navigation";

function ContactPage() {
  const router = useRouter();
  const { createToast } = React.useContext(ToastContext);
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  function handleSubmit() {
    createToast("Thanks for contacting us!", "success");

    setName("");
    setMessage("");
    router.push("/exercises/02-flash-messages/");
  }

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
