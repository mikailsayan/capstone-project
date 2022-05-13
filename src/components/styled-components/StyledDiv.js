import styled from 'styled-components';

const StyledDiv = styled.div`
	${({ variant }) =>
		variant === 'dateinput' &&
		`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `}

	${({ variant }) =>
		variant === 'placeholder' &&
		`
    
    `}
`;

export default StyledDiv;
