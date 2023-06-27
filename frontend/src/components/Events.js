import { OpenJam } from "../events/OpenJam"
import { TwentyFour } from '../events/TwentyFour'
import '../css/App.css'

export const Events = () => 
    <div className="events-list">
        <a 
            href="https://www.instagram.com/p/Crt5T68p6CF/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            target='_blank'
            className="event-link"
        >
            <OpenJam />
        </a>
        <a 
            href="https://www.instagram.com/p/Ct44Qh0po3a/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            target='_blank'
            className="event-link"
        >
            <TwentyFour />
        </a>
    </div>