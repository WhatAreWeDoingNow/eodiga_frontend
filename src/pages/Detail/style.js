/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


export const container = css`
    height: 772px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

     &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none; /* IE, Edge */
    scrollbar-width: none;    /* Firefox */

    cursor: grab;
`

export const layout = css`
    width: 100%;
    margin-top: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const img = (url) => css`
    width: 358px;
    height: 208px;
    background-image: url(${url});
    background-size: cover;
    margin: 10px 16px; 
    display: flex;
    flex-direction: column;
    justify-content: end;
`

export const hr = (height) =>css`
    height: ${height}px;
    width: 100%;
    border: none;
    margin: 0px;
    background-color: rgba(228, 228, 228, 0.81);
`

export const profile = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #FFFFFF;
`

export const porfile_text = css`
    display: flex;
    justify-content: flex-start;
    margin: 0px;
    padding: 0px 16px;
    padding-top: 10px;
`

export const profile_more = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    img {
        height: 50px;
        width: 50px;
    }

    div{
        margin-bottom: 16px;
        p{

        margin: 0px;
        font-size: 12.5px;
        font-weight: 400;
     }
    }
`

export const home = css`
    display: flex;
    flex-direction: column;
    padding: 10px 16px;
`

export const home_text = css`
    margin: 0px;
    font-size: 17px;
    font-weight: 600;
`

export const home_more = css`
    display: flex;
    align-items: center;
    gap: 5px;
    p{
        font-size: 12.5px;
        font-weight: 400;
    }
`

export const reservation = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const reservation_text = css`
    margin: 10px 16px;
    margin-bottom: 20px;
    font-size: 17px;
    font-weight: 600;
`

export const reservation_more = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 16px;
    background-color: #FFFFFF;
    border-bottom: 3px solid rgba(228, 228, 228, 0.81);
    img{
        height: 86px;
        width: 91px;
    }
`

export const reservation_more_text = css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    p{
        margin: 0px;
    }
`

export const reservation_more_icon = css`
    display: flex;
    align-items: center;
    margin-top: 15px;

    gap: 5px;
    p{
        margin: 0px;
        font-size: 13px;
        font-weight: 400;
        color: #3da8de;
    }
`

export const review = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const review_text = css`
    margin: 10px 16px;
    margin-bottom: 10px;
    font-size: 17px;
    font-weight: 600;
`

export const review_more = css`
    display: flex;
    flex-direction: column;
    padding: 10px 16px;
    background-color: #FFFFFF;
    border-bottom: 3px solid rgba(228, 228, 228, 0.81);
`

export const review_more_more = css`
    display: flex;
    justify-content: space-between;
`

export const review_top = css`
    display: flex;
    align-items: center;
    gap: 5px;

    img{
        height: 18px;
        width: 18px;
    }
`

export const review_bottom = css`
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        margin: 0px;
        font-size: 11px;
        font-weight: 400;
    }
`