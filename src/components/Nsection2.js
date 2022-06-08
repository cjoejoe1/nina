import React from 'react'
import { Link } from "gatsby"
import * as Bs from "react-bootstrap"


const Headern = () => {
  return (
  <div>
    <div>
        <Bs.Container fluid style={{background: 'black', marginTop: 100}}>
            <Bs.Container>
                    
                    <h6 style={{marginTop: 100 , paddingTop : 50}}>
                    Pourquoi notre méthode est faite pour vous ?    
                    </h6>

                <Bs.Row>
                    <Bs.Col sm={6} style={{background:'black', paddingBottom: 50}}>
                        <div>
                      
                            <h3 >Votre charge mentale est saturée </h3>                             
                                <p>Vous avez mis le café au lait dans le micro-onde en vous levant le matin avant tout le monde, puis … après avoir couru toute la journée, vous vous endormez épuisée et vous vous dites « mince, le café au lait est resté dans le micro-onde … encore »</p>
                            <h3 >La performance au travail ne peut plus être une priorité : un peu comme boire ou conduire … il faut choisir  </h3>                             
                                <p>Votre relation avec votre patron ou manager se résume à la lettre suivante :
« cher xxxxx, nous avons vécu une vie intense toi et moi, mais beaucoup de choses ont changé dans ma vie et je ne pourrais pas être celle dont tu es tombée amoureux au début (disponible, efficace, pleine d’énergie …) , s’il te plaît accepte que je ne sois plus celle que j’étais il y a quelques temps … mais je te fais la promesse de faire le moins de grosses bourdes possibles pour ne pas te voir tout le temps fâché et éviter la rupture définitive. tu vois maintenant, j’ai un agenda de ministre sans la paie … »</p>

                            <h3 >Vous avez sacrifié votre féminité ….   </h3>                             
                                <p>Votre relation avec votre patron ou manager se résume à la lettre suivante :
                        Vous avez troqué les talons hauts et le maquillage pour des baskets et un chignon haut ….. … « je suis fatiguée et j’ai mal à la tête » …. Reviennent  assez souvent …. Et le mode gremlin devient quasi-permanent … au point d’entendre de manière exceptionnelle « tiens, tu souris c’est bizarre …. » </p>
                        </div>
                    </Bs.Col>
                    <Bs.Col sm={6} style={{background:'black'}}>
                        <div>
                            <h3 >Notre solution pour vous </h3>
                                <p>Allez, on arrête là et on parle solution. On prend tout son courage et on change. </p>
                                <p>La méthode : make my day like a dream, vous apprends pas à pas :</p><p  >
                                    <ul class='listedeux' style={{lineHeight:1.2}}>
                                        <li>Se <span class='strong'>recentrer sur soi-même </span>et apprendre à devenir </li>
                                        <li>Diminuer le <span class='strong'>charge du quotidien</span> en réfléchissant autrement </li>
                                        <li><span class='strong' >S’organiser de manière simple et précise</span> dans chaque domaine de la vie d’une maman (soi-même, intendance de la maison, le boulot, l’éducation des enfants …etc.)</li>
                                        <li><span class='strong' >Rester focus </span> dans l’exécution des tâches et<span class='strong'> profiter </span>du cadre que l’on a construit ;)</li>
                                    </ul></p>
                            
                            <h6>Investissez en vous ...</h6>
                            
                                    <Link to="/index/"><button class="button-click">
                               Ok, j'investis
                                    </button></Link>
                        </div>
                    </Bs.Col>
                </Bs.Row>
            </Bs.Container>
        </Bs.Container>
      
                    </div>
  </div>
  );
};

export default Headern;