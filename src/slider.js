import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
const useStyles = makeStyles(theme => ({
  root: {
    width: 600,
    },
  margin: {
    height: theme.spacing(3)
  },
  // bolita
  thumb: {
    background: "blue",
    marginTop:0.1,
    height:12
    },
    // puntos en el slider de la los rangos o marks
  mark: {
    background: "red",
    width:"10px",
    height:15
  },
  // linea de fondo del slider
  rail: {
  background:"black",
  borderRadius: 20,
  height:10
  },
  // linea slider
  track: {
    background:"black",
    height:10,
    borderRadius: 10
  },
 
}));

const marks = [
    {
      value: 20,
      label: '1 ',
     
      
    },
    {
      value: 30,
      label: '2',
    },

    {
      value: 40,
      label: '3',
    },
    {
      value: 50,
      label: '4',
     
      
    },
    {
      value: 60,
      label: '4',
    },

    {
      value: 70,
      label: '5',
    },
  ];

export default function DiscreteSlider() {
  const classes = useStyles();
  const [value, setValue] = useState([0]);

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  

  

  return (
    <div className={classes.root}>
        <div> {value}%</div>
       <Slider
        classes={{
        thumb: classes.thumb,
        rail: classes.rail,
         track: classes.track,
        valueLabel: classes.valueLabel,
        mark: classes.mark
      // 
    }}
    min={20}
    max={70}
    marks={marks}
    onChange={handleChange}
      />
      </div>
  );
}

