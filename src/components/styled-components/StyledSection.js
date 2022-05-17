import styled from 'styled-components';

const StyledSection = styled.section`
	width: 34.5rem;
	border-radius: 4rem;
	box-shadow: 0 0 3rem rgba(0, 0, 0, 0.25);
	padding: 1rem;

	${({ variant }) =>
		variant === 'big-grey' &&
		`
        background-color: var(--grey-color);
        width: 34.5rem;
        height: 50.5rem;
    `}

	${({ variant }) =>
		variant === 'middle-grey' &&
		`
        background-color: var(--grey-color);
        height: 34.1rem;
    `}

    ${({ variant }) =>
		variant === 'small-grey' &&
		`
        background-color: var(--grey-color);
        height: 24.6rem;
        margin-bottom: 4rem;
    `}

    ${({ variant }) =>
		variant === 'big-blue' &&
		`
        background-color: var(--blue-project);
        height: 50.5rem;
    `}

	${({ variant }) =>
		variant === 'middle-blue' &&
		`
        background-color: var(--blue-project);
        height: 34.1rem;
		`}

    ${({ variant }) =>
		variant === 'small-blue' &&
		`
        background-color: var(--blue-project);
        height: 24.6rem;
        `}

    ${({ variant }) =>
		variant === 'big-purple' &&
		`
        background-color: var(--purple-project);
        height: 50.5rem;
        `}

	${({ variant }) =>
		variant === 'middle-purple' &&
		`
        background-color: var(--purple-project);
        height: 34.1rem;
		`}

    ${({ variant }) =>
		variant === 'small-purple' &&
		`
        background-color: var(--purple-project);
        height: 24.6rem;
        `}

    ${({ variant }) =>
		variant === 'big-yellow' &&
		`
        background-color: var(--yellow-project);
        height: 50.5rem;
        `}

	${({ variant }) =>
		variant === 'middle-yellow' &&
		`
        background-color: var(--yellow-project);
        height: 34.1rem;
		`}

    ${({ variant }) =>
		variant === 'small-yellow' &&
		`
        background-color: var(--yellow-project);
        height: 24.6rem;
        `}
    ${({ variant }) =>
		variant === 'big-red' &&
		`
        background-color: var(--red-project);
        height: 50.5rem;
        `}

	${({ variant }) =>
		variant === 'middle-red' &&
		`
        background-color: var(--red-project);
        height: 34.1rem;
		`}

    ${({ variant }) =>
		variant === 'small-red' &&
		`
        background-color: var(--red-project);
        height: 24.6rem;
        `}
    ${({ variant }) =>
		variant === 'big-red' &&
		`
        background-color: var(--red-project);
        height: 50.5rem;
        `}

	${({ variant }) =>
		variant === 'middle-red' &&
		`
        background-color: var(--red-project);
        height: 34.1rem;
		`}

    ${({ variant }) =>
		variant === 'small-red' &&
		`
        background-color: var(--red-project);
        height: 24.6rem;
        `}

    ${({ variant }) =>
		variant === 'big-green' &&
		`
        background-color: var(--green-project);
        height: 50.5rem;
        `}

	${({ variant }) =>
		variant === 'middle-green' &&
		`
        background-color: var(--green-project);
        height: 34.1rem;
		`}

    ${({ variant }) =>
		variant === 'small-green' &&
		`
        background-color: var(--green-project);
        height: 24.6rem;
        `}
`;

export default StyledSection;
