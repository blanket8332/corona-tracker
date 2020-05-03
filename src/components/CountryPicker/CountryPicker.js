import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.scss";
import { fetchCountries } from "../../API";

const CountryPicker = ({ countryChangeHandler }) => {
  const [fetchedCountries, setfetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setfetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setfetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(event) => countryChangeHandler(event.target.value)}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
