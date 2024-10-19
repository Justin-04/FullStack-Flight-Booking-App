import React from 'react'
import './Main.css'
import Nav from '../../components/Nav/Nav'
import Welcome from '../../components/Welcome/Welcome'
import Search from '../../components/Search/Search'
const Main = () => {
  return (
    <>
    <Nav/>
      <Welcome/>
      <Search/>
    </>
  )
}

export default Main
