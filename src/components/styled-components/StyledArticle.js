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
`;

export default StyledArticle;
