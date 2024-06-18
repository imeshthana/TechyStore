import React,{useState} from 'react'
import axios from 'axios';
import CreateProduct from '../../components/createproduct'
//import { computers, laptops, mobilePhones } from '../../productData';
import AdminProduct from '../../components/adminProduct';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setIsEditing(true);
  };


  const handleClick = async (category) => {
    try {
      const response = await axios.get(`https://techy-store-app-api.onrender.com/api/products/all/${category}`);
      setProducts(response.data);
      setCategory(category);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://techy-store-app-api.onrender.com/api/products/all/${category}/${id}`);
      const response = await axios.get(`https://techy-store-app-api.onrender.com/api/products/all/${category}`);
      alert("Product deleted successfully!")
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
        <div id="products">
          <div class="row">
              <div class="list">
                <div class="subheadings-buttons">
                  <button onClick={() => handleClick('computers')}  class="btn">Computers</button>
                  <button onClick={() => handleClick('laptops')}  class="btn">Laptops</button>
                  <button onClick={() => handleClick('phones')}  class="btn">mobile Phones</button>
                </div>
                  {products.map((ProductItem) => {
                    return (
                        <AdminProduct 
                            product={ProductItem}
                            key={ProductItem._id}
                            id={ProductItem._id}
                            productName={ProductItem.productName} 
                            price={ProductItem.price}
                            onDelete={()=> deleteProduct(ProductItem._id)}
                            onEdit={handleEditProduct}
                        />
                    );
                  })}
              </div>
              {isEditing ? (
                      <div className='form'>
                        <div className="subheadings">
                          <p>Edit Product</p>
                        </div>
                        <CreateProduct product={editingProduct} />
                      </div>
                      ) : (
                      <div className='form'>
                        <div className="subheadings">
                          <p>Add Product</p>
                        </div>
                        <CreateProduct />
                      </div>
                )}
            </div>
        </div>
  )
}


export default AdminProducts


{/* <div className='form'>
<div class="subheadings">
  <p>Add Products</p>
</div>
<CreateProduct />
</div> */}

  // function addProduct(newProduct) {
  //     setProduct(products => {
  //         return [...products, newProduct];
  //     })
  // }

  // function deleteProduct(id) {
  //     setProduct(products => {
  //         return products.filter((productItem, index) => {
  //             return index !== id;
  //         })
  //     })
  // }