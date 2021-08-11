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
    background: "yellow",
    marginTop:0.1,
    height:12
    },
    // puntos en el slider de la los rangos o marks
  mark: {
    background: "#ffff",
    width:"10px",
    height:10
  },
  // linea de fondo del slider
  rail: {
  background:"blue",
  borderRadius: 10,
  height:10
  },
  // linea slider
  track: {
    background:"red",
    height:10,
    borderRadius: 10
  },
 
}));

const marks = [
    {
      value: 0,
      label: 'cero ',
     
      
    },
    {
      value: 10,
      label: 'uno',
    },

    {
      value: 20,
      label: 'dos ',
    },

    {
        value: 30,
        label: 'tres ',
       
        
      },
      {
        value: 40,
        label: 'cuatro',
      },
  
      {
        value: 50,
        label: 'cinco',
      }
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
    // determina el numero max y minimo de rango 
       max={50}
       min={0}
       marks={marks}
       onChange={handleChange}
    />

   

        
    </div>
  );
}

