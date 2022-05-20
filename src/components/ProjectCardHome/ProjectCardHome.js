import StyledSection from '../styled-components/StyledSection';
import StyledDiv from '../styled-components/StyledDiv';
import StyledUL from '../styled-components/StyledUL';
import StyledImage from '../styled-components/StyledImage';
import StyledList from '../styled-components/StyledList';
import features from '../../services/static-features.json';
import Typography from '../styled-components/Typography';
import MySVG from '../MySVG';

export default function ProjectCardHome({ project }) {
	return (
		<StyledSection variant="small-grey">
			<StyledDiv variant="cardtitle">
				<MySVG variant="projecticon" size="3.6rem" />
				<Typography variant="h3" component="h3" size="1.7rem">
					{project.name}
				</Typography>
			</StyledDiv>
			<StyledUL variant="list-in-card">
				{features.slice(0, 3).map(feature => {
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
