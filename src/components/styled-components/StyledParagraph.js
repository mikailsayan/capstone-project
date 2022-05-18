import styled from 'styled-components';

const StyledParagraph = styled.p`
	${({ variant }) =>
		variant === 'todo-notes' &&
		`
        font-size: 1.5rem;
        padding: 1rem 0.5rem 1rem 0.2rem;
    `}
	${({ variant }) =>
		variant === 'todolist-small' &&
		`
        position: relative;
        width: 30.3rem;
        min-height: 3.6rem;
        background-color: var(--dark-grey);
        border: none;
        border-radius: 4rem;
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        gap: 1.2rem;
        padding: 0 1rem 0 1rem;
`}
`;

export default StyledParagraph;
