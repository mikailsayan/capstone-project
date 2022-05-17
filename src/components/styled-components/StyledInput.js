import styled from 'styled-components';

const StyledInput = styled.input`
	border-radius: 1.5rem;
	border: 0.3rem solid var(--input-border);
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
	
	${({ variant }) =>
		variant === 'featurecheckbox' &&
		`
		width: 2.7rem;
		height: 2.7rem;
		margin-left: 1rem;
	
`}
`;

export default StyledInput;
