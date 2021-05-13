import React from "react";
import GET_REVIEW_BY_USER from "../../../Apollo/queries/getReviewByUserId";
import { useQuery } from "@apollo/client";
import styled from 'styled-components';
import ReviewByUser from "./ReviewsByUser";


const TablaReview = ({id}) => {

    
    const { data,  refetch } = useQuery(GET_REVIEW_BY_USER, {
        variables: { userId: id },
        fetchPolicy : "no-cache"
    });
    return (

        <StyledRevv>
            <div className='container-profile'>
                <h1>Reviews</h1>
            </div>
            {
                    data?.getReviewByUserId?.map((e) => (
                        <ReviewByUser
                            key={e.id}
                            id={e.id}
                            title={e.title}
                            description={e.description}
                            stars={e.stars}
                            productId={e.productId}
                            refetch={refetch}
                        
                        />
                    ))
            }
        </StyledRevv>
    )

}
export default TablaReview;

const StyledRevv = styled.div`
display: flex;
justify-content: flex-start;
width: 100%;
flex-direction: column;
align-items: center;
min-height: 100vh;
background: #f1f1f1;
margin-top: 1rem;

.container-profile{
    position: sticky;
    top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-bottom: 40rem;
    width: 100%;
    height: 3.3rem;
    background-color: #f1f1f1;
    z-index: 1;
    font-weight: bold!important;
  }
  h1{
    font-weight: 700;
    color: #5e3f71;
    margin-bottom: 0;
  }

  @media (max-width: 850px) {
    .container-profile{
        display:none;
    }
  }
`;