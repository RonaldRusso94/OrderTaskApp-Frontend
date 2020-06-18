import { useState } from 'react';
import { setCookie } from "nookies";
import Link from 'next/link'
import Input from './common/Input';
import { LOGIN_MUTATION } from '../graphql/mutations/users';
import { useMutation } from '@apollo/react-hooks';
import { withApollo } from '../lib/apollo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [login, { loading: mutationLoading }] = useMutation(LOGIN_MUTATION);


  return (
    <div>
      {/* <body class="bg-white font-family-karla h-screen"> */}

      <div className='w-full flex flex-wrap'>
        {/* <!-- Login Section --> */}
        <div className='w-full md:w-1/2 flex flex-col'>
          <div className='flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24'>
            <a href='#' className='bg-black text-white font-bold text-xl p-4'>
              Logo
            </a>
          </div>

          <div className='flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32'>
            <p className='text-center text-3xl'>Welcome.</p>
            <form
              className='flex flex-col pt-3 md:pt-8'
              onSubmit={ async (e) => {
                 e.preventDefault();
                 try {
                   const { data } = await login({
                     variables: {
                       email,
                       password,
                     },
                   });
                   console.log("res", data);
                   setCookie(null, "user_token", data.login.jwt, {
                     maxAge: 30 * 24 * 60 * 600,
                     path: "/",
                   });
                 } catch(err) {
                   console.log('err', err)
                 }
              }}
            >
              <Input
                type={'email'}
                id={'email'}
                placeholder={'your@email.com'}
                htmlFor={'email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                type={'password'}
                id={'password'}
                placeholder={'Password'}
                htmlFor={'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type='submit'
                value='Log In'
                className='bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8'
              />
            </form>
            <div className='text-center pt-12 pb-12'>
              <p>
                Don't have an account?{' '}
                <Link href="/register">
                <a href='/register' className='underline font-semibold'>
                  Register here.
                </a>
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Image Section --> */}
        <div className='w-1/2 shadow-2xl'>
          <img
            className='object-cover w-full h-screen hidden md:block'
            src='https://source.unsplash.com/IXUM4cJynP0'
          />
        </div>
      </div>
    </div>
  );
};

export default withApollo(Login);
