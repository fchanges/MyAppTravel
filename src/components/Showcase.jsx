import '../styles/Showcase.css'

function showcase() {

  return (
    <div className="container-showcase-damn">
      <div className="showcase-damn-flex">
        <div className="showcase-damn-items">
          <img
            src="images/showcase_i_love_indonesia.png"
            alt="showcase - DAMN i love indonesia"
          />
        </div>
        <div className="showcase-damn-items">
          <h2>I Love INDONESIA</h2>
          <h4>Papuan History & Customs</h4>
          <p className="showcase-damn-items-p">
            Papua is a province located on the northern coast of Papua, Indonesia. Previously known as West Irian (1956–1973) and Irian Jaya (1973–2000), Papua encompassed the entire land of Papua, the former Residency of West New Guinea. The capital of Papua is Jayapura, which borders Papua New Guinea.
          </p>
          <a href='#'>More info..</a>
        </div>
      </div>
    </div>
  
  );
}

export default showcase
