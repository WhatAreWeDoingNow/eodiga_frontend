/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react'
import * as s from './style.js'
import MainButton from '../../components/MainButton/MainButton.jsx';

function Test() {
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    };
    return (
        <div css={s.container}>
            <div style={styles.wrapper}>
                {/* label을 클릭하면 input이 클릭됨 */}
                <label htmlFor="image-upload" style={styles.uploadBox}>
                    {preview ? (
                        <img src={preview} alt="preview" style={styles.previewImg} />
                    ) : (
                        <>
                            <img src="../../src/assets/image.png" alt="upload icon" style={styles.icon} />
                            <span style={styles.text}>사진 업로드</span>
                        </>
                    )}
                </label>

                {/* 실제 input은 숨김 */}
                <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                />
            </div>
            <p>가게 이름</p>
            <input type="text" placeholder='가게이름을 입력해주세요.' />

            <p>홍보내용</p>
            <input type="text" placeholder='내용 작성' />

            <p>해시태그</p>
            <input type="text" placeholder='태그를 입력해 주세요.' />
            <div css={s.aa}>
                <span>#도자기</span>
                <span>#공예</span>
            </div>

            <p>카테고리</p>
            <div css={s.a}>
                <div>공예</div>
                <div>만들기</div>
            </div>
            <div style={{ margin: "10px 35px" }}>
                <MainButton text={'인공지능제작 시작하기'} />
            </div>
        </div>
    )
}



export default Test


const styles = {
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
    },
    uploadBox: {
        width: "346px",
        height: "203px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "0.2s ease",
    },
    icon: {
        height: '74px',
        width: "94px",
        marginBottom: "10px",
        opacity: 0.6,
    },
    text: {
        color: "#888",
        fontSize: "14px",
    },
    previewImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "16px",
    },
};