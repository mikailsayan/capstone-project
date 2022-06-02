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
		position: relative;
		min-height: 40rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border: 2px solid black;
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
        `}

	${({ variant }) =>
		variant === 'overflow' &&
		`
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100vw;
			height: 53rem;
            overflow: scroll;
        `}
`;

export default StyledArticle;
