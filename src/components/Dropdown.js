import StyledDiv from '../../src/components/styled-components/StyledDiv';
import StyledParagraph from '../../src/components/styled-components/StyledParagraph';
import MySVG from '../../src/components/MySVG';
import useStore from '../../src/hooks/useStore';
import { useState } from 'react';

export default function Dropdown() {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
	const projects = useStore(state => state.projects);
	const selectProject = useStore(state => state.selectProject);

	return (
		<StyledDiv
			variant="dropdown"
			onClick={() => {
				setDropdownIsOpen(!dropdownIsOpen);
			}}
		>
			<MySVG variant="dropdown" size="2.3rem" />
			{dropdownIsOpen ? (
				<StyledDiv variant="dropdown-menu">
					{projects.map(project => {
						const index = projects.findIndex(
							projectIndex => projectIndex.id === project.id
						);
						return (
							<StyledDiv
								key={project.id}
								variant="dropdown-content"
								onClick={() => {
									selectProject(index);
									setDropdownIsOpen(false);
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
	);
}
