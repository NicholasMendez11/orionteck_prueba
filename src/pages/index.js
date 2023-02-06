import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import CustomerCard from "@/components/CustomerCard";
import NuevoCliente from "@/components/NuevoCliente";
import CustomerDetails from "@/components/CustomerDetails";
import CustomerEdit from "@/components/CusomerEdit";
import Lottie from "lottie-react";
import Empty from "../../public/assets/empty.json";
export default function Home() {

  const [customerModal, setCustomerModal] = useState(false)
  const [customerDetails, setCustomerDetails] = useState(false)
  const [selected, setSelected ] = useState({})
  const customers =  useSelector((state)=> state.customer)
  const [data, setData] = useState({})
  const [editView, setEditView] = useState(false)
  
  useEffect(()=>{
      setData(selected)
  },[selected])
  return (
    <>
    
      <div className="w-full sm:px-2 m-5">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Clientes
            </p>
            <div>
              <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-[#2F76E6] hover:bg-[#808cf6] focus:outline-none rounded" onClick={()=>setCustomerModal(true)}>
                <p className="text-sm font-medium leading-none text-white">
                  Nuevo cliente
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          { customers.length >=1 ? <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Cliente</th>
                <th className="font-normal text-left pl-12">Sexo</th>
                <th className="font-normal text-left pl-12">Edad</th>
                <th className="font-normal text-left pl-20">Telefono</th>
                <th className="font-normal text-left pl-20">Correo</th>
              </tr>
            </thead>
            {customers.map(customer => (
              <CustomerCard customer={customer} key={customer.id} setCustomerDetails={setCustomerDetails} setEditView={setEditView} onClick={()=>setSelected(customer)}/>
            ))}
          </table>:<div>
          <Lottie animationData={Empty} loop={true} style={{height:500}} />
            <h1>No hay nada aqui</h1>
            <p>Intenta agregando un nuevo <span onClick={()=>setCustomerModal(true)} className=" text-[#2F76E6] hover:text-[#808cf6] hover:cursor-pointer ">Cliente</span></p>
            </div>}
        </div>
        {customerModal && <NuevoCliente setCustomerModal={setCustomerModal}/>}
        {customerDetails && <CustomerDetails setCustomerDetails={setCustomerDetails} customer={data}/>}
        {editView && <CustomerEdit setEditView={setEditView} customer={data}/>}
      </div>
      
    </>
  );
}
