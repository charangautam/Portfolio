// darkMode context
import { useContext } from 'react';
import { ThemeContext } from '../../context';
// css file
import './product.css';
import study from '../../files/AvengersFlix-Case-Study.pdf'

const Product = ({ name, tech, img, link }) => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="product">
            <div>
                <h4 className="product-details" style={{ margin: '5px 0 0 0', color: darkMode && "lightgray" }}>{name}</h4>
                <p className="product-details" style={{ margin: '0 0 5px 0', color: darkMode && "lightgray" }}>{tech}</p>
                {name === 'AvengersFlix' && <a href={study} download className='study'>Case Study</a>}
            </div>
            <div className="p-broswer" style={{ backgroundColor: darkMode && "#333" }}>
                <div className="p-circle" style={{ backgroundColor: darkMode && "#fff" }}></div>
                <div className="p-circle" style={{ backgroundColor: darkMode && "#fff" }}></div>
                <div className="p-circle" style={{ backgroundColor: darkMode && "#fff" }}></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="Representation of each project" className="p-img" />
            </a>
        </div>
    )
}

export default Product