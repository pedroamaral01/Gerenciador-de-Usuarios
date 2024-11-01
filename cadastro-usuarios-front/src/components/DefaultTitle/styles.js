import styled from "styled-components"

export const Title = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    margin-top: ${(props) => props.marginTop || '0'};
`