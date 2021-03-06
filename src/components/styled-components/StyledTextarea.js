import styled from 'styled-components';

const StyledTextarea = styled.textarea`
	${({ variant }) =>
		variant === 'addproject' &&
		`
        width: 29rem;
		height: 7rem;
		border-radius: 1.5rem;
		border: 0.3rem solid var(--input-border);
		margin: 0 2.1rem 1rem 2.1rem;
    `}

	${({ variant }) =>
		variant === 'addtodonote' &&
		`
        width: 29rem;
		height: 18rem;
		background-color: var(--todo-note);
		border: none;
    `}
`;

export default StyledTextarea;
