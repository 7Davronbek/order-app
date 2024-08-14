import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'

const Up = () => {
    const [up, setUp] = useState(false);

    const changeup = () => {
        if (window.scrollY >= 300) {
            setUp(true);
        } else {
            setUp(false)
        }
    }

    window.addEventListener('scroll', changeup);

    const top = () => {
        window.scrollTo(0,0);
    }
    
  return (
    <a onClick={top} className={`UP ${up ? 'active' : ''}`}>
        <i className={`icon icon-up ${localStorage.getItem('theme') === 'white' ? 'black' : ''}`}><FontAwesomeIcon icon={faChevronUp}/></i>
    </a>
  )
}

export default Up