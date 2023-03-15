import { useState } from "react";

const Contact = () => {
 
    const[data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    })

    const formSubmit=(e)=>{
            e.preventDefault();
            alert(`Hey my name is ${data.fullname} , my Email is ${data.email} , My phone number is ${data.phone} & My msg is ${data.msg}`)
    }

    const InputEvent =(event)=>{

           const {name,value}=event.target;

           setData((preval)=>{
            return {
                ...preval,
                [name]: value,
            }
           })
    }
    return (
        <>
        <div className="container-fluid">
            <div className="my-5">
                <h1 className="text_service"> Contact Us </h1>
            </div>
        </div>

        <div className="container contact">
            <div className="row col-10 col-md-6 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="mobile number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>

              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
            </div>
        </div>
</>
    );
};

export default Contact;
