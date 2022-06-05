import styled from 'styled-components';

const StyledSectionCardRaw = styled.section`
	${({ variant }) =>
		variant === 'overflow-todolist' &&
		`
			width: 32rem;
			height: 37rem;
            overflow: auto;
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
