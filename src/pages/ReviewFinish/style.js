import { css } from '@emotion/react';

export const test = css`
  background-color: #FFF5F5;
  height: 100%; /* 전체 화면 세로 채움 */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;   /* 세로 중앙 정렬 */
  align-items: center;       /* 가로 중앙 정렬 */
  padding: 0px 16px;
`;

export const img = css`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;       /* 아래 요소와 간격 */
`;

export const resTitle = css`
  font-size: 30px;
  color: #FFA8A8;
  text-align: center;
`;

export const resDes = css`
  font-size: 17px;
  color: #FFA8A8;
  text-align: center;
`;
