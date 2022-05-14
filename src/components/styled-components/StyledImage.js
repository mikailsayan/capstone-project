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
		variant === 'footer' &&
		`
		width: 4.2rem;
		height: 4.2rem;
    `}

	${({ variant }) =>
		variant === 'footeradd' &&
		`
		width: 5.7rem;
		height: 5.7rem;
    `}
`;

export default StyledImage;
