/** @jsxImportSource @emotion/react */
import React from 'react'
import * as s from './style'

const texts = {
    start: [
        {title: "어디가에 오신걸 환영해요!", title2: "", subtitle: "어떤 사용자 유형으로 이용하시겠어요?", subtitle2: "이후에 언제든 변경할 수 있어요. "},
        {title: "선택사항이 맞으시다면", title2: "다음버튼을 눌러주세요.", subtitle: "", subtitle2: ""},
        {title: "사업자 인증서 확인이 필요해요.", title2: "", subtitle: "", subtitle2: ""}

    ],
    signup: [
        {title: "닉네임을 정해볼까요? ", title2: "", subtitle: "닉네임은 언제든지 변경 가능해요.", subtitle2: ""},
        {title: "이메일을 입력해주세요.", title2: "", subtitle: "이메일 인증은 한번만 필요해요.", subtitle2: ""},
        {title: "비밀번호를 입력해주세요.", title2: "", subtitle: "거의 다왔어요! 신중하게 정해주세요!", subtitle2: ""},
        {title: "이제 가게를 등록해볼까요?", title2: "", subtitle: "가게 주소를 입력해주세요.", subtitle2: ""},
        {title: "연락처를 입력해주세요.", title2: "", subtitle: "가게 연락처 및 사장님 연락처를  남겨주세요. ", subtitle2: ""},
        {title: "카테고리를 선택해주세요.", title2: "", subtitle: "상위 카테고리를 선택한 후 하위 카테고리를 선택해주세요! ", subtitle2: ""},
    ],
    signin: [
        {title: "다시 만나게 되어 반가워요!", title2: "", subtitle: "회원가입 하실때 사용하셨던", subtitle2: "이메일을 입력해주세요."},
        {title: "비밀번호를 입력해주세요.", title2: "", subtitle: "어디가와 함께 즐거운", subtitle2: "골목 여정을 시작해봐요 :)"},
    ],
    Terms: [
        {title: "이용약관에 동의해주세요. ", title2: "", subtitle: "", subtitle2: ""},
    ]
};

function Header({page, index}) {
    const pageTexts = texts[page] || [];
    const {title, title2, subtitle, subtitle2} = pageTexts[index - 1] || {title: "", title2: "", subtitle: "", subtitle2: ""};
    return (
    <div css={s.start_text}>
        <h1 css={s.title}>{title}<br/>{title2}</h1>
        {
            subtitle != '' &&
            <p css={s.subtitle}>{subtitle}<br/>{subtitle2}</p>
        }
    </div>
    )
}

export default Header