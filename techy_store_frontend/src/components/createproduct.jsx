import React, {useState, useEffect} from 'react'
import axios from 'axios';
//import { computers, laptops, mobilePhones } from '../productData';

const CreateProduct = ({product: initialProduct, onSave}) => {
    const[product, setProduct] = useState(initialProduct||{
        productName: '',
        category: '',
        price: '',
        description: '',
        image:'/images/laptops/asus.jpg'
    })

    useEffect(() => {
        if (initialProduct) {
          setProduct(initialProduct);
        }
      }, [initialProduct]);

    function handleChange(event) {
        const {name,value} = event.target;
        setProduct(prevProduct => {
          return{...prevProduct, [name]: value};
        });
    }

    function handleImageChange(event) {
        event.preventDefault();
        const file = event.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    
        if (file && allowedTypes.includes(file.type)) {
            const formData = new FormData();
            formData.append('image', file);
            setProduct({ ...product, image: file });
        } else {
            alert('Invalid file type! Please select a .jpg, .jpeg, or .png file.');
        }
    }

    function submitProduct(event) {
        event.preventDefault();
        axios
        //.post('http://localhost:3001/api/products/',product)
        .post('https://techy-store-app-api.onrender.com/api/products/',product)
        .then((result) => {
            console.log(result);
            setProduct({ productName: '', category: '', price: '', description: '', image:'/images/laptops/asus.jpg' });
            alert("Product successfully added!")
        })
        .catch((error) => {
            console.error(error);
            alert("Product adding failed!")
        });
    }
    
    return (
        <form className='addproduct'>
            <input onChange={handleChange} name="productName" value={product.productName} placeholder="Product Name" class="box"/>
            <div className='delivery-form-row'>
                <select onChange={handleChange} name="category" value={product.category} className='box1'>
                    <option className='dropdownOption' value=''>Select Category</option>
                    <option value="computer">Computer</option>
                    <option value="laptop">Laptop</option>
                    <option value="phone">Phone</option>
                </select>
                {/* <input onChange={handleImageChange} type="file" accept=".png, .jpg, .jpeg" className='box2' /> */}
                <input onChange={handleChange} name="image" value={product.image} placeholder="Image" class="box2"/>
            </div>
            <input onChange={handleChange} name="price" value={product.price} placeholder="Price" class="box"/>
            <textarea onChange={handleChange} name="description" value={product.description} id="" cols="30" rows="10" class="box message" 
                 placeholder="Description"></textarea>
            <button onClick={submitProduct} type="submit" className="btn">
                {initialProduct ? 'Update' : 'Add'} <i className="fas fa-pen"></i>
            </button>
        </form>
    )
}

export default CreateProduct





    // function submitProduct(event){
    //     props.onAdd(product);
    //     event.preventDefault(); //preventing reloading the page when submitting
    //     setProduct({
    //         productName: '',
    //         catogory: '',
    //         price: '',
    //         description: ''
    //     });
    //     if(product.catogory === "computer"){
    //         computers.push(product);
    //     }
    //     else if(product.catogory === "laptop"){
    //         laptops.push(product);
    //     }
    //     else if(product.catogory === "mobile phone"){
    //         mobilePhones.push(product);
    //     }
    // }