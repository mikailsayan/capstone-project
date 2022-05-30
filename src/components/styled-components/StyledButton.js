import styled from 'styled-components';

const StyledButton = styled.button`
	border-radius: 4rem;
	border: none;
	box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25);
	cursor: pointer;
	font-family: Questrial;
	font-size: 2rem;
	transition: 200ms;
	padding: 1.5rem 2rem 1.5rem 2rem;

	&:hover {
		transform: scale(1.03, 1.03);
	}

	${({ variant }) =>
		variant === 'mainbutton' &&
		`
		width: 34.5rem;
        height: 5.1rem;
        background: var(--purple-button);
    `}

	${({ variant }) =>
		variant === 'donebutton' &&
		`
		width: 34.5rem;
        height: 5.1rem;
        background: var(--blue-button);
    `}

	${({ variant }) =>
		variant === 'svgbutton' &&
		`
		border-radius: 50%;
		border: none;
		box-shadow: none;
		cursor: pointer;
		padding: 0;

		&:hover {
			transform: none;
		}
    `}
`;

export default StyledButton;
