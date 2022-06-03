import FeatureCardList from '../../src/components/FeatureCardList/FeatureCardList';
import EditTodo from '../../src/components/EditTodo/EditTodo';
import StyledMain from '../../src/components/styled-components/StyledMain';
import StyledArticle from '../../src/components/styled-components/StyledArticle';
import Typography from '../../src/components/styled-components/Typography';
import StyledDiv from '../../src/components/styled-components/StyledDiv';
import StyledParagraph from '../../src/components/styled-components/StyledParagraph';
import MySVG from '../../src/components/MySVG';
import useStore from '../../src/hooks/useStore';
import { useState } from 'react';

export default function Home() {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
	const projectszustand = useStore(state => state.projectszustand);
	const dropSelect = useStore(state => state.dropSelect);

	return (
		<div>
			<StyledMain>
				<StyledArticle variant="headlinebox">
					<Typography variant="h1" size="2rem">
						Projekte
					</Typography>
					<StyledDiv
						variant="dropdown"
						onClick={() => {
							setDropdownIsOpen(true);
						}}
					>
						<MySVG variant="dropdown" size="2.3rem" />
						{dropdownIsOpen ? (
							<StyledDiv variant="dropdown-menu">
								{projectszustand.map(project => {
									const index = projectszustand.findIndex(
										projectIndex => projectIndex.id === project.id
									);
									return (
										<StyledDiv
											key={project.id}
											variant="dropdown-content"
											onClick={() => {
												dropSelect(index);
											}}
										>
											<StyledParagraph variant="dropdown-content">
												{project.name}
											</StyledParagraph>
										</StyledDiv>
									);
								})}
							</StyledDiv>
						) : (
							''
						)}
					</StyledDiv>
				</StyledArticle>
				<FeatureCardList />
				<EditTodo />
			</StyledMain>
		</div>
	);
}
