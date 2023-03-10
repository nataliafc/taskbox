import React from "react";
import { Button } from "../Button";
import { Container } from "./styles";

export const Header = () => {
	return (
		<Container>
			<nav
				style={{ display: "flex", flexDirection: "row", gap: "100px" }}
			>
				<Button text={"HOME"} width={"89px"} />
				<Button text={"SOBRE"} width={"89px"} />
				<Button text={"LOGIN"} width={"89px"} />
			</nav>
		</Container>
	);
};
