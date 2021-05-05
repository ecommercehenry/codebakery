import React from 'react'
import { useMutation, useQuery } from '@apollo/client';
import getPromos from '../../../../Apollo/queries/getPromos';
import DELETE_PROMO from '../../../../Apollo/mutations/deletePromo';
import styled from 'styled-components'
import deleteIcon from "../../../../icons/delete.svg"
const PromoList = () => {

    const {data,refetch} = useQuery(getPromos,{
        fetchPolicy:"no-cache"
    });

    const [deletePromo] = useMutation(DELETE_PROMO);

    const deleteHandler = (id) => {
        deletePromo({variables:
            {
                id
            }
        }).then(res=>{
            refetch()
        })
    }
    return (
        <StyledPromoList>
            <div className="topp">
                <div className="namee">Name</div>
                <div className="discountt">Discount</div>
                <div className="dayy">Day</div>
                <div className="categoryy">Category</div>
                <div className="editt"></div>
            </div>
            {
                data && data['getPromos'] && data['getPromos'].map((elem,i) =>
                    <div key={i} className="listt">
                        <div className="listName">{elem.name}</div>
                        <div className="listDiscount">{elem.discount}</div>
                        <div className="listDay">{elem.day}</div>
                        <div className="listCategory">{elem.category}</div>
                        <div className="listEdit">
                            <button onClick={()=>deleteHandler(elem.id)}>
                                <img src={deleteIcon} alt="delete-icon"/>
                            </button>
                        </div>
                        
                    </div>
                )
            } 
        </StyledPromoList>
    )
}

const StyledPromoList = styled.div`
    margin-top:5rem;
    width:76vw;
    height:60;
    //background:red;
    .topp{
        color:white;
        background:#5E3F71;
        display:flex;
        width:100%;
        flex-direction:row;
        justify-content:space-between;
        margin-bottom:1.5rem;
        .discountt,
        .dayy,
        .categoryy,
        .namee,
        .editt{
            display:flex;
            align-items:center;
            justify-content:center;
        }
        .discountt{
            //background:blue;
            width: 8%;
        }
        .dayy{
            //background:purple;
            width: 17%;
        }
        .categoryy{
            //background:blue;
            width: 20%;
        }
        .namee{
            //background:green;
            width: 45%;
        }
        .editt{
            //background:green;
            width: 10%;
        }
    }
    .listt{
        //background: orange;
        display:flex;
        width:100%;
        flex-direction:row;
        justify-content:space-between;
        margin-bottom:1rem;
        .listName,
        .listDiscount,
        .listDay,
        .listCategory,
        .listEdit{
            display:flex;
            align-items:center;
            justify-content:center;
        }
        .listName{
            width: 45%;
        }
        .listDiscount{
            width: 8%;
        }
        .listDay{
            width: 17%;
        }
        .listCategory{
            width: 20%;
        }
        .listEdit{
            width: 10%;
            button{
                border:none;
                background:none;
                img{
                    width:1rem;
                    height:1rem;
                }
            }
        }
    }
`

export default PromoList;
