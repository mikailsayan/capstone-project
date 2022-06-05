import styled from 'styled-components';

const StyledDivDropdown = styled.div`
	${({ variant }) =>
		variant === 'dropdown' &&
		`
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
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
		variant === 'dropdown-menu' &&
		`
		position: absolute;
		top: 1rem;
		right: 50%;
		transform: translate(50%, 50%);
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
`;

export default StyledDivDropdown;
