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
	transition: 200ms;

	@media (min-width: 70rem) {
		width: 50rem;
	}

	${({ variant }) =>
		variant === 'big-grey' &&
		`
        background-color: var(--card-grey);
        height: 47rem;

		@media (min-width: 70rem) {
			display: flex;
			align-items: center;
		}
    `}

	${({ variant }) =>
		variant === 'middle-grey' &&
		`
        background-color: var(--card-grey);
        max-height: 22rem;

		@media (min-width: 70rem) {
			display: flex;
			align-items: center;
		}
    `}

    ${({ variant }) =>
		variant === 'small-grey' &&
		`
        background-color: var(--card-grey);
        max-height: 29rem;

	
    `}

	${({ variant }) =>
		variant === 'add-project' &&
		`
		background-color: var(--card-grey);
		height: 34rem;

		@media (min-width: 70rem) {
			display: flex;
			align-items: center;
		}
`}
`;

export default StyledSectionCard;
