import ProjectCardList from '../src/components/ProjectCardList/ProjectCardList';
import StyledMain from '../src/components/styled-components/StyledMain';

export default function Home() {
	return (
		<div>
			<StyledMain>
				<ProjectCardList />
			</StyledMain>
		</div>
	);
}
