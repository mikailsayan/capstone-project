import FeatureCardListProject from '../../src/components/FeatureCardListProject/FeatureCardListProject';
import EditTodoProject from '../../src/components/EditTodoProject/EditTodoProject';
import StyledMain from '../../src/components/styled-components/StyledMain';

export default function Home() {
	return (
		<div>
			<StyledMain>
				<FeatureCardListProject />
				<EditTodoProject />
			</StyledMain>
		</div>
	);
}
