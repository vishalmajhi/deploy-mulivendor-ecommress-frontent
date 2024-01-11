import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDetails from '../components/ProductDetails';
import { productData } from '../static/data';
import { useParams } from 'react-router-dom';

function ProductDetailpage() {
  const { name } = useParams();
  const [data, setData] = useState();
  const productName = name.replace(/-/g, ' ');
  
  useEffect(() => {
    const fetchData = async () => {
      // Simulate an asynchronous data fetch
      const newData = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(productData.find((item) => item.name === productName));
        }, 1000); // Simulating a delay of 1 second
      });

      setData(newData);
    };

    fetchData();
  }, [productName]);

  return (
    <div>
      <Navbar />
      <Header />
      
        <ProductDetails data={data} />
{/*   
      <Footer /> */}
    </div>
  );
}

export default ProductDetailpage;
