/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from "formik";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearch } from "../../services/search/search";

import Button from "../../shared/ui/button";
import InputComponent from "../../shared/ui/input";

const SearchForm: FC<{ setData: (e: any) => any }> = ({ setData }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryData = searchParams.get("q") || "";

  const [searchValue, setSearchValue] = useState(queryData);

  const handleSubmit = (values: any) => {
    if (searchValue) {
      setSearchParams({ q: searchValue });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    fetchSearch({ queryData }).then((data) => setData(data));
  }, [queryData]);

  return (
    <Formik
      initialValues={{
        search: searchValue,
      }}
      onSubmit={(values: any) => {
        handleSubmit(values);
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ values, handleChange }) => (
        <Form noValidate>
          <div className="grid grid-cols-[4fr_1fr] gap-4">
            <InputComponent
              name="search"
              type="text"
              value={searchValue}
              handleChange={(e: any) => setSearchValue(e.target.value)}
            />

            <Button
              typeButton="secondary"
              type="submit"
              text="поиск"
              onClick={handleChange}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
