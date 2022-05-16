import StyledSection from '../styled-components/StyledSection';
import StyledImage from '../styled-components/StyledImage';
import StyledDiv from '../styled-components/StyledDiv';
import StyledUL from '../styled-components/StyledUL';
import StyledList from '../styled-components/StyledList';
import Typography from '../styled-components/Typography';
import features from '../../services/static-features.json';

export default function ProjectCardHome() {
	return (
		<StyledSection variant="small-grey">
			<StyledDiv variant="cardtitle">
				<StyledImage
					variant="projecticon"
					src="/projecticon.svg"
					alt="Project Icon"
					width={36}
					height={36}
				/>
				<Typography variant="h2">Projektname</Typography>
			</StyledDiv>
			<StyledUL variant="list-in-card">
				{features.map(feature => {
					return (
						<StyledList key={feature.id} variant="featurelist-small">
							<StyledImage
								variant="bulletpoint"
								src="/bulletpoint.svg"
								alt="Bullet Point"
								width={20}
								height={20}
							/>
							{feature.name}
						</StyledList>
					);
				})}
			</StyledUL>
		</StyledSection>
	);
}
