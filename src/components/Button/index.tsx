import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

interface Props extends ButtonHTMLAttributes<any> {
	text?: string;
	secondary?: boolean;
	weight?: number;
	vertical?: number;
	horizontal?: number;
	width?: string;
	padding?: number,
	onClick?: () => void,
	backgroundColor?: string, 
}
const Container = styled.button<Props>`
	display: flex;
	align-items: center;
	justify-content: center;

	border: 0;

	width: ${(props) => (props.width ? props.width : "auto")};

	padding: 0.7vh;

	background-color: ${props => props.secondary ? theme.buttonColors.secondaryButtonColor : theme.buttonColors.defaultButtonColor};

	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	border-radius: 16px;
	${props => props.secondary ? `border 0.5px dashed ${theme.buttonColors.defaultButtonColor}` : null}

	cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

	:hover {
		background-color: ${ props => props.secondary ? theme.buttonColors.hoverSecondaryButtonColor : theme.buttonColors.hoverButtonColor };
	}

	:active {
		background-color: ${ props => props.secondary ? theme.buttonColors.hoverButtonColor : theme.buttonColors.activeButton };
	}

	:disabled {
        filter: opacity(0.6);
    }

	span {
		font-size: 14px;
		color: ${props => props.secondary ? theme.fontColors.darkColor : theme.fontColors.titleColor}
	}
`;

export const Button = ({
	text,
	secondary,
	weight,
	vertical,
	horizontal,
	width,
	padding,
	onClick,
	backgroundColor,
	...rest
}: Props ) => {


	return(
		<Container
			{...rest}
			text={text}
			secondary={secondary}
			weight={weight}
			vertical={vertical}
			horizontal={horizontal}
			width={width}
			padding={padding}
			onClick={onClick}
			backgroundColor={backgroundColor}
		>{text}</Container>
	)
}