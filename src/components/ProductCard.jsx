import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { strTrimmer, commafy } from "../utils/helpers";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const ProductCard = ({
  name,
  description,
  furniture_style,
  delivery,
  price
}) => {
  const classes = useStyles();
  return (
    <Grid item sm="6" xs="12">
      <Card className={classes.root}>
        <CardContent>
          <Grid container direction="row" justify="space-between">
            <Grid item style={{ fontWeight: "bold", fontSize: 18 }}>
              {name}
            </Grid>
            <Grid item style={{ color: "#ff9800", fontWeight: "bold" }}>
              Rp. {commafy(price, ".")}
            </Grid>
          </Grid>
          <Grid container style={{ margin: "7px 0px", textAlign: "justify" }}>
            <Grid item>{strTrimmer(description, 144)}</Grid>
          </Grid>
          <Grid container>
            <Grid item style={{ color: "#448cd4" }}>
              {furniture_style.map((item, index) => {
                let text = `${item}, `;
                if (index + 1 === furniture_style.length) {
                  text = `${item}.`;
                }
                return text;
              })}
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid
              item
              style={{
                fontWeight: "bold",
                color: "#448cd4",
                textDecoration: "underline"
              }}
            >
              {delivery > 1 ? `${delivery} Days` : `${delivery} Day`}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
