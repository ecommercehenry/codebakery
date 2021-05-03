import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SUBSCRIBE_USER from "../../../Apollo/mutations/suscribeToNewsletter";
// import { sendNewsletter } from "../../../../../api/src/services/newsletterService";
import footerImage from "./footer.jpg"

  
  export default function Newsletter (){
    const [suscrito, setSuscrito] = useState(false)
    
    const [input, setInput] = useState();
    function handlerChange() {}
    
    const [suscribe, { loading, error }] = useMutation(SUBSCRIBE_USER, {});
    // const userId = 5;
    let userId = window.localStorage.getItem("id");
    let user = localStorage.name
    console.log("id--------------->"+ userId)
    console.log("user---------->" + user)
   
    // useEffect(() => {
    //   suscribe({
    //     variables: {
    //       id: userId,
    //       newsletter: suscrito,
    //     },
    //   }, error);
    // }, [suscrito]);     
   
    function handleSubmit(e){
      e.preventDefault();        
      setSuscrito(true)
      suscribe({
          variables: {
            id: +userId,
            newsletter: true,
          },
      });
    }
    return(
        <>
       {user ? (
          <StyledNewsletter
          onSubmit={handleSubmit}>
              <h2> suscribite a nuestro Newsletter</h2>
              <p>participa de sorteos, enterarte de descuentos exclusivos</p>            
           
              {suscrito ?
               <p> Thanks for subscribe!! </p> : 
               <button type="submit"className="search-btn">subscribe</button> }
          </StyledNewsletter>  ) 
          
           : <StyledNewsletter>Login to subscribe our Newsletter
              <Link
              to="/log-in"              
            >
             <button className="btn" >Go</button>             
            </Link>

           </StyledNewsletter> }
                     
        </>
    )
}

const StyledNewsletter = styled.form`   
       
    background-image: url(${footerImage});
    border-radius: 10px;
    padding: 20px 10px;
    width: 50%;
    margin: auto;
   color: gray;
   font-size: 1.5rem;    
  
  .search-btn{      
    color: #e2d9d9;
    width: 15%;
    padding: 10px 10px;
    border: solid 1px #CECECE;
    border-radius: 40px;
  }
  .btn{
    background-color: #6944a5;
    color: #e2d9d9;
    width: 10%;
    padding: 6px 6px;
    border: solid 1px #CECECE;
    border-radius: 40px;
    margin-left: 1rem;
  }

`;
//   return (
//     <>
//       <StyledNewsletter>
//         <div>
//           <h2 style={{ fontVariantCaps: "petite-caps" }}>
//             Subscribe to our Newsletter
//           </h2>
//           <input
//             type="email"
//             placeholder="Let us your email"
//             value={input}
//             required
//             onChange={handlerChange}
//           />
//           <button id="search-btn">Submit</button>
//         </div>
//       </StyledNewsletter>
//     </>
//   );
// }

// const StyledNewsletter = styled.div`
//   text-align: center;
//   background: transparent;
//   display: block;
//   align-items: center;
//   z-index: 2;
//   margin: 0 auto;
//   height: 100%;
//   width: 100%;
//   min-width: 18% !important;
//   padding: 2rem;
//   color: #5e3f71;
//   font-weight: bold;

//   input {
//     width: 30%;
//     height: 3rem;
//     font-size: 1rem;
//     text-align: left;
//     border-top-left-radius: 0.5rem;
//     border-bottom-left-radius: 0.5rem;
//   }

//   button {
//     width: 10%;
//     height: 3rem;
//     border: none;
//     border-top-right-radius: 0.5rem;
//     border-bottom-right-radius: 0.5rem;
//     background-color: #5e3f71;
//     color: whitesmoke;
//     :hover {
//       background-color: #694e7a;
//       font-weight: bold;
//     }
//   }
// `;
