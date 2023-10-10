import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link, useNavigate } from 'react-router-dom'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import myContext from '../../context/data/myContext'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const context = useContext(myContext)
  const { toggleMode, mode } = context

  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  // console.log(user.user.email)

  const admin = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login'
  }

  const cartItems = useSelector((state) => state.cart)

  return (
    <div className="bg-white sticky top-0 z-50  "  >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  
                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                  {admin?.user?.email != 'sriman01@gmail.com' ? 
                  <div className="flow-root">
                    <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div> : ""}
                 {user?.user?.email === 'sriman01@gmail.com' ? 
                  <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      admin
                    </Link>
                  </div> : ''}
                   {user ? 
                  <div className="flow-root">
                    <a onClick = {logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div> :<div className='flow-root'> <a onClick = {() => navigate('/login')} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Login
                    </a>
                  </div>}

                  <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt="Dan_Abromov" />                                        </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-white">
        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#183D3D' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>Shop|Mart</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>

                  {admin?.user?.email != 'sriman01@gmail.com' ?
                  <Link to={'/order'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link> : ''}

                  {user?.user?.email === 'sriman01@gmail.com' ? 
                  <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link> : ''}

                  {user ?

                  <a onClick = {logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a> : <a onClick = {() => navigate('/login')} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Login
                  </a>}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="data:image/jpeg;base64,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"
                      alt="Dan_Abromov" />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}