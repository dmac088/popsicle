
import React from 'react';
import { Spinner } from '../../../Layout/Helpers/animation';

function Default(props) {

    const {customer} = props;
    
    return (
        (customer.loading)
            ? <Spinner />
            : <React.Fragment>
                <h3>Dashboard</h3>

                <div className="welcome"><p>Hello, <strong></strong> (If Not <strong>{customer.data.givenName} </strong><a href="login-register.html" className="logout"> Logout</a>)</p>
                </div>

                <p className="mb-0">From your account dashboard. you can easily check &amp; view your
                recent orders, manage your shipping and billing addresses and edit your
                    password and account details.</p>
            </React.Fragment>
    );
}

export default Default;
