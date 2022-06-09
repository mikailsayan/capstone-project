import useStore from '../../hooks/useStore';
import StyledArticle from '../styled-components/StyledArticle';
import StyledButtonModal from '../styled-components/StyledButtonModal';
import StyledDiv from '../styled-components/StyledDiv';

export default function DeleteModal() {
	//const modalState = useStore(state => state.modalState);
	const setModalState = useStore(state => state.setModalState);

	return (
		<section>
			<StyledArticle variant="deletemodal">
				<StyledDiv variant="deletemodal">
					<h2>Projekt wirklich löschen?</h2>
				</StyledDiv>
				<StyledDiv variant="deletemodalbuttons">
					<StyledButtonModal type="button" variant="deletemodal">
						Löschen
					</StyledButtonModal>
					<StyledButtonModal
						type="button"
						variant="modalbutton"
						onClick={() => {
							setModalState();
						}}
					>
						Abbrechen
					</StyledButtonModal>
				</StyledDiv>
			</StyledArticle>
		</section>
	);
}
