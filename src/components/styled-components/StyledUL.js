import styled from 'styled-components';

const StyledUL = styled.ul`
	list-style-type: none;
	z-index: 9;

	${({ variant }) =>
		variant === 'list-in-card' &&
		`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 0rem 0 1rem 0;
    `}

	${({ variant }) =>
		variant === 'footer' &&
		`
        display: flex;
        align-items: center;
        gap: 6rem;
    `}
`;

export default StyledUL;
