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
		gap: 2rem;
		margin: 1rem;
    `}

	${({ variant }) =>
		variant === 'statusbox' &&
		`
		border: 0.3rem solid var(--status-border);
		border-radius: 4rem;
		padding: 0.3rem 2rem 0.3rem 2rem;
		right: 1rem;
`}
`;

export default StyledDiv;
