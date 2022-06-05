import StyledDivDropdown from '../../src/components/styled-components/StyledDivDropdown';
import StyledParagraph from '../../src/components/styled-components/StyledParagraph';
import MySVG from '../../src/components/MySVG';
import useStore from '../../src/hooks/useStore';
import { useState } from 'react';

export default function Dropdown() {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
	const projects = useStore(state => state.projects);
	const selectProject = useStore(state => state.selectProject);

	return (
		<StyledDivDropdown
			variant="dropdown"
			onClick={() => {
				setDropdownIsOpen(!dropdownIsOpen);
			}}
		>
			<MySVG variant="dropdown" size="2.3rem" />
			{dropdownIsOpen ? (
				<StyledDivDropdown variant="dropdown-menu">
					{projects.map(project => {
						const index = projects.findIndex(
							projectIndex => projectIndex.id === project.id
						);
						return (
							<StyledDivDropdown
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
							</StyledDivDropdown>
						);
					})}
				</StyledDivDropdown>
			) : (
				''
			)}
		</StyledDivDropdown>
	);
}
