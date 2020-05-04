import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Cards.module.scss";
import InfoCard from "./InfoCard/InfoCard";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spasing={3} justify="center">
        <InfoCard
          value={confirmed.value}
          lastUpdate={lastUpdate}
          title="Infected"
          text="Number of active cases of COVID-19"
          style="infected"
        />
        <InfoCard
          value={recovered.value}
          lastUpdate={lastUpdate}
          title="Recovered"
          text="Number of recoveries from COVID-19"
          style="recovered"
        />
        <InfoCard
          value={deaths.value}
          lastUpdate={lastUpdate}
          title="Deaths"
          text="Number of deaths caused by COVID-19"
          style="deaths"
        />
      </Grid>
    </div>
  );
};

export default Cards;
