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
		variant === 'projecticon' &&
		`
		width: 3.6rem;
		height: 3.6rem;
		margin: 0.5rem 1rem 1rem 0.5rem;
    `}

	${({ variant }) =>
		variant === 'footer' &&
		`
		width: 4.2rem;
		height: 4.2rem;
    `}

	${({ variant }) =>
		variant === 'bulletpoint' &&
		`
		width: 2rem;
		height: 2rem;
		margin: 0 2rem 0 2rem;
    `}

	${({ variant }) =>
		variant === 'footeradd' &&
		`
		width: 5.7rem;
		height: 5.7rem;
    `}
`;

export default StyledImage;
