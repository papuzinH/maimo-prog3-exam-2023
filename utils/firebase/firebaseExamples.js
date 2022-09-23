//Get items from collection

import { getFirestore } from '../../utils/firebase';

const fetchData = async () => {
  setLoading(true);

  try {
    const db = getFirestore();

    const categoriesCollection = db.collection(`categories`);
    const catSnapshot = await categoriesCollection.doc(catId).get();

    const itemsCollection = db.collection(`items`);
    const itemSnapshot = catId
      ? await itemsCollection.where('categoryId', '==', catId).limit(20).get()
      : await itemsCollection.orderBy('price', 'desc').limit(20).get();

    const items = itemSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    setCatInfo(
      catSnapshot.exists
        ? { id: catSnapshot.id, ...catSnapshot.data() }
        : {
            name: 'Welcome to the machine',
            description: 'Minimal selection of gadgets and NFTs',
          },
    );

    setProducts(items);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

//GET ITEM
const fetchItemData = async () => {
  setLoading(true);
  const db = getFirestore();
  try {
    const itemsCollection = db.collection(`items`);
    const itemSnapshot = await itemsCollection.doc(id).get();
    if (!itemSnapshot.exists) {
      console.log('No matching documents.');
      return;
    }

    setProduct({ id: itemSnapshot.id, ...itemSnapshot.data() });
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

//ADD DATA TO FIREBASE

const placeOrder = async (buyerData) => {
  try {
    const db = getFirestore();
    console.log(`order N ${buyerData.name}`);

    const cartItems = cart.map(({ item: { id, title, price }, quantity }) => {
      return { id, title, price, quantity };
    });

    const order = {
      buyer: buyerData,
      items: cartItems,
      date: getDate(),
      total: getCartTotal(),
    };

    const res = await db.collection('orders').add(order);
    setCart([]);
    setOrderCreated(res.id);
  } catch (error) {
    console.log(error);
  }
};
