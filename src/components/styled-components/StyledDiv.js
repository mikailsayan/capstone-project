import styled from 'styled-components';

const StyledDiv = styled.div`
	${({ variant }) =>
		variant === 'open-todonote' &&
		`
		display: flex;
		align-items: center;
		width: 23rem;
		height: 3.6rem;
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

		@media (min-width: 70rem) {
			width: 48rem;
		}
   `}
   
   ${({ variant }) =>
		variant === 'date' &&
		`
		display: flex;
		align-items: center;
		width: 30rem;
		margin: 0 2rem 1rem 2rem;
		justify-content: space-around;
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
		variant === 'projectcolor-blue' &&
		`
		display: flex;
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 50%;
		background-color: var(--blue-project);
	`}

	${({ variant }) =>
		variant === 'projectcolor-purple' &&
		`
		display: flex;
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 50%;
		background-color: var(--purple-project);
	`}

	${({ variant }) =>
		variant === 'projectcolor-yellow' &&
		`
		display: flex;
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 50%;
		background-color: var(--yellow-project);
	`}

	${({ variant }) =>
		variant === 'notesicon' &&
		`
		position: absolute;
		width: 1.8rem;
		height: 1.8rem;
		right: 4rem;
    `}

	${({ variant }) =>
		variant === 'projectcolor-red' &&
		`
		display: flex;
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 50%;
		background-color: var(--red-project);
	`}

	${({ variant }) =>
		variant === 'projectcolor-green' &&
		`
		display: flex;
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 50%;
		background-color: var(--green-project);
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
		variant === 'deletemodal' &&
		`
		margin: 1rem 1rem 4rem 1rem;
	`}

	${({ variant }) =>
		variant === 'deletemodalbuttons' &&
		`
		display: flex;
		gap: 2rem;
	`}
`;

export default StyledDiv;
