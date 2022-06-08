
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {


  return (
    <>

          <main>{children}</main>
 

    </>
  )
}

export default Layout
