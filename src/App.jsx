import { useContext } from 'react';
import { ThemeContext } from './context';
// embedded components
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "#fff", color: darkMode && "#fff" }}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  )
}

export default App;
