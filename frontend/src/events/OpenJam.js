import open_jam_poster from '../images/OpenJam.png'
import '../css/App.css'

export const OpenJam = () => 
    <div id='open-jams' className='event'>
        <img className='event-img' src={open_jam_poster} />
        <div className='event-text'>
            <h3 className='event-title'>The Electric Church At The Vortex</h3>
            <h4 className='event-paragraph'>
                Join us at The Vortex (2307 Manor Road) EVERY MONDAY for open jams!
            </h4>
            <h4 className='event-paragraph'>
                We’ll have guitars, drums, synthesizers and percussion stations 
                set up for literally anyone who wants to come up and make some 
                music for the evening.
            </h4>
            <h4 className='event-paragraph'>7pm-10pm</h4>
        </div>
    </div>
