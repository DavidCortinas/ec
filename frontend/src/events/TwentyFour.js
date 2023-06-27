import event_poster from '../images/June24.png'
import '../css/App.css'

export const TwentyFour = () => 
    <div id='twenty-four' className='event'>
        <img className='event-img' src={event_poster} />
        <div className='event-text'>
            <h3 className='event-title'>SÚPER SMASH TOURNAMENT</h3>
            <h3 className='event-title'>$500 GRAND PRIZE</h3>
            <h4 className='event-paragraph'>
                Saturday June 24
            </h4>
            <div className='details-list'>
                <h5 className='details-list-item'>$10 GENERAL ADMISSION</h5>
                <h5 className='details-list-item' >$30 CONTESTANT ENTRY</h5>
            </div>
            <h4>6pm</h4>
            {/* <h4 className='event-paragraph'>$5 until 8pm / $10 after</h4> */}
        </div>
    </div>