import axios from "axios";
import LogoCard from "../LogoCard";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";

const LogoBar = ({ filter }) => {
  const [companies, setCompanies] = useState([])
  const baseURL = 'https://autocomplete.clearbit.com/v1/companies/suggest?query='



  useEffect(() => {
    console.log('effect')
    axios
    .get(`${baseURL}${filter}`)
    .then(response => {
      console.log('promise fulfilled')
      setCompanies(response.data)
    })
  },[filter])

  return (
    <>
    <Grid container spacing={2}>



    {companies.map(company => <LogoCard company={company} key={company.name} />)}
      </Grid>
    
    </>
  );
};

export default LogoBar