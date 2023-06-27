import { Link } from 'react-scroll'
import logo from '../images/ec 030123.jpg';
import '../css/App.css'
import { useEffect, useState } from 'react';

export const HeroHeader = () => { 
    const [navVisible, setNavVisible] = useState(true);

    const isScrollingToTop = () => {
        const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
        const previousPosition = window.previousScrollPosition || currentPosition;

        window.previousScrollPosition = currentPosition;

        return currentPosition < previousPosition;
    };


  useEffect(() => {
    const handleScroll = () => {
      const threshold = 60; // Adjust this value as per your requirement
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (currentPosition > threshold && !isScrollingToTop()) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    // console.log(navVisible)

    
    return(
        <header id='home'>
            { navVisible && <ul className={'navlist'}>
                <li>
                    <Link className='navlink' to='home' smooth duration={500}>Home</Link>
                </li>
                <li>
                    <Link className='navlink' to='calendar' smooth duration={500}>Calendar</Link>
                </li>
                <li>
                    <a className='navlink' href='https://www.instagram.com/the.electric.church/' target='_blank'>Instagram</a>
                </li>
                <li>
                    <a className='navlink' href='https://www.facebook.com/theelectricchurchaustin/' target='_blank'>Facebook</a>
                </li>
            </ul>}
            {/* <div id='earth-orbit'>
                <img src={logo} style={{width:'150vmin'}}/>
            </div> */}
            <img src={logo} style={{width:'150vmin', zIndex: 1}}/>
            {/* <ul className='orbiting-navlist' id='orbiting-navlist'>
                <li>
                    <Link id='home' className='navlink' to='home' smooth duration={500}>H</Link>
                </li>
                <li>
                    <Link id='calendar' className='navlink' to='calendar' smooth duration={500}>C</Link>
                </li>
                <li>
                    <a id='instagram' className='navlink' href='https://www.instagram.com/the.electric.church/' target='_blank'>IG</a>
                </li>
                <li>
                    <a id='facebook' className='navlink' href='https://www.facebook.com/theelectricchurchaustin/' target='_blank'>FB</a>
                </li>
            </ul> */}
        </header>
    )
};