import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Product from './product';
//import { computers, laptops, mobilePhones } from '../productData'

// function createProduct(product) {
//     return (
//       <Product
//         title={product.title}
//         price={product.price}
//         image={product.image}
//       />
//     );
//   }
 
const Products = () => {
  const [computersList, setComputers] = useState([]);
  const [laptopsList, setLaptops] = useState([]);
  const [phonesList, setPhones] = useState([]);

  const [currentComputerPage, setCurrentComputerPage] = useState(1);
  const [currentLaptopPage, setCurrentLaptopPage] = useState(1);
  const [currentPhonePage, setCurrentPhonePage] = useState(1);
  const productsPerPage = 8;

  const renderProducts = (products, currentPage) => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.slice(startIndex, endIndex).map(product => (
      <Product
        key={product.id}  // Make sure to have a unique key for each product
        productName={product.productName}
        price={product.price}
        image={product.image}
        description={product.description}
      />
    ));
  };

  const handleNextClick = (section) => {
    switch (section) {
      case 'computers':
        setCurrentComputerPage(currentComputerPage + 1);
        break;
      case 'laptops':
        setCurrentLaptopPage(currentLaptopPage + 1);
        break;
      case 'phones':
        setCurrentPhonePage(currentPhonePage + 1);
        break;
      default:
        break;
    }
  };

  const handlePrevClick = (section) => {
    switch (section) {
      case 'computers':
        setCurrentComputerPage(currentComputerPage - 1);
        break;
      case 'laptops':
        setCurrentLaptopPage(currentLaptopPage - 1);
        break;
      case 'phones':
        setCurrentPhonePage(currentPhonePage - 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if(computersList){
      axios.get('https://techy-store-app-api.onrender.com/api/products/all/computers')
      .then(response => {
        setComputers(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
    } 
    if(laptopsList){
      axios.get('https://techy-store-app-api.onrender.com/api/products/all/laptops')
      .then(response => {
        setLaptops(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
    }
    if(phonesList){
      axios.get('https://techy-store-app-api.onrender.com/api/products/all/phones')
      .then(response => {
        setPhones(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
    }
    }, []);

    const rightArrowStyles = {
      position: "absolute",
      transform: "translate(0, 300%)",
      right: '10px',
      fontSize: "45px",
      color: "#fff",
      zIndex: 1,
      cursor: "pointer",
      padding:"1rem",
      backgroundcolor:'transparent'
    };
    
    const leftArrowStyles = {
      transform: "translate(0, 300%)",
      position: "absolute",
      left: "10px",
      fontSize: "45px",
      color: "#fff",
      zIndex: 1,
      cursor: "pointer",
      padding:"1rem",
      backgroundcolor:'transparent'
    };

  return (
    <div>
        <section id="computers">
          <div className="items">
              <div className="subheadings">
                  <p>Computer Accessories</p>
                  <div
                    onClick={() => handlePrevClick('computers')} style={leftArrowStyles}
                    disabled={currentComputerPage === 1}> ❰ 
                  </div>
                  <div
                    onClick={() => handleNextClick('computers')} style={rightArrowStyles}
                    disabled={currentComputerPage * productsPerPage >= computersList.length}> ❱ 
                  </div>
              </div>
              <div className="box-container">
                  {renderProducts(computersList, currentComputerPage)}
              </div>
          </div>

      </section>
      <section id="laptops">
          <div className="items">
              <div className="subheadings">
                  <p>Laptops</p>
                  <div
                      onClick={() => handlePrevClick('laptops')} style={leftArrowStyles}
                      disabled={currentComputerPage === 1}> ❰ 
                    </div>
                    <div
                      onClick={() => handleNextClick('laptops')} style={rightArrowStyles}
                      disabled={currentComputerPage * productsPerPage >= computersList.length}> ❱ 
                    </div>
              </div>
                    <div className="box-container">
                      {renderProducts(laptopsList, currentLaptopPage)}
                    </div>
              </div>
      </section>
      <section id="phones">
          <div className="items">
              <div className="subheadings">
                  <p>Mobile Phones and Accessories</p>
                  <div
                    onClick={() => handlePrevClick('phones')} style={leftArrowStyles}
                    disabled={currentComputerPage === 1}> ❰ 
                  </div>
                  <div
                    onClick={() => handleNextClick('phones')} style={rightArrowStyles}
                    disabled={currentComputerPage * productsPerPage >= computersList.length}> ❱ 
                  </div>
              </div>
              <div className="box-container">
                  {renderProducts(phonesList, currentPhonePage)}
              </div>
          </div>
      </section>
    </div>
  )
}

export default Products
