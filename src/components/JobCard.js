import React from 'react';
import sampleImage from '../images/sample-image.png';

function JobCard({cardStyle}) {

    return (
        <>
                <div style={cardStyle} className="mx-auto bg-white rounded">
                <div className="flex rounded w-100 mx-auto">
                <div><img className="img-sample" src={sampleImage} alt=""/></div>
                <div className="px-2">
                    <div className="job-title">UX UI Designer</div>
                    <div className='company'>Great Vibes - Information Technology</div>
                    <div className='location'>Chennai, Tamilnadu, India (In-office)</div>
                    <div className='description-main mt-24'>
                        <div className='mb-8'>Part-Time (9.00 am - 5.00 pm IST)</div>
                        <div className='mb-8'>Experience (1 - 2 years)</div>
                        <div className='mb-8'>INR (₹) 30,000 - 50,000 / Month</div>
                        <div>51-200 employees</div>
                    </div>
                    <button type='button' className="bg-blue text-white rounded-md px-4 py-2 mt-24">Apply Now</button>
                </div>
                </div>
                </div>
        </>
    );
}

export default JobCard;