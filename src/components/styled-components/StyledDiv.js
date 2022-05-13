import styled from 'styled-components';

const StyledDiv = styled.div`
	${({ variant }) =>
		variant === 'dateinput' &&
		`
        display: flex;
        align-items: center;
    `}

	${({ variant }) =>
		variant === 'stepbox' &&
		`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 8.9rem;
		height: 3.1rem;
		border: 0.3rem solid #4B4B4B;
		border-radius: 4rem;
    `}
`;

export default StyledDiv;
