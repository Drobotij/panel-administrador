import logo from '../img/logo.svg';
import inicio from '../img/inicio.svg';
import productos from '../img/productos.svg';
import mensajes from '../img/mensajes.svg';
import agregar from '../img/agregar.svg';

const SideBar = ({verSideBar, setverSideBar}) => {
  return (
    <div onMouseEnter={() => setverSideBar(!verSideBar)} onMouseLeave={() => setverSideBar(!verSideBar)} className={`bg-secondary transition-all overflow-hidden text-third ${verSideBar ? 'w-1/6': 'w-11'}`}>
        <div className="w-11/12 mx-auto pt-5">
            <img className="w-2/4 mx-auto" src={logo} alt="Pateleria natalie logo" />
        </div>
        <p className="bg-fourth mt-8 p-3 font-bold">{verSideBar ? "Panel": "P"}</p>
        <button className="py-3 hover:bg-primary transition-all w-full flex items-center"> 
          <img className=" mx-3 w-5" src={inicio} alt="Inicio icono" /><p className="text-third">Inicio</p>
        </button>
        <button className="py-3 hover:bg-primary transition-all w-full flex items-center"> 
          <img className=" mx-3 w-5" src={productos} alt="Inicio icono" /><p className="text-third">Productos</p>
        </button>
        <button className="py-3 hover:bg-primary transition-all w-full flex items-center"> 
          <img className=" mx-3 w-5" src={mensajes} alt="Inicio icono" /><p className="text-third">Mensajes</p>
        </button>
        <p className="bg-fourth mt-8 p-3 font-bold">{verSideBar ? "Atajos": "A"}</p>
        <button className="py-3 hover:bg-primary transition-all w-full flex items-center"> 
          <img className=" mx-3 w-5" src={agregar} alt="Inicio icono" /><p className="text-third">Agregar producto</p>
        </button>
    </div>
  )
}

export default SideBar