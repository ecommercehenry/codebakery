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
    display:flex;
    align-items: center;
    justify-content: center;
    //background:red;
    width:100vw;
    height:fit-content;
`

export default Promos
