import AddProjectStep1 from '../src/components/AddProjectStep1/AddProjectStep1';
import FeatureViewCard from '../src/components/FeatureView/FeatureView';
import ProjectCardListHome from '../src/components/ProjectCardListHome/ProjectCardListHome';
import FeatureCardListProject from '../src/components/FeatureCardListProject/FeatureCardListProject';
import EditFeatureProject from '../src/components/EditFeatureProject/EditFeatureProject';
import AddFeatureProject from '../src/components/AddFeatureProject/AddFeatureProject';
import AddTodoProject from '../src/components/AddTodoProject/AddTodoProject';

export default function Home() {
	return (
		<div>
			<main>
				<AddTodoProject />
				<EditFeatureProject />
				<AddFeatureProject />
				<FeatureViewCard />
				<FeatureCardListProject />
				<ProjectCardListHome />
				<AddProjectStep1 />
			</main>
		</div>
	);
}
