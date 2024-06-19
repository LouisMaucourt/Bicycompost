import React from 'react';

// Assurez-vous que chaque composant d'étape accepte la prop `onChange`
const StepA = ({ onChange }) => {
  return (
    <section className='card-item-beige'>
      {/* Exemple d'un champ de saisie pour le prénom */}
      <input type="text" name="firstName" onChange={(event) => onChange(event)} />
    </section>
  );
};

export default StepA;
