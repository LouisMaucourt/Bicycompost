import React from 'react';

const StepB = ({ formData, handleChangeInput, handleNextStep, handlePreviewStep }) => {
  return (
    <section className='card-item-beige'>
      <h5>2. Vos Coordonnées</h5>

      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label htmlFor="firstName" className="block mb-1">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleChangeInput(e)}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-1/2 ml-2">
          <label htmlFor="lastName" className="block mb-1">Nom de famille</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleChangeInput(e)}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChangeInput(e)}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-1/2 ml-2">
          <label htmlFor="tel" className="block mb-1">Téléphone</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={formData.tel}
            onChange={(e) => handleChangeInput(e)}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label htmlFor="society" className="block mb-1">Société</label>
          <input
            type="text"
            id="society"
            name="society"
            value={formData.society}
            onChange={(e) => handleChangeInput(e)}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-1/2 ml-2">
          <label htmlFor="Collectivity" className="block mb-1">Colléctivité</label>
          <select
            id="Collectivity"
            name="Collectivity"
            value={formData.Collectivity}
            onChange={(e) => handleChangeInput(e)}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Votre choix</option>
            <option value="department">Département</option>
            <option value="region">Régional</option>
            <option value="nation">National</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => handleChangeInput(e)}
          rows="6"
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Entrez votre message ici..."
        />
      </div>

      <div className='flex justify-between'>
        <button
          style={{ width: '40%', marginTop: '20px' }}
          onClick={handlePreviewStep}
          className="button-orange border-radius hover:button-orange text-white"
        >
          Précédent
        </button>
        <button
          style={{ width: '40%', marginLeft: 'auto', marginTop: '20px' }}
          onClick={handleNextStep}
          className="button-orange border-radius hover:button-orange text-white"
        >
          Suivant
        </button>

      </div>
    </section>
  );
};

export default StepB;
