import AddProjectStep1 from '../../src/components/AddProjectStep1/AddProjectStep1';
import AddFeatureProject from '../../src/components/AddFeatureProject/AddFeatureProject';
import StyledMain from '../../src/components/styled-components/StyledMain';

export default function Home() {
	return (
		<div>
			<StyledMain>
				<AddProjectStep1 />
				<AddFeatureProject />
			</StyledMain>
		</div>
	);
}
