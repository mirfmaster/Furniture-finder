import React, { useEffect, useState } from "react";
import "./App.css";
import { Container, Grid } from "@material-ui/core";
import ProductCard from "./components/ProductCard";
import Select from "./components/CustomSelect";

function App() {
  const [data, setData] = useState({ products: [] });
  const [state, setState] = useState({
    selectedStyle: [],
    deliveryTime: []
  });

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5c9105cb330000112b649af8")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => alert(err));
  }, []);

  const handleChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };

  let deliveryTime = ["1 Week", "2 Weeks", "1 Month"];
  let products =
    data.products &&
    data.products
      .filter(item => {
        if (state.selectedStyle.length === 0) return true;
        let sameStyle = item.furniture_style.filter(style =>
          state.selectedStyle.includes(style)
        );

        return sameStyle.length > 0 ? item : false;
      })
      .filter(item => {
        if (state.deliveryTime.length === 0) return true;
        let deliveryTime = state.deliveryTime.filter(time => {
          let day =
            time === "1 Week"
              ? 7
              : time === "2 Weeks"
              ? 14
              : time === "1 Month"
              ? 30
              : 0;

          return item.delivery_time <= day ? true : false;
        });

        return deliveryTime.length > 0 ? item : false;
      });
  return (
    <div className="App">
      <Grid
        container
        justify="center"
        style={{
          width: "100%",
          height: "15vh",
          backgroundColor: "#106cc8",
          marginBottom: "30px"
        }}
      >
        <Select
          name="selectedStyle"
          options={data.furniture_styles || []}
          label="Furniture Style"
          selected={state.selectedStyle}
          handleChange={handleChange}
        />
        <Select
          name="deliveryTime"
          options={deliveryTime || []}
          label="Delivery Time"
          selected={state.deliveryTime}
          handleChange={handleChange}
        />
      </Grid>
      <Container>
        <Grid container justify="space-between" spacing={3}>
          {products.map((item, index) => {
            return (
              <ProductCard
                key={index}
                name={item.name}
                description={item.description}
                furniture_style={item.furniture_style}
                delivery={item.delivery_time}
                price={item.price}
              />
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
