import FeatureCardSmall from '../FeatureCardSmall/FeatureCardSmall';
import StyledSection from '../styled-components/StyledSection';
import StyledUL from '../styled-components/StyledUL';
import StyledDiv from '../styled-components/StyledDiv';
import StyledParagraph from '../styled-components/StyledParagraph';
import Typography from '../styled-components/Typography';
import useStore from '../../hooks/useStore';

export default function FeatureCardListProject() {
	const projectszustand = useStore(state => state.projectszustand);
	const dropdown = useStore(state => state.dropdown);
	const isClicked = useStore(state => state.isClicked);

	return (
		<StyledDiv variant="list">
			<StyledDiv variant="dropdown-absolute">
				<StyledDiv
					variant="dropdown"
					onClick={() => {
						isClicked();
					}}
				>
					<Typography variant="h2" component="h2">
						Projektname
					</Typography>
					{dropdown[0].isClicked ? (
						<StyledDiv variant="dropdown-menu">
							{projectszustand.map(project => {
								return (
									<StyledDiv key={project.id} variant="dropdown-content">
										<StyledParagraph variant="dropdown-content">
											{project.name}
										</StyledParagraph>
									</StyledDiv>
								);
							})}
						</StyledDiv>
					) : (
						''
					)}
				</StyledDiv>
			</StyledDiv>
			<StyledSection variant="overflow">
				<StyledUL>
					{projectszustand.map(project => {
						return project.feature.map(feature => {
							const index = project.feature.findIndex(
								featureIndex => featureIndex.id === feature.id
							);
							return (
								<li key={feature.id}>
									<FeatureCardSmall index={index} feature={feature} />
								</li>
							);
						});
					})}
				</StyledUL>
			</StyledSection>
		</StyledDiv>
	);
}
