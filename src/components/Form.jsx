import React from 'react'

function Form() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Reservas</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Reservas y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className='bg-white shadow-md rounded-lg py-10 px-5'>
        <div>
          <label htmlFor='usuario' className='block text-gray-700 uppercase font-bold'>
            Nombre del Usuario
          </label>
          <input
            id='usuario'
            type="text"
            placeholder='Nombre del Usuario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
      </form>
    </div>
  )
}

export default Form