import styled from 'styled-components';

const StyledDiv = styled.div`
	${({ variant }) =>
		variant === 'stepbox' &&
		`
		position: absolute;
		top: 1.5rem;
		right: 2.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 7.8rem;
		height: 2.6rem;
		background-color: #b6b6b6;
		border-radius: 4rem;
    `}

	${({ variant }) =>
		variant === 'dropdown-absolute' &&
		`
		position: absolute;
		top: -4rem;
		left: 1rem;
		z-index: 12;
    `}

	${({ variant }) =>
		variant === 'open-todonote' &&
		`
		display: flex;
		align-items: center;
		width: 23rem;
		height: 3.6rem;
    `}
	
	${({ variant }) =>
		variant === 'dropdown' &&
		`
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
    `}

	${({ variant }) =>
		variant === 'dropdown-menu' &&
		`
		position: absolute;
		top: 8.5rem;
		width: 25rem;
		min-height: 2rem;
		box-shadow: 0 0 5rem rgba(0, 0, 0, 0.3);
		z-index: 10;
    `}

	${({ variant }) =>
		variant === 'dropdown-content' &&
		`
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem 1rem 0.5rem 1rem;
		width: 25rem;
		height: 5rem;
		background-color: #dedede;
		border: 1px solid white;
		margin: 0;
   `}

   ${({ variant }) =>
		variant === 'dropdown-title' &&
		`
		display: flex;
		align-items: center;
		gap: 1rem;
	`}


	${({ variant }) =>
		variant === 'list' &&
		`
		position: relative;
		width: 39rem;
		margin-top: 7rem;
   `}

   ${({ variant }) =>
		variant === 'overflow' &&
		`
		width: 31rem;
		max-height: 15rem;
		margin: 1rem 1rem 0 1rem;
		overflow: auto;
   `}
   
   

	${({ variant }) =>
		variant === 'center' &&
		`
		display: flex;
		align-items: center;
		justify-content: center;
    `}

	${({ variant }) =>
		variant === 'cardtitle' &&
		`
		display: flex;
		align-items: center;
		gap: 1rem;
		margin: 1rem 1rem 2rem 1rem;
    `}

	${({ variant }) =>
		variant === 'statusbox' &&
		`
		display: flex;
		position: absolute;
		right: 6rem;
		border: 0.3rem solid var(--status-border);
		border-radius: 4rem;
		padding: 0.3rem 1.9rem 0.3rem 1.9rem;
	`}

	${({ variant }) =>
		variant === 'complexity-easy' &&
		`
		display: flex;
		position: absolute;
		right: 1rem;
		width: 2rem;
		height: 2rem;
		border: 0.2rem solid white;
		border-radius: 50%;
		background-color: var(--green-complex);
	`}

	${({ variant }) =>
		variant === 'complexity-middle' &&
		`
		display: flex;
		position: absolute;
		right: 1rem;
		width: 2rem;
		height: 2rem;
		border: 0.2rem solid white;
		border-radius: 50%;
		background-color: var(--yellow-complex);
	`}

	${({ variant }) =>
		variant === 'complexity-hard' &&
		`
		display: flex;
		position: absolute;
		right: 1rem;
		width: 2rem;
		height: 2rem;
		border: 0.2rem solid white;
		border-radius: 50%;
		background-color: var(--red-complex);
	`}

	${({ variant }) =>
		variant === 'todonotes' &&
		`
		display: flex;
		width: 30.3rem;
		min-height: 17.3rem;
		background-color: var(--todo-note);
		padding: 0.3rem 2rem 0.3rem 2rem;
		margin: 1rem 0.5rem 1rem 0.5rem;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
	`}

	${({ variant }) =>
		variant === 'green-complex' &&
		`
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		background-color: var(--green-complex);
	`}

	${({ variant }) =>
		variant === 'yellow-complex' &&
		`
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		background-color: var(--yellow-complex);
	`}

	${({ variant }) =>
		variant === 'red-complex' &&
		`
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		background-color: var(--red-complex);
	`}
`;

export default StyledDiv;
