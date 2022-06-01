import styled from 'styled-components';

const StyledUL = styled.ul`
	list-style-type: none;
	z-index: 9;

	${({ variant }) =>
		variant === 'list-in-card' &&
		`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 0rem 0 1rem 1rem;
    `}
`;

export default StyledUL;
