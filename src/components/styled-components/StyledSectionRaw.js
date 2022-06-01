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
		variant === 'list' &&
		`
		position: relative;
		display: flex;
		flex-direction: column;
		margin-top: 7rem;
        `}
`;

export default StyledSectionRaw;
