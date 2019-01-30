import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import {
  Header,
  Footer,
  About,
  ProductList,
  ProductDetails,
  Terms,
  UnderConstruction,
  Cart,
  Checkout,
  FrontPage,
  PageNotFound
} from './components'
import { spacing, breakpoints } from './styles'

const Container = styled.div`
  position: relative;
  padding: ${spacing.lg} 108px;
  margin-bottom: 70px;
  @media (max-width: ${breakpoints.MEDIUM_AND_BELOW}) {
    padding: ${spacing.xl};
  }
  @media (max-width: ${breakpoints.SMALL_AND_BELOW}) {
    padding: ${spacing.lg};
  }
`

type State = {
  showUnderConstruction: boolean
}

class App extends React.Component<{}, State> {
  state = {
    showUnderConstruction: false
  }

  _hideUnderConstruction = () => {
    this.setState({ showUnderConstruction: false })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Adaptere.no - Stort utvalg av kabler, adaptere, overganger mm.</title>
          <meta name="description" content="Stort utvalg av kabler, adaptere, overganger mm." />
          <link rel="canonical" href="https://adaptere.no" />
          <meta property="og:title" content="Adaptere.no" />
          <meta property="og:description" content="Stort utvalg av kabler, adaptere, overganger mm." />
          <meta property="og:image" content="https://adaptere.no/thumbnail.png" />
          <meta property="og:url" content="https://adaptere.no" />
        </Helmet>

        <Header />

        {this.state.showUnderConstruction && <UnderConstruction hide={this._hideUnderConstruction} />}

        <Container>
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route path="/usb" render={() => <ProductList category="usb" />} />
            <Route path="/lyd" render={() => <ProductList category="lyd" />} />
            <Route path="/bilde" render={() => <ProductList category="bilde" />} />
            <Route path="/diverse" render={() => <ProductList category="diverse" />} />
            <Route path="/produkter/:sku" component={ProductDetails} />
            <Route path="/om-oss" component={About} />
            <Route path="/betingelser" component={Terms} />
            <Route path="/handlevogn" component={Cart} />
            <Route path="/kasse" component={Checkout} />
            <Route component={PageNotFound} />
          </Switch>
        </Container>

        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
