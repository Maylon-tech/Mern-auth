import { Link } from "react-router-dom"



const Header = () => {
  return (
    <div className='max-w-6xl flex items-center mx-auto justify-between p-3'>
      <div className="logo">
        <Link to="/">LOGO</Link>
          </div>
          
          <nav className="navbar">
              <ul className='flex gap-4'>
                  <li>
                      <Link to="/about">
                        About
                      </Link>
                  </li>
                  <li>
                      <Link to="/profile">
                        Profile
                      </Link>
                  </li>
              </ul>
          </nav>

          <div className="flex gap-4 ">
               <button className="bg-indigo-500 p-2 rounded-md text-slate-100">
                    <Link to="/signin">
                        Sign In
                    </Link>
                </button>

                <button className="bg-green-500 p-2 rounded-md text-slate-100">
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </button>
          </div>
    </div>
  )
}

export default Header
