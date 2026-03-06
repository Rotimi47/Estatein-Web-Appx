import React from 'react'
import Dropdown from "../Hooks/Dropdown";
import { useForm, Controller } from "react-hook-form";


const PropForm = () => {
      const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitting }
      } = useForm();
    
      const [submitted, setSubmitted] = React.useState(false);
    
       const onSubmit = async (data) => {
        console.log(data);
    
        setSubmitted(true);
       reset();
    
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
      };


  return (
    <div className='border border-neutral-800 py-5 px-5 rounded-lg flex flex-col gap-7 lg:py-20 lg:px-20'>
         {submitted && (
            <div className="bg-green-900/40 border border-green-700 text-green-300 text-sm p-3 rounded-md">
                Your message has been submitted successfully.
            </div>
        )} 
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className='flex flex-col gap-2.5'>
                <label htmlFor="username">First Name</label>
                <input id="username" type="text" placeholder='Enter First Name' 
                className='w-full flex-1 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-xs '
                {...register("firstName", {
              required: "First name is required"
            })}/>
                {errors.firstName && (
                    <p className="text-red-400 text-xs">
                    {errors.firstName.message}
                    </p>
                )}
            </div>

            <div className='flex flex-col gap-2.5'>
                <label htmlFor="username">Last Name</label>
                <input id="username" type="text" placeholder='Enter Last Name' 
                className='w-full flex-1 rounded-lg border border-neutral-700  bg-neutral-900 px-4 py-3 text-xs'
                {...register("lastName", {
              required: "Last name is required"
            })}/>
                {errors.lastName && (
                    <p className="text-red-400 text-xs">
                    {errors.lastName.message}
                    </p>
                )}
            </div>

            <div className='flex flex-col gap-2.5'>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder='Enter your Email' 
                className='w-full flex-1 rounded-lg border border-neutral-700  bg-neutral-900 px-4 py-3 text-xs'
                {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email"
              }
            })}/>
                {errors.email && (
                    <p className="text-red-400 text-xs">
                    {errors.email.message}
                    </p>
                )}
            </div>

            <div className='flex flex-col gap-2.5'>
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" placeholder='Enter Phone Number' 
                className='w-full flex-1 rounded-lg border border-neutral-700  bg-neutral-900 px-4 py-3 text-xs'
                {...register("phone", {
              required: "Phone number is required"
            })}/>
                {errors.phone && (
                    <p className="text-red-400 text-xs">
                    {errors.phone.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-2.5">
                <label>Preferred Location</label>

                <Controller
                    name="selectLocation"
                    control={control}
                    rules={{ required: "Please select a location" }}
                    render={({ field }) => 
                    <Dropdown
                        {...field}
                        placeholder="Select Location"
                        options={[
                        "Lagos Mainland",
                        "Victoria Island",
                        "Lekki Phase 1",
                        "Ikoyi",
                        "Abuja - Maitama",
                        ]}/>
                 }
                />
                {errors.selectLocation && (
                    <p className="text-red-400 text-xs">{errors.selectLocation.message}</p>
                )}
            </div>



            <div className='flex flex-col gap-2.5'>
                <label htmlFor="text">Property Type</label>
                <Controller
                    name="propertyType"
                    control={control}
                    rules={{ required: "Please select a Property" }}
                    render={({ field }) => (
                    <Dropdown
                        {...field}      
                        placeholder="Select Property Type"
                        options={[
                        "Duplex",
                        "Semi-Detached House",
                        "Detached House",
                        "Penthouse",
                        "Condominium (Condo)",
                    ]}/>
                )}
                />
                {errors.propertyType && (
                    <p className="text-red-400 text-xs">{errors.propertyType.message}</p>
                )}

            </div>

            <div className='flex flex-col gap-2.5'>
                <label htmlFor="text" >No. of Bathrooms</label>
                    <Controller
                        name="bathrooms"
                        control={control}
                        rules={{ required: "Please select a no. of Bathrooms" }}
                        render={({ field }) => (
                    <Dropdown
                        {...field}
                        placeholder="Select no. of Bathrooms"
                        options={[
                        "1 - 2 Bathrooms",
                        "3 Bathrooms",
                        "4 Bathrooms",
                        "5+ Bathrooms",
                        ]}/>
                    )}
                />
                {errors.bathrooms && (
                    <p className="text-red-400 text-xs">{errors.bathrooms.message}</p>
                )}

                
            </div>

            <div className='flex flex-col gap-2.5'>
                <label htmlFor="text">No. of Bedrooms</label>
                    <Controller
                        name="bedrooms"
                        control={control}
                        rules={{ required: "Please select a no. of Bedrooms" }}
                        render={({ field }) => (
                    <Dropdown
                        {...field}
                        placeholder="Select no. of Bedrooms"
                        options={[
                        "1 - 2 Bedrooms",
                        "3 Bedrooms",
                        "4 Bedrooms",
                        "5+ Bedrooms",
                        ]}/>
                     )}
                />
                    
                {errors.bedrooms && (
                    <p className="text-red-400 text-xs">{errors.bedrooms.message}</p>
                )}
               
            </div>

            <div className='flex flex-col gap-2.5'>
                <label htmlFor="text">Budget</label>
                <Controller
                        name="budgets"
                        control={control}
                        rules={{ required: "Please select a Budget" }}
                        render={({ field }) => (
                    <Dropdown
                        {...field}
                        placeholder="Select Budget"
                        options={[
                        "₦50M - ₦100M",
                        "₦100M - ₦250M",
                        "₦250M - ₦500M",
                        "₦500M+",
                    ]}/>
                )}
                />   
                {errors.budgets && (
                    <p className="text-red-400 text-xs">{errors.budgets.message}</p>
                )}
               
            </div>

             <div className='flex flex-col gap-2.5'>
                <label htmlFor="text">Preferred Contact Method</label>
                <Controller
                        name="contactMethod"
                        control={control}
                        rules={{ required: "Select preffered Contact Method" }}
                        render={({ field }) => (
                    <Dropdown
                            {...field}
                            placeholder="Contact Method"
                            options={[
                            "Email",
                            "Text Message",
                            "Phone Call",
                    ]}/>
                 )}
                />  
                {errors.contactmethod && (
                    <p className="text-red-400 text-xs">{errors.contactMethod.message}</p>
                )}

                
            </div> 

            <div className='flex flex-col gap-2.5 lg:col-span-3'>
                 <label htmlFor="message" >Message</label>
                <textarea id="message"  rows="5" placeholder='Enter your Message here.' 
                className='w-full flex-1 rounded-lg border border-neutral-700  bg-neutral-900 px-4 py-3 text-xs'
                {...register("message", {
              required: "Message cannot be empty"
            })}/>
            {errors.message && (
                <p className="text-red-400 text-xs">
                {errors.message.message}
                </p>
            )}
            </div>
       
            <div className='flex w-full lg:col-span-3 flex-col gap-5 lg:flex-row lg:justify-between lg:items-center'> 

                <div className="flex items-start gap-2">
                    <input
                        id="terms"
                        type="checkbox"
                        className="mt-1 h-4 w-4 accent-neutral-900"
                        {...register("terms", { required: "You must agree to the terms" })}
                    />

                    <label htmlFor="terms" className="text-sm text-neutral-300">
                        I agree with{" "}
                        <a
                        href="/terms"
                        className="underline text-white hover:text-neutral-200"
                        >
                        Terms of Use and Privacy Policy
                        </a>
                    </label>
                
                </div>
                {errors.terms && <p className="text-red-400 text-xs">{errors.terms.message}</p>}


                <div>
                    <button 
                    type="submit"
                    disabled={isSubmitting}
                    className='w-full lg:w-45 text-sm py-3.5 px-5 bg-[#703BF7] rounded-md text-white transition-all duration-300 ease-in-out hover:bg-linear-to-r hover:from-[#7C4DFF] hover:to-[#9B6BFF] hover:shadow-lg hover:shadow-[#703BF7]/50 hover:-translate-y-0.5 hover:scale-[1.03]'>
                        {isSubmitting ? "Sending..." : "Send Your Message"}
                    </button>
                </div>

             </div>
        </form>
    </div>
  )
}

export default PropForm;