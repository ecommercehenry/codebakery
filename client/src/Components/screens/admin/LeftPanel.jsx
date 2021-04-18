import React from 'react'

//icons
import  productsIcon from '../../../icons/product.svg'
import  ordersIcon from '../../../icons/orders.svg'
import usersIcon from '../../../icons/user.svg'

//styles
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LeftPanel = () => {
    return (
      <StyledPanel>
        <div className="content">
          <div className="userInfo">
            <div className="userAvatar">avatar</div>
            <div className="userName">User Name</div>
          </div>

          <div className="tabs">
            <Link className="text-decoration-none text-white" to="/admin/products">
              <div className="tab">
                <div className="icon">
                  <img src={productsIcon} alt="icon" />
                </div>
                Products
              </div>
            </Link>
            <Link className="text-decoration-none text-white" to="/admin/orders">
              <div className="tab">
                <div className="icon">
                  <img src={ordersIcon} alt="icon" />
                </div>{" "}
                Orders
              </div>
            </Link>
            <Link className="text-decoration-none text-white" to="/admin/orders">
              <div className="tab">
                <div className="icon">
                  <img src={usersIcon} alt="icon" />
                </div>
                Users
              </div>
            </Link>
          </div>
        </div>
      </StyledPanel>
    );
}

const StyledPanel = styled.div`
    background:#5E3F71;
    box-shadow: 5px 5px 25px rgb(167, 167, 167);
    min-height: 100vh;
    width: 12%;
    position:fixed;
    top:0;
    left: 0;
    z-index:1;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    display: flex;
    justify-content:center;
    padding-top: 5vh;
    color:white;
    .content{
        width:100%;
        height: 45vh;
        display: flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
        .userInfo{
            width: 100%;
            height: 19vh;
            display: flex;
            justify-content:space-between;
            flex-direction:column;
            align-items:center;
            .userAvatar{
                width:60%;
                height:145px;
                border-radius:100%;
                background:#d1d1d1;
                display:flex;
                justify-content:center;
                align-items:center;
            }
            .userName{
                font-size: 1.3rem;
                //font-weight: bold;
            }
        }
        .tabs{
            width: 100%;
            display: flex;
            flex-direction:column;
            justify-content:flex-start;
            padding-left: 2.5rem;
            .tab{
                margin: 2.5rem 0 0 0;
                font-size: 1.3rem;
                display: flex;
                flex-direction:row;
                align-items:center;
                .icon{
                    margin-right:0.5rem;
                    display:flex;
                    align-items:center;
                    img{
                        height:1.3rem;
                        width:1.3rem;
                    }
                }
            }
        }
    }
`;

export default LeftPanel
