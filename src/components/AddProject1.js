import Image from 'next/image';
import StyledSection from './styled-components/StyledSection';
import StyledForm from './styled-components/StyledForm';

export default function AddProject1() {
	return (
		<StyledSection variant="big-grey">
			<article>
				<StyledForm>
					<label htmlFor="projectname">Projektname</label>
					<input required id="projectname" name="projectname" type="text" />
					<label htmlFor="notes">Notizen</label>
					<textarea required id="notes" name="notes" rows="5" cols="33" />
					<div>
						<label htmlFor="begindate">Startdatum:</label>
						<input id="begindate" name="begindate" type="date" />
						<Image src="/calender.svg" alt="calender-svg" width={29} height={29} />
					</div>
					<div>
						<label htmlFor="enddate">Enddatum:</label>
						<input id="enddate" name="enddate" type="date" />
						<Image src="/calender.svg" alt="calender-svg" width={29} height={29} />
					</div>
				</StyledForm>
			</article>
		</StyledSection>
	);
}
