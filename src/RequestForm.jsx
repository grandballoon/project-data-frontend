import React from 'react';
import { useFormik } from 'formik';
import ORGANIZATION_TYPES from './util/OrganizationTypes';
import CountryDropdown from './CountryDropdown';

// This component is the main parent for the "request items" form. It still needs
// dropdowns for equipment selection.

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
    const errors = {};
    if (!values.contactName) {
        errors.contactName = 'Required';
    }
    if (!values.contactTitle) {
        errors.contactTitle = 'Required';
    }
    if (!values.contactDepartment) {
        errors.contactDepartment = 'Required';
    }
    if (!values.contactEmail) {
        errors.contactEmail = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contactEmail)) {
        errors.contactEmail = 'Invalid email address';
    }

    return errors;
};

const RequestForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            organizationType: '',
            publicPrivate: '',
            organizationName: '',
            organizationSite: '',
            department: '',
            group: '',
            organizationRegistrationNumer: '',
            address1: '',
            address2: '',
            address3: '',
            city: '',
            stateOrRegion: '',
            zipCode: '',
            country: '',
            organizationWebsite: '',
            organizationPhone: '',
            contactName: '',
            contactTitle: '',
            contactDepartment: '',
            contactEmail: '',
            contactPhone1: '',
            contactPhone2: '',
            otherUsers: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="organizationType">Organization Type</label>
                <select
                    id="organizationType"
                    name="organizationType"
                    onChange={formik.handleChange}
                    value={formik.values.organizationType}
                >
                    {ORGANIZATION_TYPES}
                </select>
            </div>
            <div>
                <label htmlFor="publicPrivate">Public/Private</label>
                <select
                    id="publicPrivate"
                    name="publicPrivate"
                    onChange={formik.handleChange}
                    value={formik.values.publicPrivate}
                >
                    <option value={'public'}>Public</option>
                    <option value={'private'}>Private</option>
                </select>
            </div>
            <div>
                <label htmlFor="organizationName">Organization Name</label>
                <input
                    id="organizationName"
                    name="organizationName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.organizationName}
                />
                {formik.errors.organizationName ? <div>{formik.errors.organizationName}</div> : null}
            </div>
            <div>
                <label htmlFor="organizationSite">Organization Site</label>
                <input
                    id="organizationSite"
                    name="organizationSite"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.organizationSite}
                />
            </div>
            <div>
                <label htmlFor="department">Department</label>
                <input
                    id="department"
                    name="department"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.department}
                />
            </div>
            <div>
                <label htmlFor="group">Group</label>
                <input
                    id="group"
                    name="group"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.group}
                />
            </div>
            <div>
                <label htmlFor="organizationRegistrationNumber">Organization Registration Number</label>
                <input
                    id="organizationRegistrationNumber"
                    name="organizationRegistrationNumber"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.organizationRegistrationNumber}
                />
            </div>
            <div>
                <label htmlFor="address1">Address Line 1</label>
                <input
                    id="address1"
                    name="address1"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address1}
                />
            </div>
            <div>
                <label htmlFor="address2">Address Line 2</label>
                <input
                    id="address2"
                    name="address2"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address2}
                />
            </div>
            <div>
                <label htmlFor="address3">Address Line 3</label>
                <input
                    id="address3"
                    name="address3"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address3}
                />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                />
            </div>
            <div>
                <label htmlFor="stateOrRegion">State or Region</label>
                <input
                    id="stateOrRegion"
                    name="stateOrRegion"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.stateOrRegion}
                />
            </div>
            <div>
                <label htmlFor="zipCode">Zip Code</label>
                <input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.zipCode}
                />
            </div>
            <div>
                <CountryDropdown
                value={formik.values.country}
                onChange={formik.handleChange}
                />

            </div>
            <div>
                <label htmlFor="organizationWebsite">Organization Website</label>
                <input
                    id="organizationWebsite"
                    name="organizationWebsite"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.organizationWebsite}
                />
            </div>
            <div>
                <label htmlFor="organizationPhone">Organization Phone</label>
                <input
                    id="organizationPhone"
                    name="organizationPhone"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.organizationPhone}
                />
            </div>
            <h4>Primary Contact</h4>
            <div>
                <label htmlFor="contactName">Name</label>
                <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.contactName}
                />
            </div>
            <div>
                <label htmlFor="contactTitle">Title</label>
                <input
                    id="contactTitle"
                    name="contactTitle"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.contactTitle}
                />
            </div>
            <div>
                <label htmlFor="contactDepartment">Department</label>
                <input
                    id="contactDepartment"
                    name="contactDepartment"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.contactDepartment}
                />
            </div>
            <div>
                <label htmlFor="contactEmail">Email</label>
                <input
                    id="contactEmail"
                    name="contactEmail"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.contactEmail}
                />
                {formik.errors.contactEmail ? <div>{formik.errors.contactEmail}</div> : null}
            </div>
            <div>
                <label htmlFor="contactPhone1">Phone 1</label>
                <input
                    id="contactPhone1"
                    name="contactPhone1"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.contactPhone1}
                />
            </div>
            <div>
                <label htmlFor="contactPhone2">Phone 2</label>
                <input
                    id="contactPhone2"
                    name="contactPhone2"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.contactPhone2}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RequestForm;
