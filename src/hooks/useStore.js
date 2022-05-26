import create from 'zustand';
import produce from 'immer';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		projectszustand: [
			{
				id: nanoid(),
				name: 'Projekt Final 1',
				notes: 'Hier sind ein paar Notizen',
				begin: '01/01/2001',
				end: '02/01/2001',
				icon: 'https://www.skopos.de/wp-content/uploads/2021/04/Element-5.svg',
				color: 'blue',
				edit: false,
				selected: true,
				feature: [
					{
						id: nanoid(),
						name: 'Feature Final 1',
						begin: '01/01/2001',
						end: '02/01/2001',
						isChecked: false,
						edit: false,
						todo: [
							{
								id: nanoid(),
								name: 'Todo Final 1',
								note: 'Here are some notes for Todo 1',
								complexity: 'easy',
								isChecked: false,
								edit: false,
								isOpen: false,
							},
							{
								id: nanoid(),
								name: 'Todo Final 2',
								note: 'Here are some notes for Todo 2',
								complexity: 'middle',
								isChecked: false,
								edit: false,
								isOpen: false,
							},
							{
								id: nanoid(),
								name: 'Todo Final 3',
								note: 'Here are some notes for Todo 3',
								complexity: 'hard',
								isChecked: false,
								edit: false,
								isOpen: false,
							},
						],
					},
					{
						id: nanoid(),
						name: 'Feature Final 2',
						begin: '01/02/2001',
						end: '02/02/2001',
						isChecked: false,
						edit: false,
						todo: [
							{
								id: nanoid(),
								name: 'Todo Final 4',
								note: 'Here are some notes for Todo 4',
								complexity: 'easy',
								isChecked: false,
								edit: false,
								isOpen: false,
							},
							{
								id: nanoid(),
								name: 'Todo Final 5',
								note: 'Here are some notes for Todo 5',
								complexity: 'hard',
								isChecked: false,
								edit: false,
								isOpen: false,
							},
						],
					},
				],
			},
			{
				id: nanoid(),
				name: 'Projekt Final 2',
				notes: 'Hier sind ein paar Notizen',
				begin: '01/02/2001',
				end: '02/02/2001',
				icon: 'https://www.skopos.de/wp-content/uploads/2021/04/Element-5.svg',
				color: 'green',
				edit: false,
				selected: false,
				feature: [
					{
						id: nanoid(),
						name: 'Feature Final 3',
						begin: '01/01/2001',
						end: '02/01/2001',
						isChecked: false,
						edit: false,
						todo: [
							{
								id: nanoid(),
								name: 'Todo Final 6',
								note: 'Here are some notes for Todo 1',
								complexity: 'easy',
								isChecked: false,
								edit: false,
								isOpen: false,
							},
							{
								id: nanoid(),
								name: 'Todo Final 7',
								note: 'Here are some notes for Todo 2',
								complexity: 'middle',
								isChecked: false,
								edit: false,
								isOpen: false,
							},
							{
								id: nanoid(),
								name: 'Todo Final 8',
								note: 'Here are some notes for Todo 3',
								complexity: 'hard',
								isChecked: false,
								edit: false,
								isOpen: false,
							},
						],
					},
					{
						id: nanoid(),
						name: 'Feature Final 4',
						begin: '01/02/2001',
						end: '02/02/2001',
						isChecked: false,
						edit: false,
						todo: [
							{
								id: nanoid(),
								name: 'Todo Final 9',
								note: 'Here are some notes for Todo 4',
								complexity: 'easy',
								isChecked: false,
								edit: false,
								isOpen: false,
							},
							{
								id: nanoid(),
								name: 'Todo Final 10',
								note: 'Here are some notes for Todo 5',
								complexity: 'hard',
								isChecked: false,
								edit: false,
								isOpen: false,
							},
						],
					},
				],
			},
		],
		dropdown: [{ isClicked: false }],
		appState: 'featurelist',
		stateToFeatureView: () => {
			set(
				produce(draft => {
					draft.appState = 'featureview';
				})
			);
		},
		stateToFeatureList: () => {
			set(
				produce(draft => {
					draft.appState = 'featurelist';
				})
			);
		},
		stateToEditFeature: () => {
			set(
				produce(draft => {
					draft.appState = 'editfeature';
				})
			);
		},
		stateToAddTodo: () => {
			set(
				produce(draft => {
					draft.appState = 'addtodo';
				})
			);
		},
		stateToAddFeature: () => {
			set(
				produce(draft => {
					draft.appState = 'addfeature';
				})
			);
		},
		//Dropdown Functions
		isClicked: () => {
			set(
				produce(draft => {
					draft.dropdown[0].isClicked = !draft.dropdown[0].isClicked;
				})
			);
		},
		//End Dropdown Functions
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
		//AddTodoProject Functions
		addTodo: (name, note, complexity) => {
			set(
				produce(draft => {
					draft.todoszustand.push({
						name,
						note,
						complexity,
						id: nanoid(),
						edit: false,
					});
				})
			);
		},
		//End AddTodoProject Functions
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
						selected: false,
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
					draft.projectszustand[index].feature.splice(index, 1);
				})
			);
		},
		//End FeatureCardSmall Functions
		//FeatureCardListProject Function
		dropSelect: index => {
			set(
				produce(draft => {
					draft.projectszustand.forEach(element => {
						element.selected = false;
					});
					draft.projectszustand[index].selected = !draft.projectszustand[index].selected;
				})
			);
		},
		//End FeatureCardListProject Function
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
