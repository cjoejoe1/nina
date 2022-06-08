import React from 'react'
import { Link } from "gatsby"
import * as Bs from "react-bootstrap"
// import {banimg} from "../images/banimg.png"
import { StaticImage } from "gatsby-plugin-image"

const Nsectionun = () => {
  return (
  <div>
    <Bs.Container fluid style={{background: 'black'}}>
        <Bs.Container style={{height: 500, width: 1280, margin: 'auto'}}>
          <Bs.Row>
            <h1 style={{marginTop : 70, marginBottom:30}}>FAITES DE VOTRE <span class="text">VIE</span>  UN <span class="text">RÊVE</span></h1>
          </Bs.Row> 
            <Bs.Row>
              <Bs.Col sm={6}>
                  <div> 
                      <h2 style={{marginTop : -10}}>DEVENEZ STRATÈGE</h2>
                      <StaticImage src="../images/logo.png" width={1200} height={600} quality={50} alt="Createur" placeholder='NONE'/>
                  </div>
              </Bs.Col>
              <Bs.Col sm={6}><StaticImage src="../images/Flower.png" width={900} height={600} quality={100} alt="Createur" placeholder='NONE'/></Bs.Col>

            </Bs.Row>
        </Bs.Container>
    </Bs.Container>
  </div>
  );
};

export default Nsectionun;