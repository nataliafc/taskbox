import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.header`
    width: 100%;
    height: 150px;

    display: flex;
    
    align-items: center;
    justify-content: end;
    padding: 32px;

    font-size: 20px;
    font-weight: 500;
    color: ${theme.fontColors.titleColor};

    background-color: ${theme.colors.backgroundColor};

`