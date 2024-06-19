import React from 'react';
import axios from 'axios';
function ContactForm(props) {
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        description: ''
    });
    const HandleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const HandleSubmit= (e) => {
        e.preventDefault(); 

        axios.post("http://127.0.0.1:8000/api/form", {
            name: form.name,
            email: form.email,
            description : form.description
        })
        .then((response)=>console.log(response))
    
    }
    return (
      <>
        <form onSubmit={HandleSubmit}>
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="NameInput"
                className="font-inter font-medium text-base text-primary"
              >
                {' '}
                Your Name
              </label>
              <input
                id="NameInput"
                className="py-4 px-5 rounded-md bg-background1 text-primary border-1"
                type="text"
                placeholder="Enter your name"
                name="name"
                value={form.name}
                onChange={HandleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="EmailInput"
                className="font-inter font-medium text-base text-primary"
              >
                {' '}
                Your E-mail
              </label>
              <input
                id="EmailInput"
                name="email"
                className="py-4 px-5 rounded-md bg-background1 text-primary border-1"
                type="text"
                placeholder="Enter your e-mail"
                value={form.email}
                onChange={HandleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="NameInput"
                className="font-inter font-medium text-base text-primary"
              >
                {' '}
                Tell me a bit more what you are looking for?
              </label>
              <textarea
                id="NameInput"
                className="py-4 px-5 rounded-md bg-background1 text-primary border-1"
                type="text"
                rows="4"
                cols="50"
                placeholder=""
                name="description"
                value={form.description}
                onChange={HandleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D] rounded-full md:px-7 text-xl font-medium md:py-3 px-4 py-1"
            >
              SUBMIT NOW
            </button>
          </div>
        </form>
      </>
    );
}

export default ContactForm;