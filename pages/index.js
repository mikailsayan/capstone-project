import AddProject1 from '../src/components/AddProject1';
import FeatureViewCard from '../src/components/FeatureView/FeatureView';
import ProjectCardListHome from '../src/components/ProjectCardListHome/ProjectCardListHome';
import FeatureCardListProject from '../src/components/FeatureCardListProject/FeatureCardListProject';

export default function Home() {
	return (
		<div>
			<main>
				<FeatureViewCard />
				<FeatureCardListProject />
				<ProjectCardListHome />
				<AddProject1 />
			</main>
		</div>
	);
}
