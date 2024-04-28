import {Field, Form, Formik} from "formik";
import toast, {Toaster} from "react-hot-toast";
import css from "./SearchBar.module.css";
import React from "react";

type SearchType = {
  onSeach: (value:string) => void
}

type SearchInput = {
  search: string
}

const SearchBar:React.FC<SearchType> =  ({onSeach}) => {
  const hundleSubmit = (values:SearchInput):void => {
    if (values.search === "") {
      toast.error("Enter the data in the field");
    }
    console.log("values: ", values);

    onSeach(values.search);
  }
const initialValues:SearchInput = {
  search: ""
} 

  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={hundleSubmit}>
        <Form className={css.form}>
          <label>
            <Field className={css.field} type="text" name="search" placeholder="search" />
          </label>
          <Toaster position="top-right" reverseOrder={false} />
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;