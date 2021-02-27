import React, {useEffect, useState} from "react";
import {HandmadeForm} from './components/HandmadeForm';
import {FormikForm} from './components/FormikForm';

export const AppWrapper = () => {
    const [formState, setFormState] = useState();
    useEffect(()=>{},[formState]);

    return (
        <div>
            <div>
                <div className="custom-position">
                    <button onClick={ () => setFormState(!formState)}>Change styles</button>
                </div>
                {
                    formState ? <HandmadeForm /> :  <FormikForm />
                }
            </div>
        </div>
    );
}

export default AppWrapper