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
    drone: '', // Add radio button state to formData
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    option5: '',
    option6: ''
};

const StepArray = ['Nos prestations', 'Vos Coordonnées', 'Récap']; // Assuming you have these steps defined

const MultiStepForm = ({ showStepNumber }) => {
    const [step, setStep] = useState('A');
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleNextStep = () => {
        if (step === 'A') setStep('B');
        else if (step === 'B') setStep('C');
    };

    const handlePreviousStep = () => {
        if (step === 'C') setStep('B');
        else if (step === 'B') setStep('A');
    };

    const handleChangeInput = (event) => {
        const { name, value, checked, type } = event.target;

        // For checkboxes, handle the checked property
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
            {step === 'A' ? (
                <StepA
                    formData={formData}
                    handleChangeInput={handleChangeInput}
                    handleNextStep={handleNextStep}
                />
            ) : null}
            {step === 'B' ? (
                <StepB
                    formData={formData}
                    handleChangeInput={handleChangeInput}
                    handlePreviewStep={handlePreviousStep}
                    handleNextStep={handleNextStep}
                />
            ) : null}
            {step === 'C' ? (
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
