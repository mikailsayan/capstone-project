import styled from 'styled-components';

const StyledList = styled.li`
	z-index: 9;
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
		variant === 'todo-edit-feature' &&
		`
        position: relative;
        width: 28rem;
        min-height: 3.6rem;
        background-color: var(--dark-grey);
        border: none;
        border-radius: 4rem;
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        gap: 1.2rem;
        padding: 0 1rem 0 4.3rem;
    `}
	${({ variant }) =>
		variant === 'todolist-small' &&
		`
        position: relative;
        width: 31rem;
        min-height: 3.6rem;
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
		variant === 'addtodo' &&
		`
        width: 31rem;
        min-height: 3.6rem;
        background-color: var(--dark-grey);
        border-radius: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        padding: 0.5rem 1rem 0rem 1rem;
`}
`;

export default StyledList;
