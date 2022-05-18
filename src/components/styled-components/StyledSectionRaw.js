import styled from 'styled-components';

const StyledSectionRaw = styled.section`
	${({ variant }) =>
		variant === 'overflow' &&
		`
			width: 32rem;
			height: 37rem;
            overflow: scroll;
        `}
`;

export default StyledSectionRaw;
