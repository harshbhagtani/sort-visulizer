import React from "react";
import Button from "@material-ui/core/Button";
import { Slider } from "@material-ui/core";

function Navbar(props) {
  return (
    <div className="navbar">
      <h1>Sorting visualizer</h1>
      <span
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <span>Array Size</span>
        <Slider
          defaultValue={100}
          aria-labelledby="discrete-slider-small-steps"
          getAriaValueText={(value) => props.choosesize(value)}
          marks
          min={2}
          max={1000}
          valueLabelDisplay="auto"
          style={{ width: "140px", marginTop: "8px", marginLeft: "5px" }}
        />
      </span>
      <span
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <span>Speed</span>
        <Slider
          defaultValue={100}
          aria-labelledby="discrete-slider-small-steps"
          getAriaValueText={(value) => props.choosespeed(value)}
          marks
          min={20}
          max={1000}
          valueLabelDisplay="auto"
          style={{ width: "140px", marginTop: "8px", marginLeft: "5px" }}
        />
      </span>

      <Button variant="contained" onClick={props.getRandom}>
        Array Generator
      </Button>
    </div>
  );
}

export default Navbar;
