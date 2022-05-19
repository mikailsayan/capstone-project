import AddProject1 from '../src/components/AddProject1';
import FeatureViewCard from '../src/components/FeatureView/FeatureView';
import ProjectCardListHome from '../src/components/ProjectCardListHome/ProjectCardListHome';
import FeatureCardSmall from '../src/components/Featurecard Small/FeatureCardSmall';

export default function Home() {
	return (
		<div>
			<main>
				<FeatureViewCard />
				<FeatureCardSmall />
				<ProjectCardListHome />
				<AddProject1 />
			</main>
		</div>
	);
}
