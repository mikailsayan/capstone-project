import FeatureCardSmall from '../FeatureCardSmall/FeatureCardSmall';
import StyledSection from '../styled-components/StyledSection';
import StyledUL from '../styled-components/StyledUL';
import StyledDiv from '../styled-components/StyledDiv';
import StyledParagraph from '../styled-components/StyledParagraph';
import Typography from '../styled-components/Typography';
import useStore from '../../hooks/useStore';
import MySVG from '../MySVG';

export default function FeatureCardListProject() {
	const projectszustand = useStore(state => state.projectszustand);
	const dropdown = useStore(state => state.dropdown);
	const isClicked = useStore(state => state.isClicked);
	const dropSelect = useStore(state => state.dropSelect);

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
					<MySVG variant="dropdown" size="2.2rem" />
					{dropdown[0].isClicked ? (
						<StyledDiv variant="dropdown-menu">
							{projectszustand.map(project => {
								const index = projectszustand.findIndex(
									projectIndex => projectIndex.id === project.id
								);
								return (
									<StyledDiv
										key={project.id}
										variant="dropdown-content"
										onClick={() => {
											dropSelect(index);
										}}
									>
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
			{projectszustand.map(project => {
				return (
					project.selected && (
						<StyledSection key={project.id} variant="overflow">
							<StyledUL>
								{project.feature.map(feature => {
									const index = project.feature.findIndex(
										featureIndex => featureIndex.id === feature.id
									);
									return (
										<li key={feature.id}>
											<FeatureCardSmall
												project={project}
												feature={feature}
												index={index}
											/>
										</li>
									);
								})}
							</StyledUL>
						</StyledSection>
					)
				);
			})}
		</StyledDiv>
	);
}
