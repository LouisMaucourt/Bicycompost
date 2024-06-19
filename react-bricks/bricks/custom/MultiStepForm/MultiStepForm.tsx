// import React, { useEffect, useState } from 'react';
// import StepA from './StepA';
// import StepB from './StepB';
// import StepC from './StepC';
// import StepD from './StepD';
// import StepFinal from './StepFinal';

// const initialFormData = {
//     firstName: '',
//     lastName: '',
//     businessName: '',
//     businessWebsite: '',
//     businessEmail: '',
//     agreeToTerms: false,
// };

// const StepArray = ['A', 'B', 'C', 'D'];

// const MultiStepForm = ({ showStepNumber }) => {
//     const [step, setStep] = useState("A");
//     const [formData, setFormData] = useState(initialFormData);
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const handleNextStep = () => {
//         if (step === 'A') setStep('B');
//         else if (step === 'B') setStep('C');
//         else if (step === 'C') setStep('D');
//     };

//     const handlePreviousStep = () => {
//         if (step === 'D') setStep('C');
//         else if (step === 'C') setStep('B');
//         else if (step === 'B') setStep('A');
//     };

//     const handleChangeInput = (event) => {
//         const fieldName = event.target.name;
//         let fieldValue;
//         if (fieldName === 'agreeToTerms') {
//             fieldValue = event.target.checked;
//         } else {
//             fieldValue = event.target.value;
//         }
//         setFormData({
//             ...formData,
//             [fieldName]: fieldValue,
//         });
//     };

//     const handleSubmitFormData = () => {
//         if (!formData.agreeToTerms) {
//             alert(`Vous devez accepter les termes de condition d'utilisation`);
//         } else {
//             setStep('Final');
//             setIsSubmitted(true);
//         }
//     };

//     useEffect(() => {
//         if (isSubmitted) {
//             console.log(formData);
//         }
//     }, [formData]);

//     const renderTopStepData = () => {
//         if (!showStepNumber || step === 'Final') {
//             return null;
//         }
//         return (
//             <section>
//                 {StepArray.map((item) => (
//                     <div
//                         key={item}
//                         className=""
//                         onClick={() => setStep(item)}
//                     >
//                         {item}
//                     </div>
//                 ))}
//             </section>
//         );
//     };

//     return (
//         <div className="flexx2">
//             {renderTopStepData()}
//             {step === 'A' && <StepA onChange={handleChangeInput} />}
//             {step === 'B' && <StepB onChange={handleChangeInput} />}
//             {step === 'C' && <StepC onChange={handleChangeInput} />}
//             {step === 'D' && <StepD onChange={handleChangeInput} />}
//             {step === 'Final' && <StepFinal onSubmit={handleSubmitFormData} />}
//         </div>
//     );
// };

// export default MultiStepForm;
