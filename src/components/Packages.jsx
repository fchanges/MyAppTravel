import "../styles/Package.css";

function Packages() {

  return (
    <div className="container-pack-travel">
      <div className="header">
        <h2>CHOOSE YOUR PACKAGES</h2>
        <hr />
      </div>
      <div className="pack-travel-flex">
        <div className="pack-travel-card">
          <img src="images/paket-travel-indonesia.png" alt="indonesia" usemap="#indo-map" />
          <map name="indo-map">
            <area shape="rect" coords="0,0,157,60" href="#" alt="travel-indonesia"/>
          </map>
          <h3>Indonesia</h3>
          <p>$1,500</p>
          <a className="bttn-indo" href="#">GO Traveling</a>
        </div>
        <div className="pack-travel-card">
          <img src="images/paket-travel-japan.png" alt="japan" usemap="#jpn-map" />
          <map name="jpn-map">
            <area shape="rect" coords="0,0,157,60" href="#" alt="travel-japan"/>
          </map>
          <h3>Japan</h3>
          <p>$1,812</p>
          <a className="bttn-jpn" href="#">GO Traveling</a>
        </div>
        <div className="pack-travel-card">
          <img src="images/paket-travel-india.png" alt="india" usemap="#india-map" />
          <map name="india-map">
            <area shape="rect" coords="0,0,157,60" href="#" alt="travel-india"/>
          </map>
          <h3>India</h3>
          <p>$1,933</p>
          <a className="bttn-india" href="#">GO Traveling</a>
        </div>
        <div className="pack-travel-card">
          <img src="images/paket-travel-china.png" alt="china" usemap="#china-map" />
          <map name="china-map">
            <area shape="rect" coords="0,0,157,60" href="#" alt="travel-china"/>
          </map>
          <h3>China</h3>
          <p>$2,114</p>
          <a className="bttn-chna" href="#">GO Traveling</a>
        </div>
        <div className="pack-travel-card">
          <img src="images/paket-travel-autralia.png" alt="autralia" usemap="#ausi-map" />
          <map name="ausi-map">
            <area shape="rect" coords="0,0,157,60" href="#" alt="travel-australia"/>
          </map>
          <h3>Australia</h3>
          <p>$1,933</p>
          <a className="bttn-ausi" href="#">GO Traveling</a>
        </div>
        <div className="pack-travel-card">
          <img src="images/paket-travel-korea.png" alt="korea" usemap="#korea-map" />
          <map name="korea-map">
            <area shape="rect" coords="0,0,157,60" href="#" alt="travel-korea"/>
          </map>
          <h3>Korea</h3>
          <p>$2,235</p>
          <a className="bttn-korea" href="#" >GO Traveling</a>
        </div>
      </div>
    </div>
  );
}

export default Packages;
