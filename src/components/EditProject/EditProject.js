import StyledSectionCard from '../styled-components/StyledSectionCard';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledDiv from '../styled-components/StyledDiv';
import StyledDivProjectColor from '../styled-components/StyledDivProjectColor';
import StyledArticle from '../styled-components/StyledArticle';
import { format } from 'date-fns';
import MySVG from '../MySVG';
import useStore from '../../hooks/useStore';
import styled from 'styled-components';

export default function EditProject({ project, projectIndex }) {
	const toggleEditProject = useStore(state => state.toggleEditProject);
	const saveProjectName = useStore(state => state.saveProjectName);
	const saveProjectBeginDate = useStore(state => state.saveProjectBeginDate);
	const saveProjectEndDate = useStore(state => state.saveProjectEndDate);
	const saveProjectColor = useStore(state => state.saveProjectColor);

	const today = new Date();
	const date = format(
		new Date(today.getFullYear(), today.getMonth(), today.getDate()),
		'yyyy-MM-dd'
	);

	return (
		<StyledSectionCard variant="add-project">
			<StyledSaveButton
				onClick={() => {
					toggleEditProject(projectIndex);
				}}
			>
				<MySVG variant="save2" color="var(--save-icon)" size="2.6rem" />
			</StyledSaveButton>
			<StyledLabel variant="toplabel" htmlFor="projectname">
				Projektname
			</StyledLabel>
			<StyledInput
				required
				variant="full"
				id="projectname"
				name="projectname"
				type="text"
				value={project.name}
				onChange={event => {
					saveProjectName(projectIndex, event.target.value);
				}}
			/>
			<StyledLabel variant="default" htmlFor="date">
				Zeitraum
			</StyledLabel>
			<StyledDiv variant="date">
				<StyledInput
					variant="date"
					id="begindate"
					name="date"
					type="date"
					min={date}
					value={project.begin}
					onChange={event => {
						saveProjectBeginDate(projectIndex, event.target.value);
					}}
				/>
				<p>-</p>
				<StyledInput
					variant="date"
					id="enddate"
					name="date"
					type="date"
					min={date}
					value={project.end}
					onChange={event => {
						saveProjectEndDate(projectIndex, event.target.value);
					}}
				/>
			</StyledDiv>
			<StyledLabel variant="default" htmlFor="projectcolor">
				Farbe
			</StyledLabel>
			<StyledArticle variant="flexcenter">
				<StyledInput
					variant="projectcolor"
					type="radio"
					name="projectcolor"
					id="blue"
					value="blue"
					checked={project.color === 'blue'}
					onChange={event => {
						saveProjectColor(projectIndex, event.target.value);
					}}
				/>
				<StyledLabel variant="projectcolor" htmlFor="blue">
					<StyledDivProjectColor variant="projectcolor-blue" />
				</StyledLabel>
				<StyledInput
					variant="projectcolor"
					type="radio"
					name="projectcolor"
					id="purple"
					value="purple"
					checked={project.color === 'purple'}
					onChange={event => {
						saveProjectColor(projectIndex, event.target.value);
					}}
				/>
				<StyledLabel variant="projectcolor" htmlFor="purple">
					<StyledDivProjectColor variant="projectcolor-purple" />
				</StyledLabel>
				<StyledInput
					variant="projectcolor"
					type="radio"
					name="projectcolor"
					id="yellow"
					value="yellow"
					checked={project.color === 'yellow'}
					onChange={event => {
						saveProjectColor(projectIndex, event.target.value);
					}}
				/>
				<StyledLabel variant="projectcolor" htmlFor="yellow">
					<StyledDivProjectColor variant="projectcolor-yellow" />
				</StyledLabel>
				<StyledInput
					variant="projectcolor"
					type="radio"
					name="projectcolor"
					id="red"
					value="red"
					checked={project.color === 'red'}
					onChange={event => {
						saveProjectColor(projectIndex, event.target.value);
					}}
				/>
				<StyledLabel variant="projectcolor" htmlFor="red">
					<StyledDivProjectColor variant="projectcolor-red" />
				</StyledLabel>
				<StyledInput
					variant="projectcolor"
					type="radio"
					name="projectcolor"
					id="green"
					value="green"
					checked={project.color === 'green'}
					onChange={event => {
						saveProjectColor(projectIndex, event.target.value);
					}}
				/>
				<StyledLabel variant="projectcolor" htmlFor="green">
					<StyledDivProjectColor variant="projectcolor-green" />
				</StyledLabel>
			</StyledArticle>
		</StyledSectionCard>
	);
}

const StyledSaveButton = styled.button`
	position: absolute;
	top: 1.8rem;
	right: 2.5rem;
	border: none;
	background: transparent;
`;
