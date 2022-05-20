import create from 'zustand';
import produce from 'immer';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		projectszustand: [
			{
				id: nanoid(),
				name: 'Projekt 1',
				notes: 'Hier sind ein paar Notizen',
				begin: '01/01/2001',
				end: '02/01/2001',
				icon: 'https://www.skopos.de/wp-content/uploads/2021/04/Element-5.svg',
				color: 'blue',
				edit: false,
			},
			{
				id: nanoid(),
				name: 'Projekt 2',
				notes: 'Hier sind ein paar Notizen',
				begin: '01/02/2001',
				end: '02/02/2001',
				icon: 'https://www.skopos.de/wp-content/uploads/2021/04/Element-5.svg',
				color: 'green',
				edit: false,
			},
		],
		featureszustand: [
			{
				id: nanoid(),
				name: 'Feature 1',
				begin: '01/01/2001',
				end: '02-01-2001',
				isChecked: false,
				edit: false,
			},
			{
				id: nanoid(),
				name: 'Feature 2',
				begin: '01/02/2001',
				end: '02-02-2001',
				isChecked: false,
				edit: false,
			},
		],
		todoszustand: [
			{
				id: nanoid(),
				name: 'Todo 1',
				note: 'Here are some notes for Todo 1',
				complexity: 'easy',
				begin: '01/03/2022',
				end: '03/03/2022',
				isChecked: false,
				edit: false,
				isOpen: false,
			},
			{
				id: nanoid(),
				name: 'Todo 2',
				note: 'Here are some notes for Todo 2',
				complexity: 'middle',
				begin: '01/03/2022',
				end: '03/03/2022',
				isChecked: false,
				edit: false,
				isOpen: false,
			},
			{
				id: nanoid(),
				name: 'Todo 3',
				note: 'Here are some notes for Todo 3',
				complexity: 'hard',
				begin: '01/03/2022',
				end: '03/03/2022',
				isChecked: false,
				edit: false,
				isOpen: false,
			},
			{
				id: nanoid(),
				name: 'Todo 4',
				note: 'Here are some notes for Todo 4',
				complexity: 'middle',
				begin: '01/03/2022',
				end: '03/03/2022',
				isChecked: false,
				edit: false,
				isOpen: false,
			},
			{
				id: nanoid(),
				name: 'Todo 5',
				note: 'Here are some notes for Todo 5',
				complexity: 'hard',
				begin: '01/03/2022',
				end: '03/03/2022',
				isChecked: false,
				edit: false,
				isOpen: false,
			},
			{
				id: nanoid(),
				name: 'Todo 6',
				note: 'Here are some notes for Todo 6',
				complexity: 'easy',
				begin: '01/03/2022',
				end: '03/03/2022',
				isChecked: false,
				edit: false,
				isOpen: false,
			},
		],
		//AddFeature Project Functions
		addFeature: (name, begin, end) => {
			set(
				produce(draft => {
					draft.featureszustand.push({
						name,
						begin,
						end,
						id: nanoid(),
						edit: false,
					});
				})
			);
		},
		//End AddFeatureProject Functions
		//AddProjectStep1 Functions
		addProject: (name, notes, begin, end) => {
			set(
				produce(draft => {
					draft.projectszustand.push({
						name,
						notes,
						begin,
						end,
						id: nanoid(),
						isChecked: false,
						edit: false,
					});
				})
			);
		},
		//End AddProjectStep1 Functions
		//FeatureCardSmall Functions
		deleteFeature: index => {
			set(
				produce(draft => {
					draft.featureszustand.splice(index, 1);
				})
			);
		},
		//End FeatureCardSmall Functions
		//Feature View Functions
		openNote: index => {
			set(
				produce(draft => {
					draft.todoszustand[index].isOpen = !draft.todoszustand[index].isOpen;
				})
			);
		},
		checkFeature: index => {
			set(
				produce(draft => {
					draft.featureszustand[index].isChecked =
						!draft.featureszustand[index].isChecked;
				})
			);
		},
		checkTodo: index => {
			set(
				produce(draft => {
					draft.todoszustand[index].isChecked = !draft.todoszustand[index].isChecked;
				})
			);
		},
		//End Feature View Functions
	}))
);

export default useStore;

/*return {
	//Add Project Step 1-2
	isActive: true,
	step: 1,
	maxStep: 2,
	formAnswers: {},
	nextStep: () => {
		set(state => {
			if (state.step < state.maxStep) {
				return { step: state.step + 1 };
			}
		});
	},
	endFormFunction: () => {
		set({ isActive: false });
	},
};*/
