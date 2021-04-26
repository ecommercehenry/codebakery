import React from "react";
import GET_REVIEW_BY_USER from "../../../Apollo/queries/getReviewByUserId";
import { useQuery } from "@apollo/client";
import styled from 'styled-components';
import ReviewByUser from "./ReviewsByUser";


const TablaReview = ({id}) => {


    const { data,  refetch } = useQuery(GET_REVIEW_BY_USER, {
        variables: { userId: id },
    });

    return (

        <StyledTabla>
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
        </StyledTabla>
    )

}
export default TablaReview;

const StyledTabla = styled.div`


`;