import React from 'react';

const StepC = ({ formData, handleChangeInput, handlePrevStep, handleSubmitFormData }) => {
  return (
    <div>
      <section className='card-item-beige'>
        <h3>3. Récap</h3>
        <h5>Nos prestation</h5>
        <DataConfirmRow label='Contenant de base' value={formData.option1} />
        <DataConfirmRow label='Option meubles de tri' value={formData.option2} />
        <DataConfirmRow label='Option atelier de sensibilisation' value={formData.option3} />
        <DataConfirmRow label='Option communication sur les réseaux sociaux' value={formData.option4} />
        <DataConfirmRow label='Option obtenie du compost' value={formData.option5} />
        <DataConfirmRow label='Option rapport d’impact (vos statistiques)*' value={formData.option6} />
        <h5>Vos Coordonnées</h5>
        <DataConfirmRow label='Prénom' value={formData.firstName} />
        <DataConfirmRow label='Nom de famille' value={formData.lastName} />
        <DataConfirmRow label='Email' value={formData.email} />
        <DataConfirmRow label='Tél' value={formData.tel} />
        <DataConfirmRow label='Société' value={formData.society} />
        <DataConfirmRow label='Département' value={formData.Collectivity} />
        <DataConfirmRow label='Message' value={formData.message} />


        <div className="w-1/2 mr-2">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChangeInput}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <label htmlFor="agreeToTerms" className="block mb-1">J'accepte d'envoyer mes données</label>
        </div>
        <div className='flex justify-between'>
          <button
            onClick={handlePrevStep}
            style={{ width: '40%', marginTop: '20px' }}
            className="button-orange border-radius hover:button-orange text-white"
          >
            Précédent
          </button>
          <button
            onClick={handleSubmitFormData}
            style={{ width: '40%', marginLeft: 'auto', marginTop: '20px' }}
            className="button-orange border-radius hover:button-orange text-white"
          >
            Envoyer
          </button>
        </div>
      </section>
    </div>
  );
};

export default StepC;

const DataConfirmRow = ({ label, value }) => {
  return (
    <div className="flex justify-between mb-2">
      <span className="font-bold">{label}:</span>
      <span>{value}</span>
    </div>
  );
};
