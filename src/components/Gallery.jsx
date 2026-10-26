import '../styles/Gallery.css'

function Gallery() {

  return (
    <div id="gallery" className="container-damn-gallery">
      <div className="header">
        <h2>GALLERY</h2>
        <hr/>
        <div className="damn-gallery-flex">
          <div className="damn-gallery-items">
            <figure className="japan-fig">
              <img className="jpn-gall-img" src="images/1_Japan.png" alt="japan-gallery" useMap='#jpn-gall'/>
              <map name="jpn-gall">
                <area shape="rest" coords="899,0,0,649" href="../gallery/japan" alt="japan-gallery" />
              </map>
              <figcaption>
                <strong className="visit"><em>Visit</em></strong>&nbsp;Japan
                </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure className="sydney-gallery">
              <img className="sdny-gall-img" src="images/2_Sydney.png" alt="sydney-gallery" useMap='#sdny-gall' />
              <map name="sdny-gall">
                <area shape="rest" coords="899,0,0,649" href="../gallery/sydney" alt="sydney-gallery" />
              </map>
              <figcaption>
                <strong className="visit"><em>Visit</em></strong>&nbsp;Sydney
              </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure className="indo-gallery">
              <img className="indo-gall-img" src="images/3_Indonesia.png" alt="indo-gallery" useMap='#indo-gall' />
              <map name="indo-gall">
                <area shape="rest" coords="899,0,0,649" href="../gallery/indonesia" alt="indo-gallery" />
              </map>
              <figcaption>
                <strong className="visit"><em>Visit</em></strong>&nbsp;Indonesia
              </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure className="kor-gallery">
              <img className="kor-gall-img" src="images/4_Korea.png" alt="korea-gallery" useMap='#kor-gall' />
              <map name="kor-gall">
                <area shape="rest" coords="899,0,0,649" href="../gallery/korea" alt="korea-gallery" />
              </map>
              <figcaption>
                <strong className="visit"><em>Visit</em></strong>&nbsp;Korea
              </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure className="chn-gallery">
              <img className="chn-gall-img" src="images/5_China.png" alt="china-gallery" useMap='#chn-gall' />
              <map name="chn-gall">
                <area shape="rest" coords="899,0,0,649" href="../gallery/china" alt="china-gallery" />
              </map>
              <figcaption>
                <strong className="visit"><em>Visit</em></strong>&nbsp;China
              </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure className="india-gallery">
              <img className="india-gall-img" src="images/6_India.png" alt="india-gallery" useMap='#indi-gall' />
              <map name="indi-gall">
                <area shape="rest" coords="899,0,0,649" href="../gallery/india" alt="india-gallery" />
              </map>
              <figcaption>
                <strong className="visit"><em>Visit</em></strong>&nbsp;India
              </figcaption>
            </figure>
          </div>
        <a href='#'>Visit more..</a>
        </div>
      </div>
    </div>
  );
}

export default Gallery
