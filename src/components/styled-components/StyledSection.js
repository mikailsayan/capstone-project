import styled from 'styled-components';

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	width: 34rem;
	border-radius: 4rem;
	box-shadow: 0 0 3rem rgba(0, 0, 0, 0.2);
	padding: 1rem 1rem 1rem 0.5rem;
	position: relative;

	${({ variant }) =>
		variant === 'big-grey' &&
		`
        background-color: var(--card-grey);
        min-height: 48rem;
        margin-bottom: 2rem;
    `}

	${({ variant }) =>
		variant === 'middle-grey' &&
		`
        background-color: var(--card-grey);
        height: 34.1rem;
        margin-bottom: 2rem;
    `}

    ${({ variant }) =>
		variant === 'small-grey' &&
		`
        background-color: var(--card-grey);
        height: 23rem;
        margin-bottom: 2rem;
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
