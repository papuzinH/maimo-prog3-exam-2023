import React from 'react';
import styles from './Search.module.css';
import { Formik } from 'formik';

const Search = () => {
  const handleSearch = (searchValue) => {
    console.log(searchValue);
  };

  return (
    <section>
      <h2>Search shows</h2>
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
          onSubmit={(values) => {
            // O_-
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
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
      <div className={styles.results_container}>
        <p>display grid here</p>
      </div>
    </section>
  );
};

export default Search;
