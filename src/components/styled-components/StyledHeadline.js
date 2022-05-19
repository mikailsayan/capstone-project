import styled from 'styled-components';

const StyledHeadline = styled.h1`
	${({ variant }) =>
		variant === 'projectname' &&
		`
        position: absolute;
        top: -4rem;
        left: 1rem;
        font-size: 2.2rem;
    `}
`;

export default StyledHeadline;
