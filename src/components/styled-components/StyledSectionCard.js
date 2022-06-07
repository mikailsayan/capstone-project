import styled from 'styled-components';

const StyledSectionCard = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 34rem;
	border-radius: 4rem;
	box-shadow: 0 0 3rem rgba(0, 0, 0, 0.2);
	padding: 1rem 1rem 1rem 0.5rem;
	margin-bottom: 2rem;

	${({ variant }) =>
		variant === 'big-grey' &&
		`
        background-color: var(--card-grey);
        height: 47rem;
    `}

	${({ variant }) =>
		variant === 'middle-grey' &&
		`
        background-color: var(--card-grey);
        height: 22rem;
    `}

    ${({ variant }) =>
		variant === 'small-grey' &&
		`
        background-color: var(--card-grey);
        height: 29rem;
    `}

	${({ variant }) =>
		variant === 'add-project' &&
		`
		background-color: var(--card-grey);
		height: 34rem;
`}
`;

export default StyledSectionCard;
