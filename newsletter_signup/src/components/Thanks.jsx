import React from 'react'

const Thanks = (props) => {
  console.log(props.form)

  return (
    <div className=" flex justify-center items-center min-h-screen bg-dark-grey font-roboto max-md:w-full max-md:bg-white-own ">
    <div className='flex justify-center items-center p-7  bg-white-own px-7 rounded-[11px] flex-col w-{100px} '>
      <img src='images/icon-success.svg' className='mr-auto w-11'></img>
      <h1 className=' text-dark-grey font-bold text-[2.3rem] mr-auto mt-5 leading-10 mb-6'>Thanks for <br />subscribing!</h1>
      <p className='text-dark-grey pb-8 font-normal'> A confirmation email has been sent to <br /> <span className='font-bold'> {props.form.email}</span>.
        Please open it and click <br /> the button inside to confirm your subscription.</p>
        <button className=' bg-charcoal-grey w-[305px] h-14 text-white-own font-semibold rounded-lg hover:bg-tomato mb-7 max-md:mt-[180px]' type='submit' onClick={props.onDismiss} >Dismiss Messsage</button>
    </div>
    </div>
  )
}

export default Thanks