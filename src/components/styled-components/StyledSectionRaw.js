import styled from 'styled-components';

const StyledSectionRaw = styled.section`
	${({ variant }) =>
		variant === 'overflow-todolist' &&
		`
			width: 32rem;
			height: 37rem;
            overflow: scroll;
        `}

	${({ variant }) =>
		variant === 'featurelist' &&
		`
		width: 100vw;
		min-height: 68.2rem;
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

export default StyledSectionRaw;
