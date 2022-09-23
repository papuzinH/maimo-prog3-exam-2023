import React from 'react';
import { useRouter } from 'next/router';

const Category = () => {
  const router = useRouter();
  const { catId } = router.query;
  return <div>my category {catId}</div>;
};

export default Category;
