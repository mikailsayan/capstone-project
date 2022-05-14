import styled from 'styled-components';

const StyledUL = styled.ul`
	list-style-type: none;

	${({ variant }) =>
		variant === 'footer' &&
		`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6rem;
    `}
`;

export default StyledUL;
