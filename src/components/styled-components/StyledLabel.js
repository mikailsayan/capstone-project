import styled from 'styled-components';

const StyledLabel = styled.label`
	${({ variant }) =>
		variant === 'toplabel' &&
		`
        font-size: 2rem;
        margin: 2rem 19.7rem 1.4rem 2.3rem;
    `}

	${({ variant }) =>
		variant === 'default' &&
		`
        font-size: 2rem;
        margin: 1.2rem 19.7rem 1.4rem 2.3rem;
    `}
`;

export default StyledLabel;
