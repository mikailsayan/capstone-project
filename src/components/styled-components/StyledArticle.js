import styled from 'styled-components';

const StyledArticle = styled.article`
	${({ variant }) =>
		variant === 'flexcenter' &&
		`
        display: flex;
        gap: 1.7rem;
        margin: 1rem 0 0 2rem;
    `}

	${({ variant }) =>
		variant === 'dropdown-title' &&
		`
        display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
    `}

	${({ variant }) =>
		variant === 'headlinebox' &&
		`
		position: fixed;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 8.1rem;
		width: 100vw;
		height: 6.5rem;
		z-index: 25;
        `}


	${({ variant }) =>
		variant === 'buttonarea' &&
		`
		position: fixed;
		bottom: 8.1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 8rem;
		z-index: 20;
        `}

	${({ variant }) =>
		variant === 'projectlist' &&
		` 
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
    `}

	${({ variant }) =>
		variant === 'projectcolor-choice' &&
		` 
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 30rem;
		margin: 0 2rem 0 2rem;	

		
    `}

	${({ variant }) =>
		variant === 'cardbuttonarea' &&
		` 
		display: flex;
		justify-content: center;;
		align-items: center;
		width: 33rem;
		margin: 0.8rem 0 0.8rem 0;
		transition: 200ms;
		gap: 1.7rem;

		@media (min-width: 70rem) {
			width: 49rem;
		}
    `}

	${({ variant }) =>
		variant === 'deletemodal' &&
		` 
		position: fixed;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		top: 50%;
		right: 50%;
		transform: translate(50%, -50%);
		align-items: center;
		width: 30rem;
		height: 16rem;
		z-index: 25;
		border: 0.5rem solid var(--card-grey);
		border-radius: 2rem;

		@media (min-width: 70rem) {
			width: 40rem;
			height: 16rem;
		}
    `}
`;

export default StyledArticle;
