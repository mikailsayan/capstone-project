import styled from 'styled-components';

const StyledSectionRaw = styled.section`
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
		width: 100vw;
		min-height: 53.7rem;
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
