import React from 'react'
import Logo from '../Icons/best-potolki-logo.svg'
import Call from '../Icons/nav-call.svg'
import { Link } from 'react-scroll'


export default function Navbar() {
  return (
    <nav className='Navbar'>
      <div className="container">
        <div className='nav-content'>
          <img src={Logo} alt="best potolki logo" />
          <div className='d-flex'>
            <div className='nav-socials'>
              <img src={Call} alt="call icon" />
              <a href="tel:+998909399903">+998 (90) 939 99 03 <div className='stick'></div></a>
            </div>
            
            <div className='social-icons'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clip-path="url(#clip0_130_266)">
                <path d="M15.0938 21.2695C11.3145 21.2695 8.26759 18.2578 8.26173 14.5078C8.25587 10.8164 11.3262 7.79296 15.082 7.79296C18.8496 7.7871 21.9082 10.8047 21.9141 14.5254C21.9141 18.2402 18.8613 21.2637 15.0938 21.2695ZM15.0938 19.1016C17.666 19.1016 19.752 17.0449 19.7461 14.5137C19.7402 12.0059 17.6543 9.95507 15.0938 9.95507C12.5215 9.95507 10.4238 12 10.4238 14.5254C10.4297 17.0566 12.5215 19.1074 15.0938 19.1016Z" fill="white"/>
                <path d="M22.7051 5.74219C23.4961 5.74219 24.1406 6.41602 24.1406 7.24219C24.1347 8.06836 23.4844 8.73633 22.6933 8.73047C21.914 8.72461 21.2754 8.05664 21.2754 7.24805C21.2695 6.42187 21.914 5.74219 22.7051 5.74219Z" fill="white"/>
                <path d="M4.5 1H25.5C27.433 1 29 2.567 29 4.5V25.5C29 27.433 27.433 29 25.5 29H4.5C2.567 29 1 27.433 1 25.5V4.5C1 2.567 2.567 1 4.5 1Z" stroke="white" stroke-width="2"/>
                </g>
                <defs>
                <clipPath id="clip0_130_266">
                <rect width="30" height="30" fill="white"/>
                </clipPath>
                </defs>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clip-path="url(#clip0_130_271)">
                <path d="M4.5 1H25.5C27.433 1 29 2.567 29 4.5V25.5C29 27.433 27.433 29 25.5 29H4.5C2.567 29 1 27.433 1 25.5V4.5C1 2.567 2.567 1 4.5 1Z" stroke="white" stroke-width="2"/>
                <path d="M11.6602 23.6719C11.0156 23.6719 11.0742 23.4375 10.8984 22.8516L9.02344 16.6992L23.3789 8.26172" fill="#C8DAEA"/>
                <path d="M11.6602 23.6719C12.0703 23.6719 12.3047 23.4375 12.5977 23.2031L15.2344 20.6836L11.9531 18.6914" fill="#A9C9DD"/>
                <path d="M11.9531 18.6914L19.8633 24.4922C20.6836 25.0195 21.3867 24.7266 21.6211 23.6719L24.8437 8.55469C25.1367 7.26562 24.3164 6.67969 23.4375 7.08984L4.6289 14.3555C3.39844 14.8242 3.39844 15.5859 4.39453 15.8789L9.25781 17.4023L20.3906 10.3125C20.918 10.0195 21.3867 10.1367 21.0352 10.5469" fill="#F6FBFE"/>
                </g>
                <defs>
                <clipPath id="clip0_130_271">
                <rect width="30" height="30" fill="white"/>
                </clipPath>
                </defs>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clip-path="url(#clip0_130_301)">
                  <path d="M12.1172 25.3945C12.1172 21.9434 12.1172 18.5215 12.1172 15.0645C11.3555 15.0645 10.6172 15.0645 9.86133 15.0645C9.86133 13.8926 9.86133 12.7559 9.86133 11.584C9.96094 11.5781 10.0605 11.5664 10.166 11.5664C10.7109 11.5664 11.2617 11.5547 11.8066 11.5723C12.0469 11.5781 12.1289 11.5137 12.123 11.2676C12.1113 10.377 12.1113 9.49219 12.1172 8.60156C12.123 7.59961 12.4043 6.69141 13.1191 5.96484C13.8105 5.26172 14.6953 4.88086 15.6563 4.82227C17.2031 4.73438 18.7559 4.74609 20.3086 4.7168C20.3262 4.7168 20.3437 4.73437 20.3789 4.75195C20.3789 5.92969 20.3789 7.11328 20.3789 8.32617C20.2676 8.33203 20.1621 8.33789 20.0625 8.33789C19.3594 8.33789 18.6562 8.33789 17.9531 8.33789C17.2441 8.34375 16.8281 8.76563 16.8281 9.46289C16.8281 10.125 16.8281 10.793 16.834 11.4551C16.834 11.4727 16.8457 11.4902 16.8633 11.5547C18.0234 11.5547 19.1953 11.5547 20.4258 11.5547C20.2734 12.7441 20.1328 13.8809 19.9805 15.0586C18.9199 15.0586 17.8828 15.0586 16.8164 15.0586C16.8164 18.5273 16.8164 21.9609 16.8164 25.4063C15.2402 25.3945 13.7051 25.3945 12.1172 25.3945Z" fill="white"/>
                  <path d="M4.5 1H25.5C27.433 1 29 2.567 29 4.5V25.5C29 27.433 27.433 29 25.5 29H4.5C2.567 29 1 27.433 1 25.5V4.5C1 2.567 2.567 1 4.5 1Z" stroke="white" stroke-width="2"/>
                </g>
                <defs>
                  <clipPath id="clip0_130_301">
                    <rect width="30" height="30" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        
        <ul className="nav-list">
          <li className="nav-items">
            <Link  to="/" className='nav-link' spy={true} smooth={true} offset={-90} duration={100}>О НАС</Link>
          </li>
          <li className="nav-items">
            <Link  to="/" className='nav-link' spy={true} smooth={true} offset={-90} duration={100}>ПРЕИМУЩЕСТВА</Link>

          </li>
          <li className="nav-items">
            <Link  to="/" className='nav-link' spy={true} smooth={true} offset={-90} duration={100}>НАШИ РАБОТЫ</Link>

          </li>
          <li className="nav-items">
            <Link  to="/" className='nav-link' spy={true} smooth={true} offset={-90} duration={100}>ЦЕНЫ</Link>

          </li>
          <li className="nav-items">
            <Link  to="/" className='nav-link' spy={true} smooth={true} offset={-90} duration={100}>ОТЗЫВЫ</Link>

          </li>
          <li className="nav-items">
            <Link  to="/" className='nav-link' spy={true} smooth={true} offset={0} duration={100}>КОНТАКТЫ</Link>

          </li>
        </ul>
      </div>
    </nav>
  )
}
