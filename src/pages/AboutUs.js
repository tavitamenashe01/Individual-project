import React, { Component } from "react";
// import { Link, NavLink } from "react-router-dom";
import { Header } from "../components";
// import ScrollAnimation from 'react-animate-on-scroll';
import "/home/tavita/projects/hey/app-name/app-name/src/components/styles/AboutUs.css";
// import "./styles/var.css";
import quote from "../images/two-quotes.svg"

class AboutUs extends Component {
  render() {
    return (
      <div className="AboutUs">
        <div className="AboutUs_background">
          <header class="header_main">
            <Header />
            <div class="brand-box">
              {/* <span class="brand">Example Brand</span> */}
            </div>

            <div class="text-box">
              <h1 class="heading-primary">
                <span class="heading-primary-main">Конно-спортивная школа</span>
                <hr className="line" />
                {/* <span class="heading-primary-sub">The secondary heading</span> */}
              </h1>
              {/* <a href="#" class="btn btn-white btn-animated">Discover our tours</a> */}
            </div>
          </header>
        </div>
        <h1 className="heading_whoWeAre">Кто мы?</h1>
        {/* <hr className="second-line"/> */}
        <div className="block_aboutUs">
          <div className="text-block row col-6">
            <p className="text">
              Нам пришлось начинать все с нуля: закупать лошадей, имеющих
              высокую ценность в спорте и способных передавать свои уникальные
              качества потомству, восстанавливать инфраструктуру клуба, искать
              лучший персонал для школы. На сегодняшний день наша школа верховой
              езды совмещает в себе уникальные методики Советского спорта,
              современные разработки и мировой тренерский опыт, что выводит на
              высокий уровень качество предоставляемых нами услуг.
            </p>
          </div>
          {/* <img src="http://www.sport.gov.kg/public/images/img_library/%D0%A7%D0%B5%D0%BC%D0%BF%D0%B8%D0%BE%D0%BD%D0%B0%D1%82%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%20%D0%BF%D0%BE%20%D0%BA%D0%BE%D0%BD%D0%BD%D0%BE%D0%BC%D1%83%20%D1%81%D0%BF%D0%BE%D1%80%D1%82%D1%83/small600/201502211659017.JPG" /> */}
        </div>

        <div className="quote_block">
        <img className="quote_img" src={quote} alt="quote"/>

          <div className="quote_text">
            Мы купили двух лошадей — и тут же появились ребятишки, молодежь,
            стали тренироваться и выступать. Приобрели еще лошадей и детей стало
            больше. Они начали побеждать сначала на Чемпионате области, потом
            выиграли все в соседних областях, потом — кубок Приволжского
            федерального округа. А недавние соревнования — все 11 первых мест
            наши! Ни одной золотой медали никому не отдали.
          </div>
            
            <div className="photo_name">
            <p className="quote_author">Виктор Николаевич</p>
             <img className="quote_user_photo" src="https://image.flaticon.com/icons/svg/149/149071.svg"/>
             <p className="quote_author">Основатель конной школы</p>
            </div>

        </div>

<div className="container row">
        <div className="photooo">
        <a href="#" class="photo">
  <h1 className="Amber">Amber Heard</h1>
    <img src="http://www.sport.gov.kg/public/images/img_library/%D0%A7%D0%B5%D0%BC%D0%BF%D0%B8%D0%BE%D0%BD%D0%B0%D1%82%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%20%D0%BF%D0%BE%20%D0%BA%D0%BE%D0%BD%D0%BD%D0%BE%D0%BC%D1%83%20%D1%81%D0%BF%D0%BE%D1%80%D1%82%D1%83/small600/201502211659017.JPG" />
  <div class="glow-wrap">
    <i class="glow"></i>
  </div>
</a>
</div>
</div>
      </div>
    );
  }
}

export default AboutUs;
