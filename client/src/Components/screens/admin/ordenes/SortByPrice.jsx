import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from './SortByPrice.module.css';
export default function SortByPrice() {
   
    return (
        <form action="#">
 
        <div className={styles.select_box}>
          
          <label for="select_box1" className={styles.label.select_box1}><span className={styles.label_desc}>Choose your country</span> </label>
          <select id="select-box1" className="select">
            <option value="Choice 1">Falkland Islands</option>
            <option value="Choice 2">Germany</option>
            <option value="Choice 3">Neverland</option>
          </select>
          
        </div>
         
      </form> 
       
    )

}

