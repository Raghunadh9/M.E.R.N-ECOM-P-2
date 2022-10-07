import React, { Fragment } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const ConfirmOrder = ({ history }) => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    history.push("/process/payment");
  };

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography
              style={{ fontWeight: "700", borderBottom: "2px solid green" }}
            >
              Shipping Info
            </Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>
                  <b>Name :</b>
                </p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>
                  <b>Phone :</b>
                </p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>
                  <b>Address :</b>
                </p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography
              style={{ fontWeight: "700", borderBottom: "2px solid green" }}
            >
              Your Cart Items:
            </Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img
                      src={item.image}
                      alt="Product"
                      style={{ cursor: "pointer" }}
                      onClick={() => history.push(`/product/${item.product}`)}
                    />
                    <Link to={`/product/${item.product}`}>
                      <b>{item.name}</b>
                    </Link>{" "}
                    <span>
                      {item.quantity} X ₹{item.price} ={" "}
                      <b>₹{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography style={{ fontWeight: "700" }}>Order Summary</Typography>
            <div>
              <div>
                <p>
                  <b>Subtotal :</b>
                </p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>
                  <b>Shipping Charges :</b>
                </p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
                <p>
                  <b>GST :</b>
                </p>
                <span>₹{tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total :</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;