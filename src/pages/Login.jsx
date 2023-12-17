import React from 'react'


const Login = () => {
    return (
        <div className='h-full w-full'>
            <div className='border-solid border-2 border-indigo-600 flex justify-center justify-items-center align-items-center bg-orange-200 h-full'>
                <div className='w-[25%] border-solid border-3 border-indigo-600'>
                    <h2 className='text-4xl font-bold ml-[180px]'>Login</h2>
                    <form>
                        <div className='mt-9 flex'>
                            <label className='font-semibold text-xl'>Name:</label>
                            <input type='text' className='border-solid border-2 border-indigo-600 ml-9 w-full h-9 bg-gray-100' />
                        </div>
                        <div className='mt-9 flex'>
                            <label className='font-semibold text-xl'>Email:</label>
                            <input type='text' className='border-solid border-2 border-indigo-600 ml-10 w-full h-9 bg-gray-100' />
                        </div>
                        <div className='mt-9 flex'>
                            <label className='font-semibold text-xl'>Password:</label>
                            <input type='password' className='border-solod border-2 border-indigo-600 ml-1 w-full h-9 bg-gray-100' />
                        </div>
                        <div className='border h-10 w-33 pl-[180px] pt-[5px] bg-orange-600 text-white rounded-full mt-9 font-semibold text-xl cursor-pointer'>
                            <button>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
