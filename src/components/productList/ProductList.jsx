import './productList.css';
// embedded component/data
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
    return (
        <div className="product-list">
            <div className="pl-texts">
                <h1 className="pl-title">Personal projects</h1>
                <p className="pl-desc">
                    Here are some projects I have built in the past. Click on each to explore further!
                </p>
            </div>
            <div className="pl-list">
                {products.map(product => (
                    <Product img={product.img} link={product.link} name={product.name} tech={product.tech} key={product.id} />
                ))}
            </div>
            <p className='github-link'>Check out my <a href="https://github.com/charangautam">GitHub</a> for more details on each project!</p>
        </div>
    )
}

export default ProductList
