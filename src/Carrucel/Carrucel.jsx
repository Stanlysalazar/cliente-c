import "./Carrucel.css"
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Carrucel(){
    return(
        <>
         <div style={{ width: '80%', margin: 'auto' }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/h1.jpg?alt=media&token=598a60b0-7dc7-4319-88c5-a1a2cfa68c1b"
            alt="Primera Imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/h2.jpg?alt=media&token=40b3a3a5-a821-443c-a70b-287b56081e45"
            alt="Segunda Imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/h3.jpg?alt=media&token=98dc825e-11bc-422f-8509-237ed092e493"
            alt="Tercera Imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/h4.jpg?alt=media&token=24850609-4cff-404a-8728-87d280db2d76"
      alt="Tercera Imagen"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/h5.jpg?alt=media&token=5b3f48fa-b8b5-4922-aef0-e3d7a096a2bc"
      alt="Tercera Imagen"
    />
  </Carousel.Item>
        
      </Carousel>
    </div>
    

        
        
        </>
    )
  }
 