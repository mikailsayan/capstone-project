import styled from 'styled-components';

const StyledParagraph = styled.p`
	${({ variant }) =>
		variant === 'todo-notes' &&
		`
        font-size: 1.5rem;
        padding: 1rem 0.5rem 1rem 0.2rem;
    `}

	${({ variant }) =>
		variant === 'dropdown-content' &&
		`
        font-size: 1.5rem;
        z-index: 10;
    `}
`;

export default StyledParagraph;
