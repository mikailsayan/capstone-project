import StyledDivDropdown from '../../src/components/styled-components/StyledDivDropdown';
//import StyledParagraph from '../../src/components/styled-components/StyledParagraph';
//import MySVG from '../../src/components/MySVG';
import useStore from '../../src/hooks/useStore';
import { useState } from 'react';

export default function Dropdown() {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

	const projects = useStore(state => state.projects);
	const selectProject = useStore(state => state.selectProject);

	return (
		<StyledDivDropdown variant="dropdown">
			<StyledDivDropdown
				variant="dropdown-header"
				onClick={() => {
					setDropdownIsOpen(!dropdownIsOpen);
				}}
			>
				Projekt auswählen
			</StyledDivDropdown>
			{dropdownIsOpen ? (
				<StyledDivDropdown variant="dropdown-body">
					{projects.map(project => {
						const projectIndex = projects.findIndex(
							projectIndex => projectIndex.id === project.id
						);
						return (
							<StyledDivDropdown
								key={project.id}
								id={project.id}
								variant="dropdown-item"
								onClick={() => {
									selectProject(projectIndex);
									setDropdownIsOpen(!dropdownIsOpen);
								}}
							>
								{project.name}
							</StyledDivDropdown>
						);
					})}
				</StyledDivDropdown>
			) : (
				<StyledDivDropdown variant="dropdown-body-open">
					{projects.map(project => {
						const projectIndex = projects.findIndex(
							projectIndex => projectIndex.id === project.id
						);
						return (
							<StyledDivDropdown
								key={project.id}
								id={project.id}
								variant="dropdown-item"
								onClick={() => {
									selectProject(projectIndex);
									setDropdownIsOpen(!dropdownIsOpen);
								}}
							>
								{project.name}
							</StyledDivDropdown>
						);
					})}
				</StyledDivDropdown>
			)}
		</StyledDivDropdown>
	);
}
