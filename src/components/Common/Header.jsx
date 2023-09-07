import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const Header = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <div className="navbar rounded-xl bg-gray-900 shadow-xl shadow-blue-300/30 p-5">
        <div className="flex-1">
          <a className="normal-case text-xl" href="/"> ALICE </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 z-10">
            <li tabIndex={0}>
              <button className="ml-1 hover:bg-gray-600 active:bg-gray-700 hover:text-gray-200">
                More
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </button>
              <ul className="p-2 bg-[#1A232E]">
                  <li>
                    <button
                      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                      className="hover:bg-gray-600 hover:text-gray-200 active:bg-gray-200">Logout
                    </button>
                  </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header