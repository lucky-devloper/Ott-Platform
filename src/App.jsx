import React, { useEffect, useState } from 'react'
import HomePage from './Components/HomePage'
import fetchData from './api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './Store/homeSlice'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'
import SearchResult from './Components/SearchResult'
import Layout from './Layout'

function App() {
  const { Response, error } = fetchData('/configuration')   // if you want to fetch data give any endpoint to fetchData
  const dispatch = useDispatch()
  // console.log(Response);


  useEffect(() => {
    if (Response) {
      const res = Response.data
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url))
    }
  }, [Response])


  return (
    <div className='w-full h-screen relative'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:mediatype/:id' element={<Details />} />
        <Route path='' element={<Layout />}>
          <Route path='/search/:quary' element={<SearchResult />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App