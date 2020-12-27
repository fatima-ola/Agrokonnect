import React, { useEffect, useState } from "react";
import { firestore } from "../../config/firebase";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from "../Button/index";

const Index = () => {
  const [produce, setProduce] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  const uid = localStorage.getItem('uid');

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "produce") {
      setProduce(value);
    } else if (name === "price") {
      setPrice(value);
    } else if (name === "quantity") {
      setQuantity(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await firestore.collection("products").get();
      data.forEach((doc) => {
        if (doc.id === uid) {
          setProduce(doc.data().produce);
          setPrice(doc.data().price);
          setQuantity(doc.data().quantity);
          setDescription(doc.data().description);
        }
      });
    };
    fetchData();
  }, [uid]);
  useEffect(() => {
    if (!uid) {
      history.push("/");
    }
  }, [uid, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = firestore.collection("products").doc(uid);
    user.update({
      produce,
      price,
      quantity,
      description,
    });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const data = firestore.collection("products").add({
      uid,
      produce,
      price,
      quantity,
      description,
    });
    console.log("product added");
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const product = await firestore
        .collection("products")
        .doc("eSbur5ptbcCy1m14zABS")
        .delete();
      console.log("product deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="center-form">
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center text-center form p-4">
        <form onSubmit={handleSubmit}>
            <NavLink to="/" className="signup-title">
              Upload Products
            </NavLink>
          <div className="form-group text-left">
            <label htmlFor="exampleEmail"> Name of Produce </label>
            <input
              type="text"
              className="form-control"
              id="text"
              placeholder="Enter Name of Produce"
              name="produce"
              onChange={handleChange}
              value={produce}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="password"> Price </label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Place Price"
              name="price"
              onChange={handleChange}
              value={price}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="password"> Quantity </label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Quantity of produce"
              name="quantity"
              onChange={handleChange}
              value={quantity}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="password"> Description </label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Description of produce"
              name="description"
              onChange={handleChange}
              value={description}
            />
          </div>
          <Button
            text="Upload"
            handleClick={handleAdd}
            className="btn-signup"
          />
          <Button
            text="Delete Product"
            handleClick={handleDelete}
            className="btn-signup"
          />
        </form>
      </div>
    </div>
  );
};

export default Index;
