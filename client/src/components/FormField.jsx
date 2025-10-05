import React from 'react'

const FormField = () => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Your Label</label>
      <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
    </div>
  )
}

export default FormField
