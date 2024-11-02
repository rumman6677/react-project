import { useEffect, useState } from "react";



function Service () {

  const [services, setServices] = useState()

  useEffect(() => {
       fetch('/service.json')
       .then(res => res.json())
       .then(data => setServices(data))
  }, [])

  return (
    <>
  <div className="grid grid-cols-3 gap-16 mt-32">
    {
    services?.map(service => (
      <div key={service.id}>
      <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{service.serviceName}</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{service.data}</p>
    </div>

    <img 
    className="object-cover w-full h-48 mt-2" 
    src={service.image}
    alt="NIKE AIR" />

    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">$ {service.price}</h1>
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
    </div>
</div>
      </div>
    ))
    }
  </div>
     
    </>
  )
}

export default Service;
