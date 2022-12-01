import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const form = useRef();

  const sendEmail = (e) => { 
    e.preventDefault();

    emailjs.sendForm("service_4ljfg7q","template_051qr0d", form.current, 'dsznMuj64w_Rk8BNe')
      .then((result) => {
        toast.success("Your message has been sent!");
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

  return (
    <div className="container">
      <h2 className="bg-white text-center py-3 mt-3">REQUEST</h2>
      <div className="container bg-white my-3 py-4 border border-grey">
          <p className="text-center fs-6 py-3 px-2">
            Hi Everyone, You can Request any Series or Movie through below form,
            Thanks for Visiting 🙂
          </p>
        <div className="text-center">
        </div>
        <form ref={form} onSubmit={sendEmail} className="mx-auto px-3 pb-3 fs-6">
        <ToastContainer style={{fontSize:"17px",width:"auto",margin:"0 auto"}}/>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              Your Email <span className="fs-6">(required)</span>
            </label>
            <input
              type="email"
              className="form-control"
              name="user_email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="movie_name" className="form-label">
              Movie or Anime Name <span className="fs-6">(required)</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="movie_name"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              name="message"
              rows="8"
            ></textarea>
          </div>
          <button
            type="submit"
            className="s-btn bg-primary text-white fs-6 px-3 py-2 border-0 rounded-pill"
            value="Send"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
