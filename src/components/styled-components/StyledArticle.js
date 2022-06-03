import styled from 'styled-components';

const StyledArticle = styled.article`
	${({ variant }) =>
		variant === 'flexcenter' &&
		`
        display: flex;
        gap: 2rem;
        margin: 1.8rem 0 0 2rem;
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
		height: 6rem;
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
`;

export default StyledArticle;
