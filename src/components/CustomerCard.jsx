import Image from "next/image";
import React, { useState } from "react";
import AvatarPic from "../../public/assets/avatar.png";
import Girl from "../../public/assets/girl.png";
import { removeCustomer } from "../redux/features/customers/customers";
import { useDispatch } from "react-redux";

function CustomerCard({ customer, setCustomerDetails,onClick, setEditView}) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(null);


  const handleDelete = () => {
    dispatch(removeCustomer(customer.id));
  };

  const handleEdit =() =>{
    onClick()
    setTimeout(()=>{setEditView(true)},100)
    
    setShow(null)
  }

  const openDetails = ()=>{
    setCustomerDetails(true)
    onClick()
  }
  return (
    <tbody className="w-full" key={customer.id}>
      <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
        <td className="pl-4 cursor-pointer" onClick={openDetails}>
          <div className="flex items-center">
            <div className="w-10 h-10" >
              <Image
                src={customer.gender == "Hombre" ? AvatarPic : Girl}
                alt="Foto del cliente"
              />
            </div>
            <div className="pl-4">
              <p className="font-medium">{customer.fullName}</p>
              <p className="text-xs leading-3 text-gray-600 pt-2">
                Nombre completo
              </p>
            </div>
          </div>
        </td>
        <td className="pl-12">
          <p className="text-sm font-medium leading-none text-gray-800">
            {customer.gender}
          </p>

          <hr className="solid" />
        </td>
        <td className="pl-12">
          <p className="font-medium">{customer.age}</p>
          <p className="text-xs leading-3 text-gray-600 mt-2">18/05/1969</p>
        </td>
        <td className="pl-20">
          <p className="font-medium">{customer.phone}</p>
          <p className="text-xs leading-3 text-gray-600 mt-2">
            Numero de contacto
          </p>
        </td>
        <td className="pl-20">
          <p className="font-medium">{customer.email}</p>
          <p className="text-xs leading-3 text-gray-600 mt-2">Correo</p>
        </td>

        <td className="px-7 2xl:px-0">
          {show == 0 ? (
            <button
              onClick={() => setShow(null)}
              className="focus:outline-none pl-7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setShow(0)}
              className="focus:outline-none pl-7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          {show == 0 && (
            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
              <div className="text-xs w-full hover:bg-[#808cf6] py-4 px-4 cursor-pointer hover:text-white" onClick={handleEdit}>
                <p>Editar</p>
              </div>

              <div
                className="text-xs w-full hover:bg-[#808cf6] py-4 px-4 cursor-pointer hover:text-white"
                onClick={handleDelete}
              >
                <p>Eliminar</p>
              </div>
            </div>
          )}
        </td>
      </tr>
    </tbody>
  );
}

export default CustomerCard;
