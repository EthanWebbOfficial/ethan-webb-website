import React from 'react';
import "../../App.css";
import "./aboutpage.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';
import AboutPageMain from "../../assets/aboutpagemain.png";
import BCFC from "../../assets/bcfc.png";
import RAMS from "../../assets/rams.png";
import EthanGraduation from "../../assets/graduation.png";
import Sporting from "../../assets/bromsgrove.png";
import BOOKS from "../../assets/books.png";

const AboutPage = () => {
    return (
      <>
      <Header />
        
        <section className="aboutpage section">
            <h2 className="page__title">About Me</h2>

            {/* SECTION 1: Intro */}
            <h2 className="section__title">Introduction</h2>
            <span className="section__subtitle">Why I love data science</span>


            <div className="aboutpage__container container grid">
                <img src={AboutPageMain} alt="" className="aboutpage__img" />

                <div className="aboutpage__data">

                <p className="aboutpage__description">
                <p>Lorem ipsum dolor sit amet. Eum dolores eligendi eum voluptas quia eos autem fuga. Ut laborum dolores ut quas quis ut laboriosam recusandae et velit culpa ut esse debitis rem reprehenderit quae qui dolor eius. Eum perferendis illo sit consequatur necessitatibus et enim totam aut eligendi saepe sit praesentium aperiam. In saepe dolores aut provident temporibus vel tempore tempore ut nesciunt laboriosam non Quis odio est necessitatibus amet ut voluptatem illum. </p><p>Ea quaerat temporibus 33 omnis quia non omnis assumenda est placeat voluptatem et voluptatem incidunt. Ut eveniet accusantium sed tempore galisum aut tenetur odit ut iste omnis sit quos voluptatem 33 quidem facere. Qui debitis nulla ut fugit ducimus hic expedita ipsum sit odit voluptate ea exercitationem asperiores qui dolores laudantium. Non assumenda consequatur et perferendis quisquam sit iusto laudantium aut voluptas atque. </p><p>Vel iste maiores ut alias quibusdam ut molestias pariatur et ipsa odio et accusamus perferendis aut eligendi possimus vel doloribus expedita. Qui tenetur cumque in delectus libero quo quae quos ut omnis fuga. </p>

                </p>

                </div>
            </div>
            {/* END OF SECTION 1: Intro */}

            {/* SECTION 2: Education */}
            <h2 className="section__title">Education</h2>
            <span className="section__subtitle">A little bit about my background</span>


            <div className="aboutpage__container container grid">
                <div className="aboutpage__data">

                <p className="aboutpage__description">
                <p>Lorem ipsum dolor sit amet. Eum dolores eligendi eum voluptas quia eos autem fuga. Ut laborum dolores ut quas quis ut laboriosam recusandae et velit culpa ut esse debitis rem reprehenderit quae qui dolor eius. Eum perferendis illo sit consequatur necessitatibus et enim totam aut eligendi saepe sit praesentium aperiam. In saepe dolores aut provident temporibus vel tempore tempore ut nesciunt laboriosam non Quis odio est necessitatibus amet ut voluptatem illum. </p><p>Ea quaerat temporibus 33 omnis quia non omnis assumenda est placeat voluptatem et voluptatem incidunt. Ut eveniet accusantium sed tempore galisum aut tenetur odit ut iste omnis sit quos voluptatem 33 quidem facere. Qui debitis nulla ut fugit ducimus hic expedita ipsum sit odit voluptate ea exercitationem asperiores qui dolores laudantium. Non assumenda consequatur et perferendis quisquam sit iusto laudantium aut voluptas atque. </p><p>Vel iste maiores ut alias quibusdam ut molestias pariatur et ipsa odio et accusamus perferendis aut eligendi possimus vel doloribus expedita. Qui tenetur cumque in delectus libero quo quae quos ut omnis fuga. </p>

                </p>

                </div>

                <img src={EthanGraduation} alt="" className="aboutpage__img" />
            </div>
            {/* END OF SECTION 2: Education */}


            {/* SECTION 3: Hobbies and Interests */}
            <h2 className="section__title">Interests and Hobbies</h2>
            <span className="section__subtitle">How I like to spend my time</span>


            <div className="aboutpage__container container grid">

                <div className="grid-hobby-container">
                    <img src={BCFC} alt="" className="aboutpage__img-hobby" />
                    <img src={RAMS} alt="" className="aboutpage__img-hobby" />
                    <img src={Sporting} alt="" className="aboutpage__img-hobby" />
                    <img src={BOOKS} alt="" className="aboutpage__img-hobby" />
                <div>

            </div>

                </div>

                <div className="aboutpage__data">

                <p className="aboutpage__description">
                <p>Lorem ipsum dolor sit amet. Eum dolores eligendi eum voluptas quia eos autem fuga. Ut laborum dolores ut quas quis ut laboriosam recusandae et velit culpa ut esse debitis rem reprehenderit quae qui dolor eius. Eum perferendis illo sit consequatur necessitatibus et enim totam aut eligendi saepe sit praesentium aperiam. In saepe dolores aut provident temporibus vel tempore tempore ut nesciunt laboriosam non Quis odio est necessitatibus amet ut voluptatem illum. </p><p>Ea quaerat temporibus 33 omnis quia non omnis assumenda est placeat voluptatem et voluptatem incidunt. Ut eveniet accusantium sed tempore galisum aut tenetur odit ut iste omnis sit quos voluptatem 33 quidem facere. Qui debitis nulla ut fugit ducimus hic expedita ipsum sit odit voluptate ea exercitationem asperiores qui dolores laudantium. Non assumenda consequatur et perferendis quisquam sit iusto laudantium aut voluptas atque. </p><p>Vel iste maiores ut alias quibusdam ut molestias pariatur et ipsa odio et accusamus perferendis aut eligendi possimus vel doloribus expedita. Qui tenetur cumque in delectus libero quo quae quos ut omnis fuga. </p>

                </p>

                </div>
            </div>
            {/* END OF SECTION 3: Hobbies and Interests */}


            {/* SECTION 4: My Values */}
            <h2 className="section__title">My Values</h2>
            <span className="section__subtitle">How I make decisions</span>

            <div className='container'>

                {/* First Set Begin */}
                <div className="aboutpage__info grid">
                    <div className="aboutpage__box wisdom_box">
                    <i class='bx bx-brain aboutpage__icon'></i>

                        <h3 className="aboutpage__title">Wisdom</h3>
                    </div>

                    <div className="aboutpage__box courage_box">
                        <i class='bx bx-check-shield aboutpage__icon'></i>

                        <h3 className="aboutpage__title">Courage</h3>
                    </div>

                    <div className="aboutpage__box moderation_box">
                    <i class='bx bxs-battery-charging aboutpage__icon'></i>

                        <h3 className="aboutpage__title">Moderation</h3>
                    </div>
                </div>
                {/* First Set End */}

                {/* Second Set Begin */}
                <div className="aboutpage__info grid">
                    <div className="aboutpage__box direction_box">
                        <i class='bx bxs-binoculars aboutpage__icon'></i>

                        <h3 className="aboutpage__title">Direction</h3>
                    </div>

                    <div className="aboutpage__box responsibility_box">
                    <i class='bx bxs-leaf aboutpage__icon'></i>

                        <h3 className="aboutpage__title">Leadership</h3>
                    </div>

                    <div className="aboutpage__box charisma_box">
                    <i class='bx bx-chat aboutpage__icon'></i>

                        <h3 className="aboutpage__title">Charisma</h3>
                    </div>
                </div>
                {/* Second Set End */}

            </div>
            {/* END OF SECTION 4: My Values */}

        </section>
  
      <Footer />
      <ScrollUp />
      </>
    );
  };


export default AboutPage