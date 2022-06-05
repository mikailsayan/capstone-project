import styled from 'styled-components';

const StyledDivComplex = styled.div`
	display: flex;
	position: absolute;
	right: 1rem;
	width: 2rem;
	height: 2rem;
	border: 0.2rem solid white;
	border-radius: 50%;

	${({ variant }) =>
		variant === 'complexity-easy' &&
		`
    background-color: var(--green-complex);
`}

	${({ variant }) =>
		variant === 'complexity-middle' &&
		`
    background-color: var(--yellow-complex);
`}

${({ variant }) =>
		variant === 'complexity-hard' &&
		`
    background-color: var(--red-complex);
`}
`;

export default StyledDivComplex;
