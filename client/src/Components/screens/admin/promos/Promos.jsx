import React, {useEffect} from 'react'
import FormPromo from "./FormPromo"
import PromoList from "./PromoList"
import styled from 'styled-components'

const Promos = ({promo,setPromo}) => {

    useEffect(() => {},[])
    
    return (
        <StyledPromos>
            {
                promo ? <FormPromo promo={promo} setPromo={setPromo}/> : <PromoList/>
            }
        </StyledPromos>
    )
}

const StyledPromos = styled.div`
    //padding-top:6rem;
    display: flex;
position: relative;
background: white;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: fit-content;
width: 100%;
padding: 2rem;
padding-top: 0;
border-radius: 20px;
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);
`

export default Promos
