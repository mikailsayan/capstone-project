import styled from 'styled-components';

const StyledSectionRaw = styled.section`
	${({ variant }) =>
		variant === 'overflow' &&
		`
			width: 37rem;
			height: 37rem;
            overflow: scroll;
        `}

	${({ variant }) =>
		variant === 'overflow-todolist' &&
		`
			width: 32rem;
			height: 37rem;
            overflow: scroll;
        `}

	${({ variant }) =>
		variant === 'footer' &&
		`
        display: flex;
        align-items: center;
        justify-content: space-around;
		width: 100vw;
    `}

	${({ variant }) =>
		variant === 'list' &&
		`
		position: relative;
		display: flex;
		flex-direction: column;
        `}

	${({ variant }) =>
		variant === 'dropdown' &&
		`
		display: flex;
        `}
	
	${({ variant }) =>
		variant === 'buttonarea' &&
		`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 7rem;
		margin-bottom: 4rem;
        `}
`;

export default StyledSectionRaw;
