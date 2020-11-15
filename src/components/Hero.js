import React from "react";
import {NavLink} from "react-router-dom"

const Hero = () => {
  return (
    <section className="section hero featuredMovies has-bullets">
      <div className="container">
        <div className="slide featured">
          <h2 className="featured-title">Peaky Blinders</h2>
          <p className="featured-overview">
            المسلسل يدور حول البطل كالين مورفي في دور تومي شيلبي، قائد العصابة
            بالأضافة إلى سام نيل في دور المحقق المسؤول عن قمع العصابة. المسلسل
            مقتبس عن عائلة البيكي بلايندرز الحقيقية المسلسل عرض لاول مره علي بي
            بي سي 2 في 13 سبتمبر 2013 لمدة 6 حلقات
          </p>
          <p className="buttons">
            <NavLink to="#" className="button is-primary">
              شاهد الفيلم
            </NavLink>
            <NavLink to="#" className="button">
              إقرأ المزيد
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
