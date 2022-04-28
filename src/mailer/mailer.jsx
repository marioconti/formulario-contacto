import React from "react";
import emailjs from "emailjs-com";
import "./styles.css";

export const Mailer = () => {


  const sendEmail = (e) => {
    e.preventDefault();
    // params = 1 (count ID), 2 (template ID), 3 (input html), 4 user public ID
    emailjs
      .sendForm(
        "service_q62atj8",
        "template_glckpab",
        e.target,
        "JrxAzRUASIaM9fAmb"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
      e.target.reset()
  };

  return (
    <div className="container-form">
      <h1>Formulario contacto</h1>
      <form id="contact-form" className="container-form" onSubmit={sendEmail}>
        <label>Nombre y Apellido</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Ingresa Nombre y Apellido"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          required
          placeholder="Ingresa tu email"
        />

        <label>Mensaje</label>
        <textarea
          name="mensaje"
          cols="60"
          rows="10"
          required
          placeholder="Deja aquí tu mensaje"
        ></textarea>
        <input type="submit" value="Enviar" reset="true" />
      </form>
    </div>
  );
};
