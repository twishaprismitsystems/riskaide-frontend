import React, { useEffect, useState } from "react";
import ApiService from "@/services/ApiService";
import { useRouter } from "next/router";
import util from '@/utils/utils'

const Login = () => {

  const [state, setState] = useState({
    username: '',
    password: ''
  })
  const router = useRouter();
  
  const auth = async (e: any) => {
    e.preventDefault();
    try{
      if(state.username !== '' && state.password !== '' ){
        let data: any = await ApiService.userAuth(state.username, state.password)
        if(data && data.token){
          localStorage.setItem('riskaide_token', data.token);
          router.push('/admin');
        }else{
          util.showErrorMessage("something went wrong");
        }
      }
    }catch(e){
      util.showErrorMessage("Invalid Credential");
    }
  }

  useEffect(() => {
    checkUser();
  }, [])

  const checkUser = async () => {
    let token = localStorage.getItem('riskaide_token');
    try{
      if(token){
        let data: any = await ApiService.checkUser(token)
        if(!data.inValid){
          router.push('/admin')
        }
      }
    }catch(e){
      util.showErrorMessage("something went wrong" + e);
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-5">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-h3 font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={(event: any) => auth(event)}>
            <div>
              <label htmlFor="email" className="block text-h3 font-medium leading-6 text-gray-900 mb-5">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-h3 sm:leading-6"
                  value={state.username}
                  onChange={(e: any) => { setState( currentState => ({ ...currentState, username: e.target.value }) ) }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="password" className="block text-h3 font-medium leading-6 text-gray-900 mb-5">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-h3 sm:leading-6"
                    value={state.password}
                    onChange={(e: any) => { setState( currentState => ({ ...currentState, password: e.target.value }) ) }}
                  />
                </div>
              </div>
              </div>

              <div className="text-h3">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600  px-3 py-2 text-h3 font-semibold leading-12 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-h3 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
  );
}

export default Login;