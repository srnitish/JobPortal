import React from 'react';
function Header({renderStepper}) {
    return (
        <div className="flex justify-between">
        <div><h2 className="text-2xl font-semibold mb-6 heading-main">Create a Job</h2></div>
        <div className="flex stepper">
            {renderStepper()}
        </div>
    </div>
    );
}

export default Header;