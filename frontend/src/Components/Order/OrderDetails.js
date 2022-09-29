import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";

const OrderDetails = ({ match }) => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography>
                <h1>
                  <b> Order :#{order && order._id}</b>
                </h1>
              </Typography>
              <Typography>
                <b>Shipping Info :</b>{" "}
              </Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>
                    <b>Name :</b>
                  </p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p>
                    <b>Phone :</b>
                  </p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>
                    <b>Address :</b>
                  </p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <Typography>
                <b>Payment :</b>
              </Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    style={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? { color: "green", fontWeight: "bold" }
                        : { color: "red", fontWeight: "bold" }
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "PAID"
                      : "NOT PAID"}
                  </p>
                </div>

                <div>
                  <p>
                    <b>Amount :</b>
                  </p>
                  <span>{order.totalPrice && order.totalPrice}</span>
                </div>
              </div>

              <Typography>
                <b>Order Status :</b>
              </Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    style={
                      order.orderStatus &&
                      order.orderStatus.status === "Delivered"
                        ? { color: "green", fontWeight: "bold" }
                        : { color: "red", fontWeight: "bold" }
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>
                <b>Order Items:</b>
              </Typography>
              <div className="orderDetailsCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
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
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
