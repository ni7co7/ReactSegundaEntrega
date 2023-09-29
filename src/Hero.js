import Logo from './logoblur.png'
/* import Fondo from './img/casa-verde.webp'; */
const Hero=()=>{

    return(
      

      <section class="hero is-primary is-small ">

        <div class="hero-head ">
          <nav class="navbar">
            <div class="container">
              <div className="hero-header">
                <a href='https://ni7co7.github.io/JSGIANFELICIentregaFinal/img/casa3.jpg' class="navbar-item">
                  <img className="hero-logo" src={Logo} alt="Logo"/>
                </a>
                <span class="navbar-burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Proyects
                  </a>
                  <a class="navbar-item">
                    Services
                  </a>
                  <a class="navbar-item">
                     Aboout Us
                  </a>
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fab fa-github"></i>
                      </span>
                      <span>Contact</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      
      
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">
             M G architecture studio
            </p>
            <p class="subtitle">
              state development
            </p>
          </div>
        </div>

        {/* <div className='container' > */}
        {/*     <section className='section' > */}
        {/*       <div className='columns'> */}
        {/*            <div className='column is-4' > */}
        {/*             <p>ESte es el  1</p> */}
        {/*            </div> */}
        {/*            <div className='column is-4' > */}
        {/*            <p>ESte es el 2</p> */}

        {/*            </div> */}

        {/*            <div className='column is-4' > */}
        {/*            <p>ESte es el 4</p> */}
        {/*            </div> */}
        {/*       </div> */}
        {/*     </section> */}
        {/* </div> */}
      
      
        <div class="hero-foot">
          <nav class="tabs">
            <div class="container">
              <ul>
                <li class="is-active"><a>Overview</a></li>
                <li><a>IA Modeling</a></li>
                <li><a>Reviews from our customers</a></li>
                <li><a>Awards</a></li>
                <li><a>Why choose us?</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

    )
}
export default Hero;
