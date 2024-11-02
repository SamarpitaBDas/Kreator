import edit from '../assets/logos/Edit_light.svg'


function Logo() {
    return(
        <div className="Logo" style={{ backgroundColor: 'black', height: '100vh', color: 'white' }}>
            <img src={edit} className="edit" alt="logo" />

        </div>
    );
}

export default Logo