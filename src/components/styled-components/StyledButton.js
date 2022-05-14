import styled from 'styled-components';

const StyledButton = styled.button`
	margin-top: 2.5rem;
	margin-bottom: 2.5rem;
	border-radius: 4rem;
	border: none;
	box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25);
	cursor: pointer;
	font-family: Questrial;
	font-size: 2rem;

	${({ variant }) =>
		variant === 'mainbutton' &&
		`
		width: 34.5rem;
        height: 5.1rem;
        background: var(--purple-button);
    `}
`;

export default StyledButton;
