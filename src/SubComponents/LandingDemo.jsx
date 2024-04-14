import React from "react";
import { initialValues } from './../assets/index';

const LandingDemo = () => {
    const [value,setValue]=React.useState(initialValues)
    const handleChange = (e)=>{
        const name = e.target.name
        const val = e.target.value
        setValue({...value,[name]:val})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(value)
    }
  return (
    <div className="landing-demo flex flex-col justify-center items-center px-5 py-20">
      <h1 className="text-white uppercase font-extralight text-lg md:text-xl lg:text-2xl">
        book a demo
      </h1>
      <p className="capitalize text-white text-sm font-light mt-6 md:text-md text-center lg:text-lg  md:w-3/5">
        We are excited to show you how our platform can add value to your
        business. Fill in the details below to schedule a demo tour with us.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 w-full justify-center items-center mt-8 mb-4"
      >
        {/* NAME */}
        <input
          type="text"
          name="name"
          id="name"
          value={value.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
          className="rounded-md px-2 border-2 focus:border-white w-[100%] md:w-[35%] placeholder:text-white placeholder:opacity-90 placeholder:font-light border-white text-white  bg-transparent "
        />
        {/* EMAIL */}
        <input
          type="text"
          name="email"
          id="email"
          value={value.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
          className="rounded-md px-2 border-2 focus:border-white w-[100%] md:w-[35%] placeholder:text-white placeholder:opacity-90 placeholder:font-light border-white text-white  bg-transparent "
        />
        {/* Submit */}
        <button
          type="submit"
          className="btn bg-white text-[#9b0808] w-[100%] md:w-[15%] hover:bg-[#9b0808] hover:text-white capitalize"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LandingDemo