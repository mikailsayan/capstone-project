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
		variant === 'list' &&
		`
		position: relative;
		width: 37rem;
		margin-top: 7rem;
        `}
`;

export default StyledSectionRaw;
