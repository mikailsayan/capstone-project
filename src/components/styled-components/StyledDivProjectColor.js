import styled from 'styled-components';

const StyledDivProjectColor = styled.div`
	display: flex;
	width: 4.5rem;
	height: 4.5rem;
	border-radius: 50%;

	${({ variant }) =>
		variant === 'projectcolor-blue' &&
		`
		background-color: var(--blue-project);
	`}

	${({ variant }) =>
		variant === 'projectcolor-purple' &&
		`
		background-color: var(--purple-project);
	`}

	${({ variant }) =>
		variant === 'projectcolor-yellow' &&
		`
		background-color: var(--yellow-project);
	`}

	${({ variant }) =>
		variant === 'projectcolor-red' &&
		`
		background-color: var(--red-project);
	`}

	${({ variant }) =>
		variant === 'projectcolor-green' &&
		`
		background-color: var(--green-project);
	`}
`;

export default StyledDivProjectColor;
