import React, { useEffect } from "react";
import GET_REVIEW_BY_USER from "../../../Apollo/queries/getReviewByUserId";
import { useQuery } from "@apollo/client";
import styled from 'styled-components';
import ReviewByUser from "./ReviewsByUser";


const TablaReview = ({id}) => {

    const { data,  refetch } = useQuery(GET_REVIEW_BY_USER, {
        variables: { userId: id },
    });
    return (

        <StyledRevv>
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
justify-content: center;
width: 90%;
flex-direction: column;
align-items: flex-end;


`;