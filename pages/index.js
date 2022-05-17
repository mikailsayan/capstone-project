import AddProject1 from '../src/components/AddProject1';
import ProjectCardGridHome from '../src/components/Projectcard Grid Home/ProjectCardGridHome';
import FeatureView from '../src/components/FeatureView/FeatureView';

export default function Home() {
	return (
		<div>
			<main>
				<FeatureView />
				<ProjectCardGridHome />
				<AddProject1 />
			</main>
		</div>
	);
}
