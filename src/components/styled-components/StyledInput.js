import styled from 'styled-components';

const StyledInput = styled.input`
	border-radius: 1.5rem;
	border: 0.3rem solid var(--input-border);

	${({ variant }) =>
		variant === 'full' &&
		`
        width: 29rem;
		margin: 0 2.1rem 1rem 2.1rem;
		height: 4.1rem;
    `}

	${({ variant }) =>
		variant === 'date' &&
		`
        width: 24.9rem;
		margin: 0 2.1rem 1rem 2.1rem;
		height: 4.1rem;
        
    `}

	${({ variant }) =>
		variant === 'featurecheckbox' &&
		`
        width: 2.7rem;
		height: 2.7rem;
		margin-left: 1rem;
        
    `}

	${({ variant }) =>
		variant === 'todocheckbox' &&
		`
        width: 1.8rem;
		height: 1.8rem;
        
    `}
	
	${({ variant }) =>
		variant === 'featurecheckbox' &&
		`
		width: 2.7rem;
		height: 2.7rem;
		margin-left: 1rem;
	
	`}

	${({ variant }) =>
		variant === 'complexity' &&
		`
		display: none;

		&:checked + label {
			width: 4rem;
			height: 4rem;
			border: 0.4rem solid white;
			border-radius: 50%;
			z-index: 10;
		}}}
	
	`}
`;

export default StyledInput;
