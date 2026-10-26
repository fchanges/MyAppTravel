import "../styles/Testimony.css"

function Testimony() {
  return (
      <div className="container-testimony">
      <div className="header">
        <h2>WHAT THEY SAY!</h2>
        <hr />
      </div>
      <div className="testimony-flex">
        <div className="testimony-items">
          <img src="images/people1.png" alt="" />
          <h4 className="visitor">Visitor Names</h4>
          <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            doloremque quae sit, explicabo qui aspernatur expedita doloribus.
            Cum vel magni expedita veniam. Tempore, nam nostrum. Ipsum vitae
            totam laudantium ut!</q>
        </div>
        <div className="testimony-items">
          <img src="images/people2.png" alt="" />
          <h4 className="visitor">Visitor Names</h4>
          <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            doloremque quae sit, explicabo qui aspernatur expedita doloribus.</q>
        </div>
        <div className="testimony-items">
          <img src="images/people3.png" alt="" />
          <h4 className="visitor">Visitor Names</h4>
          <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            doloremque quae sit, explicabo qui aspernatur expedita doloribus.
            Cum vel magni expedita veniam. Tempore, nam nostrum. Ipsum vitae
            totam laudantium ut!</q>
        </div>
        <div className="testimony-items">
          <img src="images/people4.png" alt="" />
          <h4 className="visitor">Visitor Names</h4>
          <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            doloremque quae sit, explicabo qui aspernatur expedita doloribus.
            Cum vel magni expedita veniam. Tempore, nam nostrum. Ipsum vitae
            totam laudantium ut!</q>
        </div>
      </div>
    </div>
  )
}

export default Testimony
