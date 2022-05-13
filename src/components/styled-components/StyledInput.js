import styled from 'styled-components';

const StyledInput = styled.input`
	${({ variant }) =>
		variant === 'full' &&
		`
        width: 30.3rem;
        height: 4.1rem;
        border-radius: 1.5rem;
        border: 0.3rem solid var(--input-border);
        margin: 0 2.1rem 1rem 2.1rem;
    `}

	${({ variant }) =>
		variant === 'date' &&
		`
        width: 24.9rem;
        height: 4.1rem;
        border-radius: 1.5rem;
        border: 0.3rem solid var(--input-border);
        margin: 0 2.1rem 1rem 2.1rem;
    `}
`;

export default StyledInput;
