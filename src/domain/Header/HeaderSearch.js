import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from '../../components';
import './style.css';
import HeaderSearchSchema from '../../schema/header-search.schema';
import Text from 'components/Text';
import { useTheme } from 'contexts/ThemeProvider';


const HeaderSearch = () => {
  const { handleSubmit, reset, formState: { errors }, register } = useForm({ resolver: yupResolver(HeaderSearchSchema) });
  const { theme } = useTheme()
  const submitSearch = (data) => {
    console.log('searched ', data)
    window.location.href = '/search?' + toUrlParams(data);
  }

  const toUrlParams = (data) => {
    return Object.keys(data).map(i => { return `${i}=${data[i]}`}).join('&')
  }

  return (
    <div className='col-9'>
      <form className="d-flex g-search col-8" role="search" onSubmit={handleSubmit((data) => submitSearch(data))} >
        <Input
          name='search'
          className="px-3 border-0"
          type="search"
          placeholder="Search for products, brands & more"
          aria-label="Search"
          register={register}
        />
        <button
          className="btn btn-transparent"
          type="submit"
        >
          <Text color={theme.quaternary}><i className="fa fa-search" style={{color: theme.quaternary}}/></Text>
        </button>
      </form>
    </div >
  )
}

HeaderSearch.propTypes = {};

export default HeaderSearch;

