import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

interface Props extends ButtonHTMLAttributes<any> {
	text?: string | undefined;
	secondary?: boolean;
	weight?: number;
	vertical?: string;
	horizontal?: string;
	loading?: boolean;
	width?: string;
}
const Container = styled.button<Props>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: ${(props) => (props.width ? props.width : "auto")};

	padding: ${props => props.vertical ? props.vertical : '0.7vh'} ${props => props.horizontal ? props.horizontal : '0.7vh'};

	background-color: ${props => props.secondary ? theme.buttonColors.secondaryButtonColor : theme.buttonColors.defaultButtonColor};

	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	border-radius: 8px;
	${props => props.secondary ? `border 1px solid ${theme.buttonColors.defaultButtonColor}` : null}

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
		color: ${props => props.secondary ? theme.fontColors.darkColor : theme.fontColors.darkerColor}
	}
`;

export const Button = ({
	text,
	secondary,
	weight,
	vertical,
	horizontal,
	loading,
	width,
	...rest
}): Props => {


	return(
		<Container
			{...rest}
			text={text}
			secondary={secondary}
			weight={weight}
			vertical={vertical}
			horizontal={horizontal}
			width={width}
		/>
	)
}