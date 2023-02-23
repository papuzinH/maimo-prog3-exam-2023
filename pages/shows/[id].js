import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import SingleShowInfo from '../../components/SingleShowInfo/SingleShowInfo';
import SingleShowActors from '../../components/SingleShowActors/SingleShowActors';
import Navbar from '../../components/Navbar/Navbar';

const SingleShow = () => {
  const router = useRouter();
  const { id } = router.query;
  const [show, setShow] = useState({});
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleGetShowData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setShow(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetActors = async () => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${id}/cast`,
      );
      setActors(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetShowData();
    handleGetActors();
  }, [id]);

  return (
    <>
      <Navbar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <SingleShowInfo show={show} />
          <SingleShowActors actors={actors} />
        </>
      )}
    </>
  );
};

export default SingleShow;
