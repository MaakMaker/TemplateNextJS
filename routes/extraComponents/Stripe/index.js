import React, {useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import {Button, Form, Input} from "antd";
import '../../../public/vendors/stripe.css';

const CARD_OPTIONS = {
    iconStyle: 'solid',
};
const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};


const SubmitButton = ({processing, error, children, disabled}) => (
    <Button type="primary" htmlType="submit" disabled={processing || disabled}>
        {processing ? 'Processing...' : children}
    </Button>
);

const ErrorMessage = ({children}) => (
    <div className="ErrorMessage" role="alert">
        {children}
    </div>
);


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [form] = Form.useForm();
    const [error, setError] = useState(null);
    const [cardComplete, setCardComplete] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);

    const handleSubmit = async (values) => {

        if (!stripe) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        if (form.getFieldsError().filter(({errors}) => errors.length).length > 0) {
            // some  field  are invalid
            return;
        }

        if (error) {
            elements.getElement('card').focus();
            return;
        }

        if (cardComplete) {
            setProcessing(true);
        }

        const payload = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: values,
        });

        setProcessing(false);

        if (payload.error) {
            setError(payload.error);
        } else {
            setPaymentMethod(payload.paymentMethod);
        }
    };

    const reset = () => {
        setError(null);
        setProcessing(false);
        setPaymentMethod(null);
    };

    return <Form form={form}
                 {...layout}
                 name="basic"
                 initialValues={{remember: true}}
                 onFinish={handleSubmit}
                 onFinishFailed={handleSubmit}
    >
        <Form.Item
            label="Name"
            name="name"
            rules={[{required: true, message: 'Name required!'}]}
        >
            <Input/>
        </Form.Item>

        <Form.Item
            label="Email"
            name="email"
            rules={[{required: true, message: 'Email required!'}]}
        >
            <Input/>
        </Form.Item>
        <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{required: true, message: 'Phone number required!'}]}
        >
            <Input/>
        </Form.Item>
        <div className='stripe-cardnumber'>
            <div className='stripe-cardnumber-input'>
                <CardElement options={CARD_OPTIONS}
                             onChange={(e) => {
                                 setError(e.error);
                                 setCardComplete(e.complete);
                             }}
                />
            </div>
        </div>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}

        <div className='stripe-btn-view'>
            <SubmitButton processing={processing} error={error}
                          disabled={!stripe || form.getFieldsError().filter(({errors}) => errors.length).length > 0}>
                Pay $25
            </SubmitButton>
        </div>
        {paymentMethod ? (
            <div className="Result">
                <div className="ResultTitle" role="alert">
                    Payment successful
                </div>
                <div className="ResultMessage">
                    Thanks for trying Stripe Elements. No money was charged, but we
                    generated a PaymentMethod: {paymentMethod.id}
                </div>
            </div>
        ) : null}
    </Form>
};

const stripePromise = loadStripe('pk_test_eq9lIP5aXELF9ZdfPM294NGi');

const StripeExample = () => {
    return (
        <div className="stripe-wrapper">
            <div className="gx-card">
                <div className="gx-card-body">
                    <Elements stripe={stripePromise}>
                        <div className='gx-stripe'><CheckoutForm/></div>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default StripeExample;
