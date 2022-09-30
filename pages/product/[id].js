import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getFirestore } from '../../utils/firebase';
import Image from 'next/image';

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setLoading(true);
    const getProduct = async () => {
      const db = getFirestore();
      const itemsCollection = db.collection(`items`);
      const itemSnapshot = await itemsCollection.doc(id).get();

      if (!itemSnapshot.exists) {
        console.log('No matching documents.');
        return;
      }

      console.log('PRODUCTO', itemSnapshot.id);

      setProduct({ id: itemSnapshot.id, ...itemSnapshot.data() });
      setLoading(false);
    };
    getProduct();
  }, [id]);

  return (
    <>
      {!loading && (
        <div>
          <Image src={product.pictureUrl} width={200} height={200} />
        </div>
      )}
    </>
  );
};

export default ProductPage;
