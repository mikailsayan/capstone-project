import styled from 'styled-components';

const StyledButtonModal = styled.button`
	padding: 0.8rem 2.5rem 0.8rem 2.5rem;
	font-size: 1.3rem;
	box-shadow: 0 0 2rem rgba(0, 0, 0, 0.16);
	border-radius: 2rem;
	border: none;

	${({ variant }) =>
		variant === 'deletemodal' &&
		`
        background-color: var(--red-button);
    `}

	${({ variant }) =>
		variant === 'cancelmodal' &&
		`
        background-color: var(--grey-color);
    `}
`;

export default StyledButtonModal;
