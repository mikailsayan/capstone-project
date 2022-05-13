import styled from 'styled-components';

export default function Typography({ children, variant, component, ...rest }) {
	switch (variant) {
		case 'h1':
			return (
				<StyledH1 {...rest} as={component}>
					{children}
				</StyledH1>
			);
		case 'h2':
			return (
				<StyledH2 {...rest} as={component}>
					{children}
				</StyledH2>
			);
		case 'h3':
			return (
				<StyledH3 {...rest} as={component}>
					{children}
				</StyledH3>
			);
		case 'h4':
			return (
				<StyledH4 {...rest} as={component}>
					{children}
				</StyledH4>
			);
		case 'h5':
			return (
				<StyledH5 {...rest} as={component}>
					{children}
				</StyledH5>
			);
		case 'h6':
			return (
				<StyledH6 {...rest} as={component}>
					{children}
				</StyledH6>
			);
		default:
			return (
				<StyledP {...rest} as={component}>
					{children}
				</StyledP>
			);
	}
}

const StyledH1 = styled.h1`
	font-size: ${({ size }) => size};
`;
const StyledH2 = styled.h2`
	font-size: ${({ size }) => size};
`;
const StyledH3 = styled.h3`
	font-size: ${({ size }) => size};
`;
const StyledH4 = styled.h4`
	font-size: ${({ size }) => size};
`;
const StyledH5 = styled.h5`
	font-size: ${({ size }) => size};
`;
const StyledH6 = styled.h6`
	font-size: ${({ size }) => size};
`;
const StyledP = styled.p`
	font-size: ${({ size }) => size};
`;
