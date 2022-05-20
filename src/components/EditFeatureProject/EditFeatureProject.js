import StyledSection from '../styled-components/StyledSection';
import StyledForm from '../styled-components/StyledForm';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledDiv from '../styled-components/StyledDiv';
import StyledButton from '../styled-components/StyledButton';
import Typography from '../styled-components/Typography';
import MySVG from '../MySVG';

export default function EditFeatureProject() {
	return (
		<StyledForm>
			<StyledSection variant="middle-grey">
				<Typography variant="h2" component="h2">
					Projektname
				</Typography>
				<MySVG
					variant="cancel"
					position="absolute"
					size="2.6rem"
					top="-3.5rem"
					right="0.5rem"
				/>

				<StyledLabel variant="default" htmlFor="featurename">
					Featurename
				</StyledLabel>
				<StyledInput
					required
					variant="full"
					id="featurename"
					name="featurename"
					type="text"
				/>
				<StyledLabel variant="default" htmlFor="begindate">
					Startdatum:
				</StyledLabel>
				<StyledDiv variant="center">
					<StyledInput variant="date" id="begindate" name="begindate" type="date" />
					<MySVG variant="calender" size="2.9rem" />
				</StyledDiv>
				<StyledLabel variant="default" htmlFor="enddate">
					Enddatum:
				</StyledLabel>
				<StyledDiv variant="center">
					<StyledInput variant="date" id="enddate" name="enddate" type="date" />
					<MySVG variant="calender" size="2.9rem" />
				</StyledDiv>
			</StyledSection>
			<StyledButton variant="donebutton" type="submit">
				Speichern
			</StyledButton>
		</StyledForm>
	);
}
