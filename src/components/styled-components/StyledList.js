import styled from 'styled-components';

const StyledList = styled.li`
	z-index: 9;
	${({ variant }) =>
		variant === 'featurelist-small' &&
		`
        width: 30.3rem;
        height: 4.2rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        border-radius: 4rem;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        gap: 1rem;
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
        width: 30.3rem;
        height: 4rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        border-radius: 4rem;
        border: 0.2rem solid white;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        padding: 0 1rem 0 1rem;
`}
${({ variant }) =>
		variant === 'addtodo' &&
		`
        position: absolute;
        bottom: 2rem;
        right: 1.8rem;
        width: 31rem;
        height: 3.6rem;
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
