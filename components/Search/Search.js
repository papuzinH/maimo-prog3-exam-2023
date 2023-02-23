import React, { useState } from 'react';
import styles from './Search.module.css';
import axios from 'axios';
import { Formik } from 'formik';
import Show from '../Show/Show';

const Search = () => {
  const [showsResult, setShowResults] = useState([]);
  const handleSearch = async (searchValue, setSubmitting) => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchValue}`,
      );
      setShowResults(response.data);
      setSubmitting(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.searchContainer}>
      <h2>Search your show</h2>
      <div className={styles.form_container}>
        <Formik
          initialValues={{ show: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.show) {
              errors.show = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, {setSubmitting}) => {
            handleSearch(values.show, setSubmitting);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="show"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.show}
              />
              <div className={styles.error}>
                {errors.show && touched.show && errors.show}
              </div>
              <button type="submit" disabled={isSubmitting}>
                Search
              </button>
            </form>
          )}
        </Formik>
      </div>
      <div className={`grid ${styles.results_container} `}>
        {showsResult.map((show) => (
          <div key={show.show.id} className="col_4">
            <Show key={show.show.id} id={show.show.id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
