import FeatureCard from '../FeatureCard/FeatureCard';
import StyledArticle from '../styled-components/StyledArticle';
import StyledUL from '../styled-components/StyledUL';
import StyledButton from '../styled-components/StyledButton';
import useStore from '../../hooks/useStore';
import StyledSectionCardRaw from '../styled-components/StyledSectionCardRaw';
import AddFeature from '../AddFeature/AddFeature';

export default function FeatureCardList() {
	const projects = useStore(state => state.projects);
	const addFeatureState = useStore(state => state.addFeatureState);
	const toggleAdd = useStore(state => state.toggleAdd);
	const addfeatureform = 'addfeatureform';

	return (
		<StyledSectionCardRaw variant="featurelist">
			<StyledArticle>
				{projects.map(project => {
					const projectIndex = projects.findIndex(
						projectIndex => projectIndex.id === project.id
					);
					return (
						project.selected && (
							<StyledUL key={project.id}>
								{addFeatureState ? (
									<li>
										<AddFeature
											project={project}
											projectIndex={projectIndex}
											addfeatureform={addfeatureform}
										/>
									</li>
								) : (
									''
								)}
								{project.feature.map(feature => {
									const featureIndex = project.feature.findIndex(
										featureIndex => featureIndex.id === feature.id
									);
									return (
										<li key={feature.id}>
											<FeatureCard
												project={project}
												feature={feature}
												featureIndex={featureIndex}
												projectIndex={projectIndex}
											/>
										</li>
									);
								})}
							</StyledUL>
						)
					);
				})}
			</StyledArticle>
			<StyledArticle variant="buttonarea">
				{addFeatureState ? (
					<StyledButton variant="donebutton" form={addfeatureform}>
						Hinzufügen
					</StyledButton>
				) : (
					<StyledButton
						variant="mainbutton"
						type="submit"
						onClick={() => {
							toggleAdd();
						}}
					>
						Feature hinzufügen
					</StyledButton>
				)}
			</StyledArticle>
		</StyledSectionCardRaw>
	);
}
