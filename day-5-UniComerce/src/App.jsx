import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import axios from "axios";
function App() {
  const [productData, setProductData] = useState([]);
  
  useEffect(() => {
    const getProductApi = async () => {
      try {
        let res = await axios.get("https://fakestoreapi.com/products");
        setProductData(res.data);
      } catch (error) {
        console.log("Error aa rhe h ", error);
      }
    };
    getProductApi();
  }, []);
  
  return (
    <div>
      <Navbar />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
  {productData.map((elem) => (
    <ProductCard key={elem.id} product={elem} />
  ))}
</div>
    </div>
  );
}

export default App;
