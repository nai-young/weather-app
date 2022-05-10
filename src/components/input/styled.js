import styled from "styled-components";

export const Placeholder = styled.span`
	position: absolute;
	top: 50%;
	left: 20px;
	color: gray;
	transform: translateY(-50%);
	font-size: 1.2em;
	transition-duration: 300ms;
	pointer-events: none;
`;

export const Label = styled.label`
	font-size: 12px;
	transition: all 0.5s ease-in-out;
	position: relative;

	&:focus-within > ${Placeholder} {
		transform: translateY(-3rem);
	}
`;
export const RowLabel = styled.label`
	font-size: 14px;
	opacity: 0.6;
	width: 40%;
`;
export const RowInput = styled.input`
	background-color: #fff !important;
	padding: 10px;
	color: #fff;
	border: 0;
	border-radius: 35px;
	width: 60%;
	margin: 10px 0;

	&:focus {
		outline: 0;
	}
	/* Browser Autocomplete */
	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
		-webkit-text-fill-color: #48484A !important;
	}
`;

export const StyledInput = styled.input`
	background-color: #fff;
	padding: 10px 20px;
	color: #48484A;
	border: 0;
	border-radius: 35px;
	width: 100%;
	box-shadow: none;
	transition: all 0.2s ease-in;
	font-size: 16px ;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	
	&.error {
		border: 0.1px solid red;
	}

	&::placeholder {
		opacity: 0;
	}

	&:not(:placeholder-shown) {
		box-shadow: inset 0px 0px 0px 1px white;

		& + ${Placeholder} {
			transform: translateY(-3rem);
		}
	}

	&:focus {
		outline: 0;
	}
`;
