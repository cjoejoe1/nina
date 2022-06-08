import React from 'react'
import { Link } from "gatsby"
import * as Bs from "react-bootstrap"


const Nina = () => {
  return (
  <div>
        <Bs.Container fluid style={{background: 'whrite'}}>
            <Bs.Container style={{height: 'auto', width: 'auto', margin: 'auto'}}>
                <Bs.Row>
                    <div style={{marginTop: 50 , color: 'black', textAlign : 'center'}}>
                      
                        <h4>Maman débordée, passez du mode survie au <span style={{color : 'rgb(32,129,195'}}>mode création «Dream life»</span>, devenez <span style={{color : 'rgb(247,23,53)'}}>stratège</span> avec notre méthode et ne vous laisser plus faire … </h4>
                                <div class='liste1'style={{fontFamily: 'Josefin Sans Light' ,  color: 'black', marginLeft: 200, textAlign: 'center', lineHeight: 1,  marginBottom: 30 , marginTop:30}}>
                                <ul>
                                    <li>Concevez chaque pan de votre vie et de celle de votre famille, </li>
                                    <li>Créez le cadre en optimisant la gestion de votre temps  </li>
                                    <li>Libérez votre <span style={{color : 'rgb(32,129,195', fontFamily : 'Futura XBlk BT' }}>«potentiel bonheur»</span> pour tous les instants de votre vie</li>
                                </ul>
                                </div>
                            <h5 style={{ marginBottom:100 }}>On vous donne <span style={{color : 'rgb(247,23,53)', fontFamily : 'Futura XBlk BT' }}>la méthode</span>, tout est dans le e-book <span style={{color : 'black', fontFamily : 'Futura XBlk BT' }}><br/>
                            "Make my day like a dream." </span>
                            </h5>
                        
                            <Link to="/index/"><button class="button-click">
                               Ok, je tente
                            </button></Link>               
                    </div>            
                </Bs.Row>
            </Bs.Container>
        </Bs.Container>
      
  </div>
  );
};

export default Nina;