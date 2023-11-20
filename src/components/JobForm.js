// JobForm.js
import React, { useState } from 'react';
import Header from './Header';
import JobCard from './JobCard';

const JobForm = () => {
    const cardStyle = {
        padding: '16px 24px',
        width: '830px',
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '10px',
        border: '1px solid #DADEDF',
    
}
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderStepper = () => {
    const stepperItems = ['Step 1', 'Step 2'];

    return stepperItems.map((item, index) => {
      if (index < step - 1) {
        return null; // hide previous steps
      }
      if (index > step - 1) {
        return null; // hide next steps
      }

      return (
        <div key={index} className={`text-center step-navigation cursor-pointer ${step === index + 1 ? 'text-blue-500' : 'text-gray-500'}`} onClick={() => setStep(index + 1)}>
          {item}
        </div>
      );
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step active">
            <Header renderStepper={renderStepper}/>
             
            <div>
                <label htmlFor="jobTitle" className="block  text-left text-sm font-medium">Job title<span className='astricks'>*</span></label>
                <input type="text" id="jobTitle" name="jobTitle" className="mt-1 w-full border rounded-md" placeholder="ex. UX UI Designer" />
            </div>

            <div className='mt-24'>
                <label htmlFor="companyName" className="block  text-left text-sm font-medium">Company name<span className='astricks'>*</span></label>
                <input type="text" id="companyName" name="companyName" className="mt-1 w-full border rounded-md" placeholder="ex. Google"/>
            </div>

            <div className='mt-24'>
                <label htmlFor="industry" className="block  text-left text-sm font-medium">Industry<span className='astricks'>*</span></label>
                <input type="text" id="industry" name="companyName" className="mt-1 w-full border rounded-md" placeholder="ex. Information Technology" />
            </div>

            <div className='flex mt-24 mb-06'>
            <div className="w-1/2 pr-5">
                <label htmlFor="location" className="block  text-left text-sm font-medium">Location</label>
                <input type="text" id="location" name="companyName" className="mt-1 w-full border rounded-md" placeholder="ex. Chennai"/>
            </div>

            <div className="w-1/2">
                <label htmlFor="remoteType" className="block text-left text-sm font-medium">Remote type</label>
                <input type="text" id="location" name="companyName" className="mt-1 w-full border rounded-md" placeholder='ex. In-office'/>
            </div>
            </div>
          </div>
        );
      case 2:
        return (
        <div className="step active">
                  <Header renderStepper={renderStepper}/>
            <div className='flex'>
            <div className="w-1/2 pr-5">
                <label htmlFor="experience_min" className="block  text-left text-sm font-medium">Experience</label>
                <input type="text" id="experience_min" name="experience_min" className="mt-1 w-full border rounded-md" placeholder="Minimum"/>
            </div>

            <div className="w-1/2">
                <label htmlFor="experience_max" className="block text-left text-sm font-medium invisible">Minimum</label>
                <input type="text" id="experience_max" name="experience_max" className="mt-1 w-full border py-2 rounded-md" placeholder='Minimum'/>
            </div>
            </div>

            <div className='flex mt-24'>
            <div className="w-1/2 pr-5">
                <label htmlFor="salary_min" className="block  text-left text-sm font-medium">Salary</label>
                <input type="text" id="salary_min" name="salary_min" className="mt-1 w-full border rounded-md" placeholder="Minimum"/>
            </div>

            <div className="w-1/2">
                <label htmlFor="salary_max" className="block text-left text-sm font-medium invisible">Minimum</label>
                <input type="text" id="salary_max" name="salary_max" className="mt-1 w-full border py-2 rounded-md" placeholder='Minimum'/>
            </div>
            </div>
            <div className='mt-24'>
                <label htmlFor="totalEmp" className="block  text-left text-sm font-medium">Total employee</label>
                <input type="text" id="totalEmp" name="totalEmp" className="mt-1 w-full border rounded-md" placeholder="ex. 100" />
            </div>

            <div className='mt-24 mb-7'>
                <label htmlFor="industry" className="block text-left text-sm font-medium mb-1">Apply type</label>
                <div className="flex">
                <div className="flex items-center mr-16">
                    <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="inline-radio" className="ml-2">Quick apply</label>
                </div>
                <div className="flex items-center">
                    <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="inline-2-radio" className="ml-2">External apply</label>
                </div>
            </div>
            </div>
        </div>
        );
    //   case 3:
    //     return (
    //         <>
    //          <JobCard/>
    //         </>
    //     );
      default:
        return null;
    }
  };

  const renderCard = () => {

        if(step > 2){
            return (
                <>
                    <JobCard cardStyle={cardStyle}/>
                </>
            );
        } else{     
            return(
            <>
            <div className="job-card mx-auto bg-white p-32 rounded">        
                {renderStep()}
                <div className="flex justify-end">
                {step === 1 && <button type="button" onClick={nextStep} className="bg-blue text-white py-2 px-4 mt-93 rounded-md">Next</button>}
                {step === 2 && <button type="button" onClick={nextStep} className="bg-blue text-white py-2 px-4 mt-93 rounded-md">Save</button>}
                </div>
            </div>
            </>
        ) 
    }
  };
  return (
    <>
        <div>
            {renderCard()}
        </div>
    </>
   
  );
};

export default JobForm;
