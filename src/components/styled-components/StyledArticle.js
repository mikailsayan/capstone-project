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
		variant === 'dropdown' &&
		`
		display: flex;
        `}
	
	${({ variant }) =>
		variant === 'list' &&
		`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 2rem 0 0rem 0;
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
		variant === 'overflow' &&
		` 
		display: flex;
		justify-content: center;
        align-items: center;
        width: 100vw;
        margin: 0 0 1rem 0;
    `}
`;

export default StyledArticle;
