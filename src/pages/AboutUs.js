import React, { Component } from "react";
// import { Link, NavLink } from "react-router-dom";
import { Header } from "../components";
// import ScrollAnimation from 'react-animate-on-scroll';
import "/home/tavita/projects/hey/app-name/app-name/src/components/styles/AboutUs.css";
// import "./styles/var.css";


class AboutUs extends Component {

 
  render() { 
    const styles={
       position: "absolute",
       background: "black"
  }

    return (
      <div className="AboutUs">
       <Header/>
         <div className="AboutUs_background"> 
         
         <header class="header_main">
	<div class="brand-box">
		<span class="brand">Example Brand</span>
	</div>
	
	<div class="text-box">
		<h1 class="heading-primary">
			<span class="heading-primary-main">Конно-спортивная школа</span>
			{/* <span class="heading-primary-sub">The secondary heading</span> */}
		</h1>
		{/* <a href="#" class="btn btn-white btn-animated">Discover our tours</a> */}
	</div>
</header>
         </div>

         <h1>Кто мы?</h1>
         
What is Lorem Ipsum?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Why do we use it?

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

        
      </div>
    );
  }
}

export default AboutUs;
