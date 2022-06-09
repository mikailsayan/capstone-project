import styled from 'styled-components';

const StyledDivDropdown = styled.div`
	${({ variant }) =>
		variant === 'dropdown' &&
		`
		width: 20rem;
		border-radius: 10px;
		box-shadow: 0 10px 25px rgba(0,0,0,.1);
		background-color: white;
		margin-top: 2rem;
    `}

	${({ variant }) =>
		variant === 'dropdown-header' &&
		`
        padding: 15px;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
    `}

	${({ variant }) =>
		variant === 'dropdown-body' &&
		`
		padding: 5px;
		border-top: 1px solid #E5E8EC;
		display: none;
    `}

	${({ variant }) =>
		variant === 'dropdown-body-open' &&
		`
		padding: 5px;
		border-top: 1px solid #E5E8EC;
		display: block;
    `}

	${({ variant }) =>
		variant === 'dropdown-item' &&
		`
		padding: 10px;
		cursor: pointer;
   `}

   ${({ variant }) =>
		variant === 'icon' &&
		`
		font-size: 13px;
		color: #91A5BE;
		transform: rotate(0deg);
		transition: all .2s ease-in-out;

		&:active {
			transform: rotate(90deg);
		}
	`}
`;

export default StyledDivDropdown;
