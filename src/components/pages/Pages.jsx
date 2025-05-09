import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
// import WhatsAppButton from "../WhatsAppButton"
// import About from "../about/About"
// import Gallery from "../gallery/Gallery"
// import Blog from "../blog/Blog"
// import Services from "../services/Services"
// import Contact from "../contact/Contact"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/whatsAppButton' component={WhatsAppButton} /> */}
          {/* <Route exact path='/services' component={Services} /> */}
          {/* <Route exact path='/blog' component={Blog} /> */}
          {/* <Route exact path='/gallery' component={Gallery} /> */}
          {/* <Route exact path='/contact' component={Contact} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
