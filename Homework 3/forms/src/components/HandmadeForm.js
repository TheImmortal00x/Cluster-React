import React, { useState, useEffect, useRef } from 'react';
import { fieldValidator } from './Validate';
export const HandmadeForm = () => {

    const inputRef = useRef(null);
    const [formState, setFormState] = useState({
        login: '',
        password: '',
        checkBoxStatus: false,
        formErrors: { login: null, password: null, checkBoxStatus: null }
    });

    const [formStateValidation, setFormStateValidation] = useState({
        formStatus: false
    });


    const onChangeFormValue = (event) => {
        const valueType = event.target.type === 'text' || event.target.type === 'password' ?
            event.target.value : event.target.checked;


        const formError = (form) => {
            setFormState(prev => {
                return {
                    ...prev,
                    [event.target.name]: valueType,
                    formErrors: {
                        ...prev.formErrors,
                        [Object.keys(form)]: Object.values(form)[0]
                    }
                }
            });
        }

        fieldValidator(event.target.name, valueType, formError);
    }

    useEffect(() => {
        const checkError = Object.values(formState.formErrors).every(e => e === null);

        if (formState.login.length > 0 && formState.password.length > 0 && formState.checkBoxStatus && checkError) {
            setFormStateValidation({ formStatus: true });
        }

    }, [formState]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const onSubmit = () => {
        alert('You\'re Welcome');
    }

    return (
        <div>
            <h3>Handmade form</h3>
            <form>
                <div>
                    <input type="email"
                        ref={inputRef}
                        name="email"
                        value={formState.login}
                        placeholder="Email"
                        onChange={onChangeFormValue}
                    />
                    <label for="login">Email</label>
                    {
                        formState.formErrors.login === null ? null : <div>
                            {formState.formErrors.login}
                        </div>
                    }
                </div>
                <div>
                    <input type="password"
                        name="password"
                        value={formState.password}
                        placeholder="Password"
                        onChange={onChangeFormValue}
                    />
                    <label for="password">Password</label>
                    {
                        formState.formErrors.password === null ? null : <div>
                            {formState.formErrors.password}
                        </div>
                    }
                </div>
                <div>
                    <label>
                        <input type="checkbox"
                            name="checkBoxStatus"
                            checked={formState.checkBoxStatus}
                            onChange={onChangeFormValue}
                        />
                            I agree
                        </label>
                </div>
                {
                    formState.formErrors.checkBoxStatus === null ? null : <div>
                        {formState.formErrors.checkBoxStatus}
                    </div>
                }
                <button
                    type="submit"
                    onClick={onSubmit}
                    disabled={formStateValidation.formStatus === false} > Submit
                    </button>
            </form>
        </div>
    );
}