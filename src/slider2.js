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
    background: "#ffff",
    marginTop:0.1,
    height:10
    },
    // puntos en el slider de la los rangos o marks
  mark: {
    background: "transparent"
  },
  rail: {
  background:" linear-gradient(90deg, rgba(145,215,112,1) 32%, rgba(246,163,66,1) 32%, rgba(246,163,66,1) 78%, rgba(255,66,0,1) 78%)",
  borderRadius: 10,
  height:10
  },
  track: {
    background:"transparent",
    height:10,
    borderRadius: 10
  },
  // valueLabel: {
  //   "&>*": {
  //     background: "red"
  //   }
  // }
}));

const marks = [
    {
      value: 0,
      label: 'Conservador ',
     
      
    },
    {
      value: 50,
      label: 'Moderado',
    },

    {
      value: 100,
      label: 'Agresivo',
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
       
       marks={marks}
       onChange={handleChange}
        />

   

        
    </div>
  );
}

