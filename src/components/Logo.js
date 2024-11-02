import React from 'react';
import edit from '../assets/logos/Edit_light.svg';
import evolve from '../assets/logos/evolve.svg';
import maximize from '../assets/logos/maximize.svg';

function Logo() {
    const containerStyle = {
        marginTop:'28vh',
        marginLeft:'31vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center', 
        height: '40%', 
        padding: '10px'
    };

    return (
        <div 
            className="Logo" 
            style={{ 
                backgroundColor: 'black', 
                height: '50vh', 
                borderRadius: '20px', 
                width: '40vh', 
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={containerStyle}>
                <img 
                    src={edit} 
                    className="edit" 
                    alt="Edit logo" 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                />
                <img
                    src={evolve} 
                    className="edit"
                    alt="Evolve logo" 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                />
                <img
                    src={maximize} 
                    className="edit" 
                    alt="Maximize logo" 
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>
        </div>
    );
}

export default Logo;
