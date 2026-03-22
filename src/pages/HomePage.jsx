import { useEffect, useState } from "react";
// import { use } from "../../server/routes/auth";

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await
            fetch("http://localhost:4000/api/products");
            const data = await res.json();
            console.log(data)
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {products.length === 0 ? (
                <p>No products yet</p>
            ): (
                products.map((product) => (
                    <div key={product._id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
            ))
            )}
        </div>
    );
};

export default HomePage;