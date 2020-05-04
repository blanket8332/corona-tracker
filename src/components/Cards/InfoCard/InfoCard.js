import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./InfoCard.module.scss";
import CountUp from "react-countup";
import cx from "classnames";

const InfoCard = ({ value, lastUpdate, title, text, style }) => {
  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, styles[style])}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </Grid>
  );
};

export default InfoCard;
