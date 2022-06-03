import FeatureCardDetailed from '../FeatureCardDetailed/FeatureCardDetailed';
import FeatureCardBrief from '../FeatureCardBrief/FeatureCardBrief';

export default function FeatureCard({ project, feature, featureIndex, projectIndex }) {
	return feature.selected ? (
		<FeatureCardDetailed
			project={project}
			feature={feature}
			featureIndex={featureIndex}
			projectIndex={projectIndex}
		/>
	) : (
		<FeatureCardBrief
			project={project}
			feature={feature}
			featureIndex={featureIndex}
			projectIndex={projectIndex}
		/>
	);
}
