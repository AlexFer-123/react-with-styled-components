import React from "react";
import styled from "styled-components";

const IconContainer = styled.div<IconProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .3rem;
    border-radius: 99px;
    background-color: ${({ $isCheck }) => $isCheck ? '#1FB841' : '#F3F5F7'};
`

export const IconImage = styled.img<IconProps>`
    width: ${({ $width }) => $width ? $width : '11px'};
    height: ${({ $height }) => $height ? $height : '12px'};
    `

export interface IconProps {
    $width?: string;
    $height?: string;
    $isCheck?: boolean;
}

const checkIcon = () => {
    return (
    <IconContainer $isCheck={true}>
        <img src="/svg/checkIcon.svg" alt="CheckIcon" width="11" height="12" />
    </IconContainer>
    )
}

const dollarIcon = () => {
    return (
        <img src="/svg/dollarIcon.svg" alt="DollarIcon" />
    )
}

const plusIcon = () => {
    return (
    <IconContainer $isCheck={false}>
        <img src="/svg/plusIcon.svg" alt="PlusIcon" />
    </IconContainer>
    )
}

const arrowRightIcon = () => {
    return (
        <img src="/svg/ArrowRight.svg" alt="ArrowRight" />
    )
}

export { checkIcon, plusIcon, dollarIcon, arrowRightIcon }; 