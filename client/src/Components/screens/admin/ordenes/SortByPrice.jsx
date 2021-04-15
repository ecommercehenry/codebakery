import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// import 'rsuite/lib/styles/index.less';

export default function SortByPrice() {
   
    return (
        <form action="#">
 
            <div class="select-box">
                <label for="select-box1" class="label select-box1"><span class="label-desc">Choose your country</span> </label>
                    <select id="select-box1" class="select">
                        <option value="Choice 1">Falkland Islands</option>
                        <option value="Choice 2">Germany</option>
                        <option value="Choice 3">Neverland</option>
                    </select>
    
            </div>
   
        </form> 
    )

}

