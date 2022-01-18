import { useContext } from 'react';
import { ThemeContext } from '../../context';
import './toggle.css'
// icons
import sun from '../../img/sun.png';
import moon from '../../img/moon.png'


const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({ type: 'TOGGLE' })
    }

    const darkMode = theme.state.darkMode

    return (
        <div className="toggle">
            <img src={sun} alt="" className="t-icon" />
            <img src={moon} alt="" className="t-icon" />
            <div className="t-button" onClick={handleClick} style={{ left: darkMode ? 0 : 25 }}></div>
        </div>
    )
}

export default Toggle