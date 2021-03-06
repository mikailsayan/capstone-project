import styled from 'styled-components';

const StyledSectionCardRaw = styled.section`
	${({ variant }) =>
		variant === 'overflow-todolist' &&
		`
			width: 32rem;
			height: 30rem;
            overflow: auto;

			@media (min-width: 70rem) {
				width: 48rem;
			}
        `}

	${({ variant }) =>
		variant === 'todolist' &&
		`
			margin-top: 0.5rem;
        `}

	${({ variant }) =>
		variant === 'featurelist' &&
		`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
    `}

	${({ variant }) =>
		variant === 'footer' &&
		`
        display: flex;
        align-items: center;
        justify-content: space-around;
		width: 100vw;
    `}
`;

export default StyledSectionCardRaw;
