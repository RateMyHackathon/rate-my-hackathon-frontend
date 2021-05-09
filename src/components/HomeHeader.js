import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const HomeHeader = () => {
  return (
    <Container text>
    <Header
      as='h1'
      content='Imagine-a-Company'
      // inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      // inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
  );
};

export default HomeHeader;

// <div className="py-5 bg-light">
//       <div className="container">
//         <div className="position-relative overflow-hidden py-5 p-3 p-md-5 m-md-3 text-center">
//           <div className="col-md-5 mx-auto my-5"> {/* p-lg-5 */}
//             <h1 className="display-4 fw-normal">Rate My Hackathon</h1>
//             <p className="lead fw-normal">
//               Search for a hackathon
//             </p>
//           </div>
//           <div className="product-device shadow-sm d-none d-md-block"></div>
//           <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
//         </div>
//       </div>
//     </div>