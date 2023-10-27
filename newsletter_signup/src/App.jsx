import {useFormik} from 'formik'
import { signUpSchema } from './Schemas'
import { useState } from 'react'
import Thanks from './components/thanks'


 export default function App() {
  const [showThankMessage, setShowThankMessage] = useState(false)

  const initialValues = {
    email: ""
  }
  const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
    initialValues,
    validationSchema : signUpSchema,
    onSubmit: (values, actions) => {
      console.log(values)
      actions.resetForm()
      setShowThankMessage(true)
  
    }
  })
  const handleDismiss = ()=>{
    setShowThankMessage(false)
    resetForm()
  }
  const styleError = {
    color: errors.email ? "hsl(4, 100%, 67%)" : ""
    
  }
  const formStyle = {
    color: errors.email ? "hsl(4, 100%, 67%)" : "",
    border: errors.email && touched.email ?  "2px solid hsl(4, 100%, 67%)" : "",
    background: errors.email ? "hsl(4, 100%, 67%, 0.3) " : ""

  }



  
  return (
    <div className=" flex justify-center items-center min-h-screen bg-dark-grey font-roboto max-md:w-full ">
          { !showThankMessage ? (<div className='flex justify-center items-center p-5 bg-white-own px-2 rounded-3xl max-md:flex-col-reverse max-md:pt-0'>
        <div className='px-6 text-charcoal-grey max-md:px-8'>
           <h1 className='pb-6 text-charcoal-grey text-[37px] font-bold max-md:pt-6'>Stay updated !</h1>
           <p className='font-semibold pb-5'>Join 60,000+ product managers receiving monthly updates on: </p>
           <div className='flex items-center gap-3 pb-4 font-normal'>
            <img src="images/icon-list.svg" alt="icon-list" />
            <p className=' max-md:text-sm'>Product discovery and building what matters</p>
           </div>
           <div className='flex items-center gap-3 pb-5 font-normal'>
            <img src="images/icon-list.svg" alt="icon-list" />
            <p className=' max-md:text-sm'>Measuring to ensure updates are a success</p>
           </div>
           <div className='flex items-center gap-3 pb-5 font-normal'>
            <img src="images/icon-list.svg" alt="icon-list" />
            <p className=' max-md:text-sm'> And much more! </p>
           </div>

           <div className='flex items-center justify-between py-5'>
            <p className='font-semibold text-charcoal-grey'>Email Address</p>
            {touched.email && <p style={styleError} className=' font-bold text-sm'>{errors.email}</p>}
           </div> 
           <div>
             <form className='flex justify-center items-center flex-col gap-7' onSubmit={handleSubmit}>
               <input style={formStyle} className=' bg-white-own border-solid border-charcoal-grey border-[1.3px] rounded-md border-spacing-1.5 w-[350px] h-10 pl-3 text-charcoal-grey max-md:w-[320px]' type="email" placeholder={!touched.email ? 'email@company.com' : null} name='email'
                  value={values.email} onBlur={handleBlur} onChange={handleChange}/>
                  {console.log(values)}
                <button className=' bg-charcoal-grey w-[350px] h-12 text-white-own font-semibold rounded-md hover:bg-tomato max-md:w-[320px] max-md:mt-5' type='submit'>Subscribe to monthly newsletter</button>

             </form>
            </div>  
        </div>
        <div>
            <img src="images/illustration-sign-up-desktop.svg" alt="desktop-sign" className=' max-md:hidden' />
            <img src="images/illustration-sign-up-mobile.svg" alt="mobile-sign" className='max-md:block md:hidden w-full' />
        </div>
        
    </div>) :(<Thanks onDismiss = {handleDismiss} form = {values} />)
 }
    </div>
  )
}