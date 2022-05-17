import AddProject1 from '../src/components/AddProject1';
import FeatureView from '../src/components/FeatureView/FeatureView';
import ProjectCardGridHome from '../src/components/Projectcard Grid Home/ProjectCardGridHome';

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
