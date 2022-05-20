import StyledSection from '../styled-components/StyledSection';
import StyledForm from '../styled-components/StyledForm';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledTextarea from '../styled-components/StyledTextarea';
import StyledDiv from '../styled-components/StyledDiv';
import Typography from '../styled-components/Typography';
import MySVG from '../MySVG';
import StyledButton from '../styled-components/StyledButton';
import { useState, React } from 'react';
import useStore from '../../hooks/useStore';

export default function AddProjectStep1() {
	const [projectnameInputValue, setProjectnameInputValue] = useState('');
	const [notesInputValue, setNotesInputValue] = useState('');
	const [beginInputValue, setBeginInputValue] = useState('');
	const [endInputValue, setEndInputValue] = useState('');
	const addProject = useStore(state => state.addProject);

	return (
		<StyledForm
			onSubmit={event => {
				event.preventDefault();
				addProject(projectnameInputValue, notesInputValue, beginInputValue, endInputValue);
				setProjectnameInputValue('');
				setNotesInputValue('');
				setBeginInputValue('');
				setEndInputValue('');
			}}
		>
			<StyledSection variant="big-grey">
				<StyledDiv variant="stepbox">
					<Typography variant="p" size="1.4rem">
						1 / 2
					</Typography>
				</StyledDiv>
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
					id="notes"
					name="notes"
					rows="5"
					cols="33"
					value={notesInputValue}
					onChange={event => {
						setNotesInputValue(event.target.value);
					}}
				/>
				<StyledLabel variant="default" htmlFor="begindate">
					Startdatum:
				</StyledLabel>
				<StyledDiv variant="center">
					<StyledInput
						variant="date"
						id="begindate"
						name="begindate"
						type="date"
						value={beginInputValue}
						onChange={event => {
							setBeginInputValue(event.target.value);
						}}
					/>
					<MySVG variant="calender" size="2.9rem" />
				</StyledDiv>
				<StyledLabel variant="default" htmlFor="enddate">
					Enddatum:
				</StyledLabel>
				<StyledDiv variant="center">
					<StyledInput
						variant="date"
						id="enddate"
						name="enddate"
						type="date"
						value={endInputValue}
						onChange={event => {
							setEndInputValue(event.target.value);
						}}
					/>
					<MySVG variant="calender" size="2.9rem" />
				</StyledDiv>
			</StyledSection>
			<StyledButton variant="mainbutton" type="submit">
				Nächster Schritt
			</StyledButton>
		</StyledForm>
	);
}
