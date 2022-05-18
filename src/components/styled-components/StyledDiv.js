import styled from 'styled-components';

const StyledDiv = styled.div`
	display: flex;

	${({ variant }) =>
		variant === 'stepbox' &&
		`
		justify-content: center;
		width: 8.9rem;
		height: 3.1rem;
		border: 0.3rem solid #4B4B4B;
		border-radius: 4rem;
    `}

	${({ variant }) =>
		variant === 'center' &&
		`
		align-items: center;
		justify-content: center;
    `}

	${({ variant }) =>
		variant === 'cardtitle' &&
		`
		align-items: center;
		gap: 1rem;
		margin: 1rem 1rem 2rem 1rem;
    `}

	${({ variant }) =>
		variant === 'statusbox' &&
		`
		border: 0.3rem solid var(--status-border);
		border-radius: 4rem;
		padding: 0.3rem 2rem 0.3rem 2rem;
	`}

	${({ variant }) =>
		variant === 'complexity' &&
		`
		position: absolute;
		right: 1rem;
		width: 2rem;
		height: 2rem;
		border: 0.2rem solid white;
		border-radius: 50%;
		background-color: var(--yellow-complex);
	`}

	${({ variant }) =>
		variant === 'todonotes' &&
		`
		width: 1rem;
		height: 1rem;
		background-color: yellow;
		border: 0.3rem solid var(--status-border);
		padding: 0.3rem 2rem 0.3rem 2rem;
	`}
`;

export default StyledDiv;
