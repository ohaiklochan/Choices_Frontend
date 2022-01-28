import React from 'react'

const WelcomeContainer = () => {
    return (
        <div>
            
            <div class="header">
                <h1 class="title">Choices: A React Horror Game</h1>
            </div>
            <div class="body">
                <h5>Are you ready to play?</h5>
            </div>
            <div class="footer">
                <button type="button" class="btn btn-primary" onClick={() => window.location = '/maingame'} className='start'>Yes</button>
                <button type="button" class="btn btn-secondary" onClick={() => window.location = '/instructions'} className='start'>No</button>
            </div>
        </div>
    )
}

export default WelcomeContainer