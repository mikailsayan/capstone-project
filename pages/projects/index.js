import FeatureCardListProject from '../../src/components/FeatureCardListProject/FeatureCardListProject';
import FeatureViewCard from '../../src/components/FeatureView/FeatureView';
import EditFeatureProject from '../../src/components/EditFeatureProject/EditFeatureProject';
import AddFeatureProject from '../../src/components/AddFeatureProject/AddFeatureProject';
import AddTodoProject from '../../src/components/AddTodoProject/AddTodoProject';

export default function Home() {
	return (
		<div>
			<main>
				<FeatureViewCard />
				<FeatureCardListProject />
				<EditFeatureProject />
				<AddFeatureProject />
				<AddTodoProject />
			</main>
		</div>
	);
}
