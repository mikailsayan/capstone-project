import features from '../../services/static-features.json';
import FeatureCardSmall from '../FeatureCardSmall/FeatureCardSmall';
import StyledSection from '../styled-components/StyledSection';
import StyledUL from '../styled-components/StyledUL';

export default function FeatureCardListProject() {
	return (
		<StyledSection variant="overflow">
			<StyledUL>
				{features.map(feature => {
					return (
						<li key={feature.id}>
							<FeatureCardSmall feature={feature} />
						</li>
					);
				})}
			</StyledUL>
		</StyledSection>
	);
}
