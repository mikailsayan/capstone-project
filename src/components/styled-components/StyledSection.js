import styled from 'styled-components';

const StyledSection = styled.section`
	${({ variant }) =>
		variant === 'big-grey' &&
		`
        background-color: var(--grey-color);
        width: 34.5rem;
        height: 50.5rem;
        border-radius: 4rem;
    `}

	${({ variant }) =>
		variant === 'middle-grey' &&
		`
        background-color: var(--grey-color);
        width: 34.5rem;
        height: 34.1rem;
        border-radius: 4rem;
    `}

    ${({ variant }) =>
		variant === 'small-grey' &&
		`
        background-color: var(--grey-color);
        width: 34.5rem;
        height: 24.6rem;
        border-radius: 4rem;
    `}

    ${({ variant }) =>
		variant === 'big-blue' &&
		`
        background-color: var(--blue-project);
        width: 34.5rem;
        height: 50.5rem;
        border-radius: 4rem;
    `}

	${({ variant }) =>
		variant === 'middle-blue' &&
		`
        background-color: var(--blue-project);
        width: 34.5rem;
        height: 34.1rem;
        border-radius: 4rem;
		`}

    ${({ variant }) =>
		variant === 'small-blue' &&
		`
        background-color: var(--blue-project);
        width: 34.5rem;
        height: 24.6rem;
        border-radius: 4rem;
        `}

    ${({ variant }) =>
		variant === 'big-purple' &&
		`
        background-color: var(--purple-project);
        width: 34.5rem;
        height: 50.5rem;
        border-radius: 4rem;
        `}

	${({ variant }) =>
		variant === 'middle-purple' &&
		`
        background-color: var(--purple-project);
        width: 34.5rem;
        height: 34.1rem;
        border-radius: 4rem;
		`}

    ${({ variant }) =>
		variant === 'small-purple' &&
		`
        background-color: var(--purple-project);
        width: 34.5rem;
        height: 24.6rem;
        border-radius: 4rem;
        `}

    ${({ variant }) =>
		variant === 'big-yellow' &&
		`
        background-color: var(--yellow-project);
        width: 34.5rem;
        height: 50.5rem;
        border-radius: 4rem;
        `}

	${({ variant }) =>
		variant === 'middle-yellow' &&
		`
        background-color: var(--yellow-project);
        width: 34.5rem;
        height: 34.1rem;
        border-radius: 4rem;
		`}

    ${({ variant }) =>
		variant === 'small-yellow' &&
		`
        background-color: var(--yellow-project);
        width: 34.5rem;
        height: 24.6rem;
        border-radius: 4rem;
        `}
    ${({ variant }) =>
		variant === 'big-red' &&
		`
        background-color: var(--red-project);
        width: 34.5rem;
        height: 50.5rem;
        border-radius: 4rem;
        `}

	${({ variant }) =>
		variant === 'middle-red' &&
		`
        background-color: var(--red-project);
        width: 34.5rem;
        height: 34.1rem;
        border-radius: 4rem;
		`}

    ${({ variant }) =>
		variant === 'small-red' &&
		`
        background-color: var(--red-project);
        width: 34.5rem;
        height: 24.6rem;
        border-radius: 4rem;
        `}
    ${({ variant }) =>
		variant === 'big-red' &&
		`
        background-color: var(--red-project);
        width: 34.5rem;
        height: 50.5rem;
        border-radius: 4rem;
        `}

	${({ variant }) =>
		variant === 'middle-red' &&
		`
        background-color: var(--red-project);
        width: 34.5rem;
        height: 34.1rem;
        border-radius: 4rem;
		`}

    ${({ variant }) =>
		variant === 'small-red' &&
		`
        background-color: var(--red-project);
        width: 34.5rem;
        height: 24.6rem;
        border-radius: 4rem;
        `}

    ${({ variant }) =>
		variant === 'big-green' &&
		`
        background-color: var(--green-project);
        width: 34.5rem;
        height: 50.5rem;
        border-radius: 4rem;
        `}

	${({ variant }) =>
		variant === 'middle-green' &&
		`
        background-color: var(--green-project);
        width: 34.5rem;
        height: 34.1rem;
        border-radius: 4rem;
		`}

    ${({ variant }) =>
		variant === 'small-green' &&
		`
        background-color: var(--green-project);
        width: 34.5rem;
        height: 24.6rem;
        border-radius: 4rem;
        `}
`;

export default StyledSection;
