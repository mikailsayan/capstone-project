import StyledHeader from '../styled-components/StyledHeader';
import StyledImage from '../styled-components/StyledImage';

export default function Header() {
	return (
		<StyledHeader>
			<StyledImage
				variant="promalogo"
				src="/logo.svg"
				alt="logo-svg"
				width={186}
				height={41}
			/>
		</StyledHeader>
	);
}
