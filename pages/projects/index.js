import FeatureCardList from '../../src/components/FeatureCardList/FeatureCardList';
import EditTodo from '../../src/components/EditTodo/EditTodo';
import StyledMain from '../../src/components/styled-components/StyledMain';

export default function Home() {
	return (
		<div>
			<StyledMain>
				<FeatureCardList />
				<EditTodo />
			</StyledMain>
		</div>
	);
}
