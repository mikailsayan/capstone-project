import StyledFooter from '../styled-components/StyledFooter';
import StyledImage from '../styled-components/StyledImage';
import StyledUL from '../styled-components/StyledUL';

export default function Footer() {
	return (
		<StyledFooter>
			<StyledUL variant="footer">
				<li>
					<StyledImage
						variant="footer"
						src="/homepage.svg"
						alt="homepage-svg"
						width={42}
						height={42}
					/>
				</li>
				<li>
					<StyledImage
						variant="footeradd"
						src="/addproject.svg"
						alt="addproject-svg"
						width={57}
						height={57}
					/>
				</li>
				<li>
					<StyledImage
						variant="footer"
						src="/project.svg"
						alt="project-svg"
						width={42}
						height={42}
					/>
				</li>
			</StyledUL>
		</StyledFooter>
	);
}
