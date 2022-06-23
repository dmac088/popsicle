import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAccountSubPath } from "../../Helpers/route";
import { Spinner } from '../../../Layout/Helpers/animation';
import { Form } from 'react-bootstrap';
import { componentAlias } from '../Dashboard/Dashboard';

function AddressEdit(props) {
    const { history, match, address, getAddress, updateAddress, type, toggleEdit } = props;

    const customer = useSelector(state => state.customer);
    const dispatch = useDispatch();

    const [stateObject, setObjectState] = useState({
        addressLine1:       null,
        addressLine2:       null,
        addressLine3:       null,
        country:            null,
        postCode:           null,
        addressTypeCode:    type
    });

    const setAddressLine1 = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setObjectState((prevState) => ({ 
          ...prevState, 
          addressLine1: value,
        }));
    }

    const setAddressLine2 = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setObjectState((prevState) => ({ 
          ...prevState, 
          addressLine2: value,
        }));
    }

    const setAddressLine3 = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setObjectState((prevState) => ({ 
          ...prevState, 
          addressLine3: value,
        }));
    }

    const setAddressCountry = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setObjectState((prevState) => ({ 
          ...prevState, 
          country: value,
        }));
    }

    const setAddressPostCode = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setObjectState((prevState) => ({ 
          ...prevState, 
          postCode: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();     
        dispatch(updateAddress(address, stateObject))
        .then(() => {
            dispatch(getAddress(customer, type))
            .then(() => {
                toggleEdit(e);
               // history.push(getAccountSubPath(match, componentAlias.ADDRESS));
            });
        })
    }

    useEffect(() => {
        let isSubscribed = true;
        if(isSubscribed) {
            if (!customer.loading) {
                if (!address.loading) {
                    dispatch(getAddress(customer));
                }
            }
        }
        return () => (isSubscribed = false);
    }, [
        customer.loading, 
        address.loading,
    ]);

    return (
        ((address.loading))
        ? <Spinner />
        : <React.Fragment>
            <h3>Edit {address.data.addressTypeDesc}</h3>
            <div className="account-details-form">
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 mb-30">
                            <input  onChange={setAddressLine1} 
                                    id="address-line-1" 
                                    placeholder="Address Line 1" 
                                    type="text"
                                    autoComplete="on" />
                        </div>

                        <div className="col-12 mb-30">
                            <input  onChange={setAddressLine2} 
                                    id="address-line-2" 
                                    placeholder="Address Line 2" 
                                    type="text"
                                    autoComplete="on" />
                        </div>

                        <div className="col-12 mb-30">
                            <input  onChange={setAddressLine3} 
                                    id="address-line-3" 
                                    placeholder="Address Line 3" 
                                    type="text" />
                        </div>

                        <div className="col-12 mb-30">
                            <input  onChange={setAddressCountry} 
                                    id="country" 
                                    placeholder="Country" 
                                    type="text"
                                    autoComplete="on"
                                    required/>
                        </div>

                        <div className="col-12 mb-30">
                            <input  onChange={setAddressPostCode} 
                                    id="post-code" 
                                    placeholder="Post Code" 
                                    type="text" 
                                    autoComplete="on"/>
                        </div>

                        <div className="col-12">
                            <button type="submit" 
                                    className="save-change-btn">Save Changes</button>
                        </div>

                    </div>
                </Form>
            </div>
        </React.Fragment>
    );
}

export default AddressEdit;