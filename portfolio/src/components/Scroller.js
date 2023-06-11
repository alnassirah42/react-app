import React from 'react' 
import '../App.css'

const Scroller = () => {
    return (
        <div className="scroll-container">
            <div className="scroll-top">
                <a aria-label="Scroll up" href="#top">
                    <i aria-hidden="true" className="fas fa-arrow-up"></i>
                </a>
            </div>
        </div>
    )
}

export default Scroller





