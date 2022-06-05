import styled from 'styled-components';

const StyledDivRadio = styled.div`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;

	${({ variant }) =>
		variant === 'green-complex-radio' &&
		`
		
		background-color: var(--green-complex);
	`}

	${({ variant }) =>
		variant === 'yellow-complex-radio' &&
		`
		background-color: var(--yellow-complex);
	`}

	${({ variant }) =>
		variant === 'red-complex-radio' &&
		`
		background-color: var(--red-complex);
	`}
`;

export default StyledDivRadio;
