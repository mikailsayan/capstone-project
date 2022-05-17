import styled from 'styled-components';

const StyledList = styled.li`
	${({ variant }) =>
		variant === 'featurelist-small' &&
		`
        width: 30.3rem;
        height: 3.6rem;
        background-color: var(--dark-grey);
        border: none;
        border-radius: 4rem;
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        gap: 1.2rem;
        padding: 0 1rem 0 1rem;
    `}
	${({ variant }) =>
		variant === 'todolist-small' &&
		`
        position: relative;
        width: 30.3rem;
        height: 3.6rem;
        background-color: var(--dark-grey);
        border: none;
        border-radius: 4rem;
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        gap: 1.2rem;
        padding: 0 1rem 0 1rem;
`}
`;

export default StyledList;
