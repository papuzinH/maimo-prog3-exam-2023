import { useState, useEffect } from 'react';
import { getFirestore } from '../../utils/firebase';
import styles from './Products.module.css';
import { useRouter } from 'next/router';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = db.collection(`items`);
        const itemSnapshot = await itemsCollection.get();

        const items = itemSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const goToProduct = (id) => router.push(`/product/${id}`);

  return (
    <div className={`grid`}>
      {!loading &&
        products.map(({ id, title }) => (
          <div key={id} className={`col_3`}>
            {title}
            <button onClick={() => goToProduct(id)}>View product</button>
          </div>
        ))}
      {loading && <p className={`col_12`}>Loading...</p>}
    </div>
  );
};

export default Products;
