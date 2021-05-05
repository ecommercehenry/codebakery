import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { getCurrentDomainApi } from '../../../config/currentDomain';

const FORM_ID = 'payment-form';

export default function PayButton({productos}){
    const [preferenceId, setPreferenceId] = useState(null);
    
    useEffect(() => {
      axios.post(`${getCurrentDomainApi()}/create_preference`,productos) //se crea la preferencia )
      .then((order) => {
        setPreferenceId(order.data.id);    // se guarda la respuesta en el estado local (la respuesta de crear la preferencia es un id)
      });
    }, [productos]); 
  
    useEffect(() => {
      if (preferenceId) {
        const script = document.createElement('script');          //el script crea el boton de pago en base al id recibido 
        script.type = 'text/javascript';
        script.src =
          'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
        script.setAttribute('data-preference-id', preferenceId);
        const form = document.getElementById(FORM_ID);
        form.appendChild(script);
      }
    }, [preferenceId]);
    return (
      <form id={FORM_ID} method="GET" />    //boton de compra se inserta dentro de este form 
    );
  }



