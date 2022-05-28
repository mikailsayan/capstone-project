import FeatureCardListProject from '../../src/components/FeatureCardListProject/FeatureCardListProject';
import AddFeatureProject from '../../src/components/AddFeatureProject/AddFeatureProject';
import AddTodoProject from '../../src/components/AddTodoProject/AddTodoProject';
import EditTodoProject from '../../src/components/EditTodoProject/EditTodoProject';
import StyledMain from '../../src/components/styled-components/StyledMain';

export default function Home() {
	return (
		<div>
			<StyledMain>
				<FeatureCardListProject />
				<AddFeatureProject />
				<AddTodoProject />
				<EditTodoProject />
			</StyledMain>
		</div>
	);
}
