import React, { useEffect, useState } from 'react';
import StepA from './StepA';
import StepB from './StepB'; // Assuming you have StepB component implemented similarly
import StepC from './StepC';
import StepFinal from './StepFinal'; // Assuming you have StepFinal component implemented similarly

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    society: '',
    Collectivity: '',
    message: '',
    agreeToTerms: true,
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    option5: '',
    option6: ''
};

const StepArray = ['Nos prestations', 'Vos Coordonnées', 'Récap'];

const MultiStepForm = ({ showStepNumber }) => {
    const [step, setStep] = useState('Nos prestations');
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleNextStep = () => {
        if (step === 'Nos prestations') setStep('Vos Coordonnées');
        else if (step === 'Vos Coordonnées') setStep('Récap');
    };

    const handlePreviousStep = () => {
        if (step === 'Récap') setStep('Vos Coordonnées');
        else if (step === 'Vos Coordonnées') setStep('Nos prestations');
    };

    const handleChangeInput = (event) => {
        const { name, value, checked, type } = event.target;

        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: fieldValue,
        });
    };

    const handleSubmitFormData = () => {
        if (!formData.agreeToTerms) {
            alert(`Vous devez accepter les termes de condition d'utilisation`);
        } else {
            setStep('Final');
            setIsSubmitted(true);
        }
    };

    useEffect(() => {
        if (isSubmitted) {
            console.log(formData);
        }
    }, [formData, isSubmitted]);

    const renderTopStepData = () => {
        if (!showStepNumber || step === 'Final') {
            return null;
        }
        return (
            <section>
                {StepArray.map((item) => (
                    <div
                        key={item}
                        className={step === item ? 'active' : ''}
                        onClick={() => setStep(item)}
                    >
                        {item}
                    </div>
                ))}
            </section>
        );
    };

    return (
        <div id='sommaire' className="">
            {renderTopStepData()}
            {step === 'Nos prestations' ? (
                <StepA
                    formData={formData}
                    handleChangeInput={handleChangeInput}
                    handleNextStep={handleNextStep}
                />
            ) : null}
            {step === 'Vos Coordonnées' ? (
                <StepB
                    formData={formData}
                    handleChangeInput={handleChangeInput}
                    handlePreviewStep={handlePreviousStep}
                    handleNextStep={handleNextStep}
                />
            ) : null}
            {step === 'Récap' ? (
                <StepC
                    formData={formData}
                    handleChangeInput={handleChangeInput}
                    handlePrevStep={handlePreviousStep}
                    handleSubmitFormData={handleSubmitFormData}
                />
            ) : null}
            {step === 'Final' ? <StepFinal onSubmit={handleSubmitFormData} /> : null}
        </div>
    );
};

export default MultiStepForm;
