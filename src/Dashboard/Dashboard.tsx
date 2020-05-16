import React from "react";
import data from "../data.json";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "10px",
  },
  root: {
    minWidth: 275,
    maxWidth: 375,
    backgroundColor: "#edb879",
    margin: "30px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface FamilyCardProps {
  id: number;
  names: string;
  address: string;
  postcode: string;
  country: string;
  latLong?: string;
}

const FamilyCard = (props: FamilyCardProps) => {
  const { id, names, address, postcode, country } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Names
        </Typography>
        <Typography variant="h5" component="h2">
          {names}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Addresses
        </Typography>
        <Typography variant="body2" component="p">
          {address}
        </Typography>
        <Typography variant="body2" component="p">
          {postcode}
        </Typography>
        <Typography variant="body2" component="p">
          {country}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={{ pathname: `/family-address/${id}` }}>
          <Button onClick={() => {}} color="primary" size="small">
            See it on Map
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const Dashboard = (props: any) => {
  const classes = useStyles();
  const myData = data.data.map((data) => data);
  console.log("dashboard props", props);
  let match = useRouteMatch();

  console.log("match", match);

  return (
    <div className={classes.container}>
      {myData.map((data) => (
        <FamilyCard
          id={data.id}
          names={data.names}
          address={data.address}
          postcode={data.postcode}
          country={data.country}
        />
      ))}
    </div>
  );
};

export default Dashboard;
