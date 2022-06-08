import React from 'react'
import { Link } from "gatsby"
import * as Bs from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"


const Headern = () => {
  return (  
    <div>
    <Bs.Container fluid style={{background: 'white', marginTop: 100}}>
            <Bs.Container>
                <Bs.Row>
                    <Bs.Col sm={6} style={{background:'white'}}>
                        
                        <div>
                            <h6 style={{color: 'black'}}>Mon histoire, mon why</h6>                             
                                <div>
                                    <p style={{color:'black',fontSize: 17, marginTop:30}}>Maman de 4 enfants … <br/>Il y a eu loulou n°1 … puis<br/> Des jumeaux …. Puis <br/>Dans le lot, mon coup de cœur avec le loulou et son « extra chromosomes »<br/>
                                    Et …. Enfin (j’espère) … le petit dernier<br/>Et il y a la vie, avec son lot de situations exceptionnelles, qui nous obligent à être « solution maker »<br/></p>
                                    <p style={{color:'black',fontSize: 17}}><span style={{marginTop : 20 }}>Beaucoup de bas … beaucoup de haut … une question …</span><br/></p>
                                    <p style={{color:'black',fontSize: 17}}>alors j’ai pris la plus jolie décision de toute ma vie : « être heureuse » c’est pas en option … c’est en série.<br/></p>
                                    <p style={{color:'black',fontSize: 17}}>J’ai trouvé plein d’idées, de clés pour faire de moi « le plus belle endroit sur la terre » et en faire profiter les autres et tous mes autres univers … et je me suis dit : « j’ai juste envie de les partager » … et j’ai fait un nouveau bébé d’un autre genre ….  <br/></p>                                       
                                </div>
                                
                                <Link to="/index/"><button class="button-click">
                               Ok, je découvre
                                </button></Link>   
                            
                        </div>
                    </Bs.Col>
                    <Bs.Col sm={6}><StaticImage src="../images/coquelicot.jpg" width={500} quality={100} alt="Createur" placeholder='NONE'/>
                    </Bs.Col>
                </Bs.Row>
            </Bs.Container>
        </Bs.Container>    
                         </div>
  );
};

export default Headern;