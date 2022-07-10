import imagen1 from "../componentes/assets/img/adult.jpg";
import imagen2 from "../componentes/assets/img/bridge.webp";
import imagen3 from "../componentes/assets/img/castillo.webp";
import imagen4 from "../componentes/assets/img/sofa.webp";
import imagen5 from "../componentes/assets/img/student.webp";
import imagen6 from "../componentes/assets/img/work.webp";
import imagen7 from "../componentes/assets/img/office.webp";
import imagen8 from "../componentes/assets/img/building.webp";
import imagen9 from "../componentes/assets/img/prague.jpg";
const Carrusel = () => {
  return (
    <>
      <div className="box-carrusel">
        <img className="box-carousel-img" src={imagen1} alt="1" />
        <img className="box-carousel-img" src={imagen2} alt="2" />
        <img className="box-carousel-img" src={imagen3} alt="3" />
        <img className="box-carousel-img" src={imagen4} alt="4" />
        <img className="box-carousel-img" src={imagen5} alt="5" />
        <img class="box-carousel-img" src={imagen6} alt="6" />
        <img className="box-carousel-img" src={imagen7} alt="7" />
        <img className="box-carousel-img" src={imagen8} alt="8" />
        <img className="box-carousel-img" src={imagen9} alt="9" />
      </div>
    </>
  );
};

export default Carrusel;
