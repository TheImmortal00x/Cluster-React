import React, { useRef, useEffect } from 'react';
import { Formik } from 'formik';
export const FormikForm = () => {

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div >
            <h3>«Formik» validation form</h3>
            <Formik
                initialValues={{ email: '', password: '', checkBoxStatus: false }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Email is required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email';
                    }

                    if (!values.password) {
                        errors.password = 'Password is required';
                    } else if (values.password.length < 6) {
                        errors.password = 'Password\'s length is not enough';
                    }

                    if (!values.checkBoxStatus === true) {
                        errors.checkBoxStatus = 'You didn\'t agree to Privacy&Policy'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                ref={inputRef}
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <label for="email">Email</label>
                            {
                                errors.email && touched.email && errors.email ?
                                    <div>
                                        {errors.email && touched.email && errors.email}
                                    </div> : null
                            }
                        </div>
                        <div>
                            <input
                                placeholder="Password"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <label for="password">Password</label>
                            {
                                errors.password && touched.password && errors.password ?
                                    <div className="tooltip-valid alert-danger">
                                        {errors.password && touched.password && errors.password}
                                    </div> : null
                            }
                        </div>
                        <div className="form-check">
                            <label>
                                <input type="checkbox"
                                    onChange={handleChange}
                                    value={values.checkbox}
                                    name="checkBoxStatus"
                                />
                                  I agree
                                </label>
                        </div>
                        {
                            errors.checkBoxStatus && touched.checkBoxStatus && errors.checkBoxStatus ?
                                <div>
                                    {errors.checkBoxStatus && touched.checkBoxStatus && errors.checkBoxStatus}
                                </div> : null
                        }
                        <button
                            type="submit"
                            disabled={isSubmitting}>
                            Submit
                            </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}