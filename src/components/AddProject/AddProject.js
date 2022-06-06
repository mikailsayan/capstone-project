import StyledSectionCard from '../styled-components/StyledSectionCard';
import StyledForm from '../styled-components/StyledForm';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledDiv from '../styled-components/StyledDiv';
import StyledDivProjectColor from '../styled-components/StyledDivProjectColor';
import StyledArticle from '../styled-components/StyledArticle';
import { format } from 'date-fns';
import StyledButton from '../styled-components/StyledButton';
import { useState, React } from 'react';
import useStore from '../../hooks/useStore';
import StyledSectionCardRaw from '../styled-components/StyledSectionCardRaw';
import { useRouter } from 'next/router';

export default function AddProject() {
	const [projectnameInputValue, setProjectnameInputValue] = useState('');
	const [beginInputValue, setBeginInputValue] = useState('');
	const [endInputValue, setEndInputValue] = useState('');
	const addProject = useStore(state => state.addProject);
	const setAppState = useStore(state => state.setAppState);
	const [radio, setRadio] = useState('grey');

	const router = useRouter();
	const today = new Date();
	const date = format(
		new Date(today.getFullYear(), today.getMonth(), today.getDate()),
		'yyyy-MM-dd'
	);

	return (
		<StyledSectionCardRaw variant="featurelist">
			<StyledForm
				id="addproject"
				onSubmit={event => {
					event.preventDefault();
					addProject(projectnameInputValue, beginInputValue, endInputValue, radio);
					setProjectnameInputValue('');
					setBeginInputValue('');
					setEndInputValue('');
					setRadio('');
					setAppState('projects');
					router.push('/');
				}}
			>
				<StyledSectionCard variant="add-project">
					<StyledLabel variant="toplabel" htmlFor="projectname">
						Projektname
					</StyledLabel>
					<StyledInput
						required
						variant="full"
						id="projectname"
						name="projectname"
						type="text"
						value={projectnameInputValue}
						onChange={event => {
							setProjectnameInputValue(event.target.value);
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
							value={beginInputValue}
							onChange={event => {
								setBeginInputValue(event.target.value);
							}}
						/>
						<p>-</p>
						<StyledInput
							variant="date"
							id="enddate"
							name="date"
							type="date"
							min={date}
							value={endInputValue}
							onChange={event => {
								setEndInputValue(event.target.value);
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
							checked={radio === 'blue'}
							onChange={event => {
								setRadio(event.target.value);
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
							checked={radio === 'purple'}
							onChange={event => {
								setRadio(event.target.value);
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
							checked={radio === 'yellow'}
							onChange={event => {
								setRadio(event.target.value);
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
							checked={radio === 'red'}
							onChange={event => {
								setRadio(event.target.value);
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
							checked={radio === 'green'}
							onChange={event => {
								setRadio(event.target.value);
							}}
						/>
						<StyledLabel variant="projectcolor" htmlFor="green">
							<StyledDivProjectColor variant="projectcolor-green" />
						</StyledLabel>
					</StyledArticle>
				</StyledSectionCard>
			</StyledForm>
			<StyledArticle variant="buttonarea">
				<StyledButton variant="donebutton" type="submit" form="addproject">
					Hinzufügen
				</StyledButton>
			</StyledArticle>
		</StyledSectionCardRaw>
	);
}
