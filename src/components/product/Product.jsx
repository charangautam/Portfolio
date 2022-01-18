import { useContext } from 'react';
import { ThemeContext } from '../../context';
import './product.css';

const Product = ({ img, link }) => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="product" >
            <div className="p-broswer" style={{ backgroundColor: darkMode && "#333" }}>
                <div className="p-circle" style={{ backgroundColor: darkMode && "#fff" }}></div>
                <div className="p-circle" style={{ backgroundColor: darkMode && "#fff" }}></div>
                <div className="p-circle" style={{ backgroundColor: darkMode && "#fff" }}></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}

export default Product
