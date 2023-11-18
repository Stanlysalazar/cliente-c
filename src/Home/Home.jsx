import { useEffect, useState } from "react";
import "./Home.css";
import { Formulario } from "../Formulario/Formulario";
import { Historia } from "../Historia/Historia";
import {Footer} from "../Footer/Footer"
import {Carrucel} from "../Carrucel/Carrucel"

export function Home() {
  
  

  return (
    <>
      <div className="banner">
  <div className="row">
    <div className="col-12 col-md-5 text-white fw-bold">
      {/* Contenido del formulario */}
      <h3>Reserva con nosotros</h3>
      <p>Ubicado en la pintoresca costa, el Hotel Serenidad del Mar es un oasis de lujo y tranquilidad que ofrece una experiencia incomparable para aquellos que buscan escapar del bullicio cotidiano. Con una arquitectura elegante y una ubicación privilegiada frente al mar, nuestro hotel invita a los huéspedes a sumergirse en un mundo de serenidad y comodidad.</p>
      <hr />
      <Formulario />
    </div>
    <div className="col-12 col-md-7">
    <Carrucel/>
      </div>
    </div>
        
      </div>
      <section className='my-5'>
      <Historia/>
      </section>


      <section className='my-5'>
      <Footer/>
      </section> 
    </>
  );
}

  