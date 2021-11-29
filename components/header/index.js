import React from 'react';
import Col from '../col';
import ContainerFluid from '../container-fluid'
import Row from '../row';

function Header({ children }) {
    return (
      <header>
          <ContainerFluid>
              <Row>
                  <Col>
                    Berkay
                  </Col>
              </Row>
          </ContainerFluid>
      </header>
    );
  }
  
  export default Header;