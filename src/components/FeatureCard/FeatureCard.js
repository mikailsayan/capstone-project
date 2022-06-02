import FeatureCardDetailed from '../FeatureCardDetailed/FeatureCardDetailed';
import FeatureCardBrief from '../FeatureCardBrief/FeatureCardBrief';

export default function FeatureCard({ feature, featureIndex, projectIndex }) {
	return feature.selected ? (
		<FeatureCardDetailed
			feature={feature}
			featureIndex={featureIndex}
			projectIndex={projectIndex}
		/>
	) : (
		<FeatureCardBrief
			feature={feature}
			featureIndex={featureIndex}
			projectIndex={projectIndex}
		/>
	);
}
