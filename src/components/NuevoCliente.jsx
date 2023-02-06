import React, { useState, useId } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../redux/features/customers/customers";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
const NuevoCliente = ({ setCustomerModal }) => {
  const dispatch = useDispatch();
  const id = useId();
  const [formValues, setFormValues] = useState({});
  const [direcciones, setDirecciones] = useState([
    {
      direccion: "",
    },
  ]);

  const handleTextSatateChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value, id });
  };
  const handleDirectionSatateChange = (e, index) => {
    let data = [...direcciones];
    data[index][e.target.name] = e.target.value;
    setDirecciones(data);
    setFormValues({ ...formValues, data });
  };

  const handleSubmit = () => {
    if (!formValues.fullName) {
      toast.error("Inserta un nombre para el contacto");
    } else {
     
      dispatch(addCustomer(formValues));
      setCustomerModal(false);
    }
  };

  const handleAddAddress = () => {
    let object = {
      direccion: "",
    };
    setDirecciones([...direcciones, object]);
  };

  const removeAddress = (index) => {
    let data = [...direcciones];
    data.splice(index, 1);
    setDirecciones(data);
    setFormValues({ ...formValues, data });
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div
        className="py-12 bg-[#22212175] transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <div className="w-full flex justify-start text-gray-600 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-wallet"
                width={52}
                height={52}
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
              </svg>
            </div>
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              Informacion del nuevo cliente
            </h1>
            <div>
              <label
                htmlFor="name"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Nombre Completo
              </label>
              <input
                name="fullName"
                id="name"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Roberto Mendez"
                onChange={(e) => handleTextSatateChange(e)}
              />
            </div>
            <div className="md:flex w-full">
              <div className="mr-4 ">
                {/* Sexo */}
                <label
                  htmlFor="countries"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Sexo
                </label>
                <select
                  name="gender"
                  id="countries"
                  onChange={(e) => handleTextSatateChange(e)}
                  className="mb-5 mt-2 p-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                >
                  <option value="Seleccionar">Seleccionar</option>
                  <option value="Hombre">Hombre</option>
                  <option value="Mujer">Mujer</option>
                </select>
              </div>

              <div>
                {/* edad */}
                <label
                  htmlFor="edad"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Edad
                </label>
                <input
                  name="age"
                  id="edad"
                  type="number"
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal  h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="0"
                  onChange={(e) => handleTextSatateChange(e)}
                />
              </div>
            </div>

            <label
              htmlFor="birthday"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Fecha de nacimiento
            </label>
            <div className="relative mb-5 mt-2">
              <input
                name="birthday"
                id="birthday"
                type="date"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="MM/YY"
                onChange={(e) => handleTextSatateChange(e)}
              />
            </div>

            <label
              htmlFor="email"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Correo Electronica
            </label>
            <div className="relative mb-5 mt-2">
              <input
                name="email"
                id="email"
                type="email"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="fulano@email.com"
                onChange={(e) => handleTextSatateChange(e)}
              />
            </div>

            <label
              htmlFor="phone"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Numero de telefono
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-info-circle"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={12} cy={12} r={9} />
                  <line x1={12} y1={8} x2="12.01" y2={8} />
                  <polyline points="11 12 12 12 12 16 13 16" />
                </svg>
              </div>
              <input
                name="phone"
                id="phone"
                className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="000-000-0000"
                onChange={(e) => handleTextSatateChange(e)}
              />
            </div>
            {direcciones.map((item, index) => (
              <div key={index}>
                <label
                  htmlFor="direccion"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Direccion #{index}
                </label>
                <div className="relative mb-5 mt-2 flex items-center">
                  <input
                    name="direccion"
                    type="text"
                    className="text-gray-600 focus:outline-none mr-2 p-2 focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="Calle # "
                    onChange={(e) => handleDirectionSatateChange(e, index)}
                    value={item.direccion}
                  />
                  <div className="hover:cursor-pointer ">
                    <IoAddOutline
                      size={25}
                      color={"#2F76E6"}
                      onClick={() => handleAddAddress()}
                    />
                  </div>
                  <div className="hover:cursor-pointer ">
                    <IoRemoveOutline
                      size={25}
                      color={"red"}
                      onClick={() => removeAddress(index)}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-start w-full">
              <button
                className="focus:outline-none transition duration-150 ease-in-out bg-[#2F76E6] hover:bg-[#808cf6] f rounded text-white px-8 py-2 text-sm"
                onClick={handleSubmit}
              >
                Guardar
              </button>
              <button
                className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onClick={() => setCustomerModal(false)}
              >
                Cancelar
              </button>
            </div>
            <div
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
              onClick={() => setCustomerModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
                className="icon icon-tabler icon-tabler-x"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NuevoCliente;
