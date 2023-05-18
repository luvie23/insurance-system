import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    
        <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to='/' class='flex items-center'>
                <img src={logo} class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-sky-800">All Insure Services</span>
            </Link>

            <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                    <Link to='/' class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
                    </li>
                    <li>
                    <Link to='/add_policy' class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">New Policy +</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
        </nav>

  )
}
