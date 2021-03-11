import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [arr, setArr] = useState([]);
  const [size, setSize] = useState(100);
  const [speed, setSpeed] = useState(100);
  const [duarr, setDuarr] = useState([]);

  console.log(arr);
  var c_delay = 0;
  const choosesize = (val) => {
    setSize(val);
  };

  const choosespeed = (val) => {
    setSpeed(val);
  };

  const change = (ele, ht) => {
    setTimeout(() => {
      ele.style.height = `${ht}px`;
      ele.style.background = `Green`;
    }, (c_delay += 1000 / speed));
    setTimeout(() => {
      ele.style.background = `skyblue`;
    }, c_delay + 10);
  };

  const getRandomArbitrary = () => {
    const newarr = [];

    for (let i = 0; i < size; i++) {
      let val = Math.random() * (1000 - 5) + 5;
      newarr.push(Math.floor(val));
    }
    console.log(newarr);
    setArr(newarr);
    setDuarr(newarr);
  };

  const merge = (a, si, m, ei) => {
    let n1 = m - si + 1;
    let n2 = ei - m;
    let L = [];
    let R = [];

    for (let i = 0; i < n1; i++) {
      L.push(a[i + si]);
    }
    for (let i = 0; i < n2; i++) {
      R.push(a[i + m + 1]);
    }
    let i = 0;
    let j = 0;
    let k = si;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        a[k] = L[i];
        const ele = document.getElementById(k);

        let ht = Math.floor(L[i] / 2);
        // ele.style.height = `${ht}px`;
        // ele.style.background = `red`;
        change(ele, ht);
        //  arr[k] = L[i];

        i++;
      } else {
        a[k] = R[j];
        const ele = document.getElementById(k);
        let ht = Math.floor(R[j] / 2);
        // ele.style.height = `${ht}px`;
        // ele.style.background = `red`;
        change(ele, ht);
        //arr[k] = R[j];

        j++;
      }
      k++;
    }

    while (i < n1) {
      a[k] = L[i];
      // arr[k] = L[i];
      const ele = document.getElementById(k);
      let ht = Math.floor(L[i] / 2);
      // ele.style.height = `${ht}px`;
      // ele.style.background = `red`;
      change(ele, ht);
      i++;
      k++;
    }

    while (j < n2) {
      a[k] = R[j];
      // arr[k] = R[j];
      const ele = document.getElementById(k);
      let ht = Math.floor(R[j] / 2);
      // ele.style.height = `${ht}px`;
      // ele.style.background = `red`;
      change(ele, ht);
      //  arr[k] = R[j];

      j++;
      k++;
    }
  };

  const mergeSort = (array, si, ei) => {
    let mid = Math.floor((si + ei) / 2);

    if (si >= ei) {
      return;
    }

    mergeSort(array, si, mid);
    mergeSort(array, mid + 1, ei);
    merge(array, si, mid, ei);
  };

  const bubblevisual = (ele1, ele2, ht1, ht2) => {
    setTimeout(() => {
      ele1.style.height = `${ht1}px`;
      ele2.style.height = `${ht2}px`;
      ele1.style.background = `green`;
      ele2.style.background = `green`;
    }, (c_delay += 1000 / speed));
    setTimeout(() => {
      ele1.style.background = `skyblue`;
      ele2.style.background = `skyblue`;
    }, c_delay + 10);
  };
  const bubblesort = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;

          const ele1 = document.getElementById(j);
          const ele2 = document.getElementById(j + 1);
          bubblevisual(
            ele1,
            ele2,
            Math.floor(array[j] / 2),
            Math.floor(array[j + 1] / 2)
          );
        }
      }
    }
    console.log(array);
  };

  return (
    <div className="App">
      <Navbar
        getRandom={getRandomArbitrary}
        choosesize={(val) => choosesize(val)}
        choosespeed={(val) => choosespeed(val)}
      ></Navbar>

      <div className="array-contain">
        {arr.map((data, index) => {
          const ht = (500 * data) / 1000;
          return (
            <div
              style={{ height: ht }}
              className="array-elements"
              id={index}
            ></div>
          );
        })}
      </div>
      <Button
        variant="contained"
        onClick={() => {
          c_delay = 0;

          mergeSort(arr, 0, size - 1);
        }}
      >
        Merge Sort
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          c_delay = 0;
          bubblesort(arr);
        }}
      >
        Bubble Sort
      </Button>
    </div>
  );
}

export default App;
