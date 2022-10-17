import React from 'react'
import StyledNavbar from '../components/StyledNavbar'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
      <>
          <StyledNavbar></StyledNavbar>
          <Outlet></Outlet>
      </>
  );
}

export default SharedLayout

