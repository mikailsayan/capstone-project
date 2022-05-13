import styled from 'styled-components';
import Image from 'next/image';

const StyledImage = styled(Image)`
	${({ variant }) =>
		variant === 'calender' &&
		`
		width: 2.9rem;
		height: 2.9rem;
        margin: 1rem 2.1rem 1.4rem 2.5rem;
    `}

	${({ variant }) =>
		variant === 'placeholder' &&
		`
    `}
`;

export default StyledImage;
