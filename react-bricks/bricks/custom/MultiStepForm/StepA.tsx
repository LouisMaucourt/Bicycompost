import React from 'react';

const StepA = ({ formData, handleChangeInput, handleNextStep }) => {
  // Function to handle option change
  const handleOptionChange = (name, value) => {
    handleChangeInput({
      target: {
        name: name,
        value: value
      }
    });
  };

  return (
    <section className='card-item-beige'>
      <h5>1. Nos prestations</h5>
      <div className="grid min-h-screen w-full">

        {/* Section "Votre contenant de base*" */}
        <p>Votre contenant de base*</p>
        <div className="grid grid-cols-4 gap-2 rounded-xl  p-2">
          <div>
            <input type="radio" name="option1" id="option1_1" value="Bio-seau de 10 L" className="peer hidden" onChange={() => handleOptionChange('option1', 'Bio-seau de 10 L')} checked={formData.option1 === 'Bio-seau de 10 L'} />
            <label htmlFor="option1_1" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option1 === 'Bio-seau de 10 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Bio-seau de 10 L</label>
          </div>

          <div>
            <input type="radio" name="option1" id="option1_2" value="Bio-seau de 22 L" className="peer hidden" onChange={() => handleOptionChange('option1', 'Bio-seau de 22 L')} checked={formData.option1 === 'Bio-seau de 22 L'} />
            <label htmlFor="option1_2" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option1 === 'Bio-seau de 22 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Bio-seau de 22 L</label>
          </div>

          <div>
            <input type="radio" name="option1" id="option1_3" value="Bio-seau de 120 L" className="peer hidden" onChange={() => handleOptionChange('option1', 'Bio-seau de 120 L')} checked={formData.option1 === 'Bio-seau de 120 L'} />
            <label htmlFor="option1_3" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option1 === 'Bio-seau de 120 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Bio-seau de 120 L</label>
          </div>

          <div>
            <input type="radio" name="option1" id="option1_4" value="Ne sais pas" className="peer hidden" onChange={() => handleOptionChange('option1', 'Ne sais pas')} checked={formData.option1 === 'Ne sais pas'} />
            <label htmlFor="option1_4" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option1 === 'Ne sais pas' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Ne sais pas</label>
          </div>
        </div>

        {/* Section "Options meubles de tri*" */}
        <p>Options meubles de tri*</p>
        <div className="grid grid-cols-4 gap-2 rounded-xl  p-2">
          <div>
            <input type="radio" name="option2" id="option2_1" value="Meubles intérieurs" className="peer hidden" onChange={() => handleOptionChange('option2', 'Meubles intérieurs')} checked={formData.option2 === 'Meubles intérieurs'} />
            <label htmlFor="option2_1" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option2 === 'Meubles intérieurs' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Meubles intérieurs</label>
          </div>

          <div>
            <input type="radio" name="option2" id="option2_2" value="Meubles extérieurs" className="peer hidden" onChange={() => handleOptionChange('option2', 'Meubles extérieurs')} checked={formData.option2 === 'Meubles extérieurs'} />
            <label htmlFor="option2_2" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option2 === 'Meubles extérieurs' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Meubles extérieurs</label>
          </div>

          <div>
            <input type="radio" name="option2" id="option2_3" value="Les deux" className="peer hidden" onChange={() => handleOptionChange('option2', 'Les deux')} checked={formData.option2 === 'Les deux'} />
            <label htmlFor="option2_3" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option2 === 'Les deux' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Les deux</label>
          </div>

          <div>
            <input type="radio" name="option2" id="option2_4" value="Ne sais pas" className="peer hidden" onChange={() => handleOptionChange('option2', 'Ne sais pas')} checked={formData.option2 === 'Ne sais pas'} />
            <label htmlFor="option2_4" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option2 === 'Ne sais pas' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Ne sais pas</label>
          </div>
        </div>

        {/* Section "Votre contenant de base pour les ordures ménagères*" */}
        <p>Votre contenant de base pour les ordures ménagères*</p>
        <div className="grid grid-cols-4 gap-2 rounded-xl  p-2">
          <div>
            <input type="radio" name="option3" id="option3_1" value="Conteneur roulant" className="peer hidden" onChange={() => handleOptionChange('option3', 'Conteneur roulant')} checked={formData.option3 === 'Conteneur roulant'} />
            <label htmlFor="option3_1" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option3 === 'Conteneur roulant' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Conteneur roulant</label>
          </div>

          <div>
            <input type="radio" name="option3" id="option3_2" value="Benne à ordures" className="peer hidden" onChange={() => handleOptionChange('option3', 'Benne à ordures')} checked={formData.option3 === 'Benne à ordures'} />
            <label htmlFor="option3_2" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option3 === 'Benne à ordures' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Benne à ordures</label>
          </div>

          <div>
            <input type="radio" name="option3" id="option3_3" value="Ne sais pas" className="peer hidden" onChange={() => handleOptionChange('option3', 'Ne sais pas')} checked={formData.option3 === 'Ne sais pas'} />
            <label htmlFor="option3_3" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option3 === 'Ne sais pas' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Ne sais pas</label>
          </div>
        </div>

        {/* Section "Pavillon concerné par la collecte des biodéchets*" */}
        <p>Pavillon concerné par la collecte des biodéchets*</p>
        <div className="grid grid-cols-4 gap-2 rounded-xl  p-2">
          <div>
            <input type="radio" name="option4" id="option4_1" value="Conteneur roulant de 120 L" className="peer hidden" onChange={() => handleOptionChange('option4', 'Conteneur roulant de 120 L')} checked={formData.option4 === 'Conteneur roulant de 120 L'} />
            <label htmlFor="option4_1" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option4 === 'Conteneur roulant de 120 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Conteneur roulant de 120 L</label>
          </div>

          <div>
            <input type="radio" name="option4" id="option4_2" value="Conteneur roulant de 240 L" className="peer hidden" onChange={() => handleOptionChange('option4', 'Conteneur roulant de 240 L')} checked={formData.option4 === 'Conteneur roulant de 240 L'} />
            <label htmlFor="option4_2" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option4 === 'Conteneur roulant de 240 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Conteneur roulant de 240 L</label>
          </div>

          <div>
            <input type="radio" name="option4" id="option4_3" value="Conteneur roulant de 340 L" className="peer hidden" onChange={() => handleOptionChange('option4', 'Conteneur roulant de 340 L')} checked={formData.option4 === 'Conteneur roulant de 340 L'} />
            <label htmlFor="option4_3" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option4 === 'Conteneur roulant de 340 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Conteneur roulant de 340 L</label>
          </div>

          <div>
            <input type="radio" name="option4" id="option4_4" value="Conteneur roulant de 660 L" className="peer hidden" onChange={() => handleOptionChange('option4', 'Conteneur roulant de 660 L')} checked={formData.option4 === 'Conteneur roulant de 660 L'} />
            <label htmlFor="option4_4" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option4 === 'Conteneur roulant de 660 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Conteneur roulant de 660 L</label>
          </div>
        </div>

        {/* Section "Votre contenant de base pour les emballages*" */}
        <p>Votre contenant de base pour les emballages*</p>
        <div className="grid grid-cols-4 gap-2 rounded-xl  p-2">
          <div>
            <input type="radio" name="option5" id="option5_1" value="Bio-seau de 22 L" className="peer hidden" onChange={() => handleOptionChange('option5', 'Bio-seau de 22 L')} checked={formData.option5 === 'Bio-seau de 22 L'} />
            <label htmlFor="option5_1" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option5 === 'Bio-seau de 22 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Bio-seau de 22 L</label>
          </div>

          <div>
            <input type="radio" name="option5" id="option5_2" value="Bio-seau de 120 L" className="peer hidden" onChange={() => handleOptionChange('option5', 'Bio-seau de 120 L')} checked={formData.option5 === 'Bio-seau de 120 L'} />
            <label htmlFor="option5_2" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option5 === 'Bio-seau de 120 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Bio-seau de 120 L</label>
          </div>

          <div>
            <input type="radio" name="option5" id="option5_3" value="Bio-seau de 240 L" className="peer hidden" onChange={() => handleOptionChange('option5', 'Bio-seau de 240 L')} checked={formData.option5 === 'Bio-seau de 240 L'} />
            <label htmlFor="option5_3" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option5 === 'Bio-seau de 240 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Bio-seau de 240 L</label>
          </div>

          <div>
            <input type="radio" name="option5" id="option5_4" value="Bio-seau de 660 L" className="peer hidden" onChange={() => handleOptionChange('option5', 'Bio-seau de 660 L')} checked={formData.option5 === 'Bio-seau de 660 L'} />
            <label htmlFor="option5_4" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option5 === 'Bio-seau de 660 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Bio-seau de 660 L</label>
          </div>
        </div>

        {/* Section "Votre contenant de base pour le verre*" */}
        <p>Votre contenant de base pour le verre*</p>
        <div className="grid grid-cols-4 gap-2 rounded-xl  p-2">
          <div>
            <input type="radio" name="option6" id="option6_1" value="Bio-seau de 22 L" className="peer hidden" onChange={() => handleOptionChange('option6', 'Bio-seau de 22 L')} checked={formData.option6 === 'Bio-seau de 22 L'} />
            <label htmlFor="option6_1" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option6 === 'Bio-seau de 22 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Bio-seau de 22 L</label>
          </div>

          <div>
            <input type="radio" name="option6" id="option6_2" value="Bio-seau de 120 L" className="peer hidden" onChange={() => handleOptionChange('option6', 'Bio-seau de 120 L')} checked={formData.option6 === 'Bio-seau de 120 L'} />
            <label htmlFor="option6_2" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option6 === 'Bio-seau de 120 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Bio-seau de 120 L</label>
          </div>

          <div>
            <input type="radio" name="option6" id="option6_3" value="Bio-seau de 240 L" className="peer hidden" onChange={() => handleOptionChange('option6', 'Bio-seau de 240 L')} checked={formData.option6 === 'Bio-seau de 240 L'} />
            <label htmlFor="option6_3" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option6 === 'Bio-seau de 240 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Bio-seau de 240 L</label>
          </div>

          <div>
            <input type="radio" name="option6" id="option6_4" value="Bio-seau de 660 L" className="peer hidden" onChange={() => handleOptionChange('option6', 'Bio-seau de 660 L')} checked={formData.option6 === 'Bio-seau de 660 L'} />
            <label htmlFor="option6_4" className={`block cursor-pointer select-none rounded-xl p-2 text-center ${formData.option6 === 'Bio-seau de 660 L' ? 'green font-bold text-white' : 'bg-gray-300'}`}>Bio-seau de 660 L</label>
          </div>
        </div>

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

export default StepA;
