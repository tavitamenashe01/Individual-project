import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/MainText.css";
import "./styles/var.css";

import ScrollAnimation from "react-animate-on-scroll";
import "./styles/AnimatedText.css";
import "animate.css/animate.min.css";

import iconHorse from "../images/horse.svg";
import iconJockey from "../images/jockey.svg";
import iconEquestrian_track from "../images/equestrian_track.svg";
import iconTrophy from "../images/trophy.svg";
import iconHorse_shoe from "../images/horse_shoe.svg";

class MainText extends Component {
  render() {
    // const active = {
    //   // borderBottom: "3px solid var(--main-color)",
    //   color: "var(--main-color)",
    // };
    // const animText = {
    //   "margin-top": "30%"
    // };
    return (
      <div className="MainText container col-12">
        <div className="wrapper">
          <div className="heading">
            <h1 className="MainHeader">Конно-спортивная школа Бишкек</h1>
            <p className="MainParagraph">
              Мы научим вас великолепно ездить верхом
            </p>
          </div>
        </div>

        <div class="scroll-down" />


<div className="block">

 <div className="animationTextBlock">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          id="animatedStyles"
          // style={animText}
        >
       
          <h1 className="animatedHeader">Хочешь научиться ездить верхом?</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <h2 className="animatedH2">
            {/* <a href='https://daneden.github.io/animate.css/'> */}
            Конно-спортивная школа
            {/* </a> */}
          </h2>
        </ScrollAnimation>
</div></div>
        {/* <a href="https://icons8.com/icon/25691/катание-на-пони">Катание на пони icon by Icons8</a> */}
        <div className="horse-icons">
        <img src={iconHorse}  alt="" />
        <img src={iconJockey} style={{width:100}}  alt=""/>
        <img src={iconEquestrian_track} alt=""/>
        <img src={iconTrophy} alt="" />
        <img src={iconHorse_shoe} alt="" />
</div>
        <div className="mainBlock">
          <div className="HalfCarousel">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade col-6"
              data-ride="carousel"
              //   style={{"max-width": "50%"}}
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://avatars.mds.yandex.net/get-pdb/472427/e150db67-346c-4027-87a6-64723e229022/orig"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.topendsports.com/sport/equestrian/images/equestrian-freeimages.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://eanews.ru/files/viesdka.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleFade"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true" />
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleFade"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true" />
                <span class="sr-only">Next</span>
              </a>
            </div>

            <div className="CarouselText container col">
              <h1 className="carousel-header">О нас</h1>
              <p className="carousel-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quo placeat alias voluptatibus veritatis inventore esse
                recusandae! Fugit temporibus, fugiat quisquam esse! Repellat,
                magnam perspiciatis!
              </p>
              <h4 className="carousel-header">Присоединяйтесь!</h4>
              <p className="carousel-text">
                alias voluptatibus corporis voluptatem ea aspernatur, sunt rem
                veritatis inventore esse recusandae! Fugit, aliquid. Dignissimos
                perspiciatis natus, laborum, sequi impedit modi architecto
                exercitationem
              </p>
              <button className="btn btn-primary">
                <Link to="/AboutUs">Подробнее о нас</Link>
              </button>
            </div>
          </div>
        </div>

        <p>In this example, we have created a fixed background image that will disappear slowly on scroll. Scroll the page to see the effect. <strong>Note:</strong> Try to remove the background-attachment property to really understand this example.</p>

        <div className="fixedBg">
          {/* <img src="https://static.wixstatic.com/media/d75657_b4c7f2bb0c0e442791e36bad3f588704~mv2_d_5107_3192_s_4_2.jpg/v1/fill/w_1600,h_1000,al_c,q_90/file.jpg" alt="" /> */}
        </div>

        

     <div className="textBlock">text
     Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
     Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
     В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
     </div>


      </div>
    );
  }
}

export default MainText;
