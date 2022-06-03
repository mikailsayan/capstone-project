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
		variant === 'list' &&
		`
		display: flex;
		flex-direction: column;
		height: 50rem;
        `}

	${({ variant }) =>
		variant === 'featurelist' &&
		`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 50rem;
		margin-top: 13rem;
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
