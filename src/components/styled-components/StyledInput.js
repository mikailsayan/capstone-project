import styled from 'styled-components';

const StyledInput = styled.input`
	border-radius: 1.5rem;
	border: 0.3rem solid var(--input-border);
	margin: 0 2.1rem 1rem 2.1rem;
	height: 4.1rem;

	${({ variant }) =>
		variant === 'full' &&
		`
        width: 30.3rem;
    `}

	${({ variant }) =>
		variant === 'date' &&
		`
        width: 24.9rem;
        
    `}
`;

export default StyledInput;
