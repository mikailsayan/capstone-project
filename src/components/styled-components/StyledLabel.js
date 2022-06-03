import styled from 'styled-components';

const StyledLabel = styled.label`
	font-size: 1.8rem;
	font-family: Questrial;

	${({ variant }) =>
		variant === 'toplabel' &&
		`
        margin: 2rem 19.7rem 1.4rem 2.3rem;
    `}

	${({ variant }) =>
		variant === 'default' &&
		`
        margin: 1rem 19.7rem 1.4rem 2.3rem;
    `}

	${({ variant }) =>
		variant === 'complexity' &&
		`
  		width: 4rem;
  		height: 4rem;
  		cursor: pointer;
		z-index: 10;
    `}
`;

export default StyledLabel;
