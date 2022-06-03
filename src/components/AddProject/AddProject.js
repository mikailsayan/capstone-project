import StyledSection from '../styled-components/StyledSection';
import StyledForm from '../styled-components/StyledForm';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledTextarea from '../styled-components/StyledTextarea';
import StyledDiv from '../styled-components/StyledDiv';
import StyledArticle from '../styled-components/StyledArticle';
import Link from 'next/link';
import { format } from 'date-fns';
import StyledButton from '../styled-components/StyledButton';
import { useState, React } from 'react';
import useStore from '../../hooks/useStore';
import StyledSectionRaw from '../styled-components/StyledSectionRaw';

export default function AddProject() {
	const [projectnameInputValue, setProjectnameInputValue] = useState('');
	const [notesInputValue, setNotesInputValue] = useState('');
	const [beginInputValue, setBeginInputValue] = useState('');
	const [endInputValue, setEndInputValue] = useState('');
	const addProject = useStore(state => state.addProject);
	const [radio, setRadio] = useState('grey');

	const today = new Date();
	const date = format(
		new Date(today.getFullYear(), today.getMonth(), today.getDate()),
		'yyyy-MM-dd'
	);

	return (
		<StyledSectionRaw variant="featurelist">
			<StyledForm
				id="addproject"
				onSubmit={event => {
					event.preventDefault();
					addProject(
						projectnameInputValue,
						notesInputValue,
						beginInputValue,
						endInputValue,
						radio
					);
					setProjectnameInputValue('');
					setNotesInputValue('');
					setBeginInputValue('');
					setEndInputValue('');
					setRadio('');
				}}
			>
				<StyledSection variant="big-grey">
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
					<StyledLabel variant="default" htmlFor="notes">
						Notizen
					</StyledLabel>
					<StyledTextarea
						required
						variant="addproject"
						id="notes"
						name="notes"
						rows="5"
						cols="33"
						value={notesInputValue}
						onChange={event => {
							setNotesInputValue(event.target.value);
						}}
					/>
					<StyledLabel variant="default" htmlFor="date">
						Startdatum:
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
						<StyledLabel variant="complexity" htmlFor="easy">
							<StyledDiv variant="projectcolor-blue" />
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
						<StyledLabel variant="complexity" htmlFor="middle">
							<StyledDiv variant="projectcolor-purple" />
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
						<StyledLabel variant="complexity" htmlFor="hard">
							<StyledDiv variant="projectcolor-yellow" />
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
						<StyledLabel variant="complexity" htmlFor="hard">
							<StyledDiv variant="projectcolor-red" />
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
						<StyledLabel variant="complexity" htmlFor="hard">
							<StyledDiv variant="projectcolor-green" />
						</StyledLabel>
					</StyledArticle>
				</StyledSection>
			</StyledForm>
			<StyledArticle variant="buttonarea">
				<Link passHref href="/">
					<StyledButton variant="donebutton" type="submit" form="addproject">
						Hinzufügen
					</StyledButton>
				</Link>
			</StyledArticle>
		</StyledSectionRaw>
	);
}
