import './Footer.css'
import 'animate.css'

export function Footer(){

  

    return(
        <>
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Compañía de Hoteles en venecia</h3>
          <ul>
            <li><a href="#">Acerca de Nosotros</a></li>
            
            <li><p>Contacto</p></li>
            <li><p>325487254</p></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Conéctate con Nosotros</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/f.jpg?alt=media&token=c5628b56-a3ff-424f-9d58-5fe8a64b1323" alt="Facebook Logo" style={{ width: '50px', height: '50px' }} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/t.jpg?alt=media&token=f8598901-6164-4de6-a246-aba277ec16ff" alt="Twitter Logo" style={{ width: '50px', height: '50px' }} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/m.jpg?alt=media&token=afa828a1-0302-4a46-8346-c55977f57110" alt="Instagram Logo" style={{ width: '50px', height: '50px' }} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/y.png?alt=media&token=d83c187a-c530-4fb0-b3ca-1bf6303e37b5" alt="YouTube Logo" style={{ width: '50px', height: '50px' }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Nombre de la Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
        
        </>

    )

}
