/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

export const select = css`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
  background-color: #fff;
  appearance: none;

  &:focus {
    border-color: #ff7f7f;
    outline: none;
  }
`;

export const selectedText = css`
  font-size: 14px;
  color: #666;
  margin-top: 8px;
`;