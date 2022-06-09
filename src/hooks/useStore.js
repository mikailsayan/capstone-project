import create from 'zustand';
import produce from 'immer';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(set => ({
		projects: [
			{
				id: nanoid(),
				name: 'Projekt 1',
				begin: '01-01-2001',
				end: '02-01-2001',
				color: 'blue',
				edit: false,
				selected: true,
				feature: [
					{
						id: nanoid(),
						name: 'Feature 1',
						begin: '01-01-2001',
						end: '02-01-2001',
						isChecked: false,
						edit: false,
						addtodo: false,
						selected: false,
						todo: [
							{
								id: nanoid(),
								name: 'Todo 1',
								note: 'Here are some notes for Todo 1',
								complexity: 'easy',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
							{
								id: nanoid(),
								name: 'Todo 2',
								note: 'Here are some notes for Todo 2',
								complexity: 'middle',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
							{
								id: nanoid(),
								name: 'Todo 3',
								note: 'Here are some notes for Todo 3',
								complexity: 'hard',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
						],
					},
					{
						id: nanoid(),
						name: 'Feature 2',
						begin: '01-02-2001',
						end: '02-02-2001',
						isChecked: false,
						edit: false,
						addtodo: false,
						selected: false,
						todo: [
							{
								id: nanoid(),
								name: 'Todo 4',
								note: 'Here are some notes for Todo 4',
								complexity: 'easy',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
							{
								id: nanoid(),
								name: 'Todo 5',
								note: 'Here are some notes for Todo 5',
								complexity: 'hard',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
						],
					},
				],
			},
			{
				id: nanoid(),
				name: 'Projekt 2',
				begin: '01-02-2001',
				end: '02-02-2001',
				color: 'green',
				edit: false,
				selected: false,
				feature: [
					{
						id: nanoid(),
						name: 'Feature 3',
						begin: '01-01-2001',
						end: '02-01-2001',
						isChecked: false,
						edit: false,
						addtodo: false,
						selected: false,
						todo: [
							{
								id: nanoid(),
								name: 'Todo 6',
								note: 'Here are some notes for Todo 1',
								complexity: 'easy',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
							{
								id: nanoid(),
								name: 'Todo 7',
								note: 'Here are some notes for Todo 2',
								complexity: 'middle',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
							{
								id: nanoid(),
								name: 'Todo 8',
								note: 'Here are some notes for Todo 3',
								complexity: 'hard',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
						],
					},
					{
						id: nanoid(),
						name: 'Feature 4',
						begin: '01-02-2001',
						end: '02-02-2001',
						isChecked: false,
						edit: false,
						addtodo: false,
						selected: false,
						todo: [
							{
								id: nanoid(),
								name: 'Todo 9',
								note: 'Here are some notes for Todo 4',
								complexity: 'easy',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
							{
								id: nanoid(),
								name: 'Todo 10',
								note: 'Here are some notes for Todo 5',
								complexity: 'hard',
								isChecked: false,
								edit: false,
								isOpen: false,
								selected: false,
							},
						],
					},
				],
			},
		],
		addFeatureState: false,
		//appState Functions
		appState: 'projects',
		setAppState: appState => {
			set({ appState });
		},
		modalState: false,
		setModalState: () => {
			set(
				produce(draft => {
					draft.modalState = !draft.modalState;
					console.log(draft.modalState);
				})
			);
		},
		indexState: [],
		setIndexState: indexState => {
			set({ indexState });
		},
		//End AppState Functions
		//FeatureCard Functions
		selectFeature: (projectIndex, featureIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature.forEach(element => {
						element.selected = false;
					});
					console.log(draft.projects);
					draft.projects[projectIndex].feature[featureIndex].selected =
						!draft.projects[projectIndex].feature[featureIndex].selected;
				})
			);
		},

		toggleAddTodo: (projectIndex, featureIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].addtodo =
						!draft.projects[projectIndex].feature[featureIndex].addtodo;
				})
			);
		},
		closeFeatureCardDetailed: (projectIndex, featureIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].selected = false;
				})
			);
		},
		//End FeatureCard Functions
		//EditFeature Project Function
		toggleEdit: (projectIndex, featureIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].edit =
						!draft.projects[projectIndex].feature[featureIndex].edit;
				})
			);
		},
		saveFeatureName: (projectIndex, featureIndex, value) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].name = value;
				})
			);
		},
		saveFeatureBeginDate: (projectIndex, featureIndex, value) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].begin = value;
				})
			);
		},
		saveFeatureEndDate: (projectIndex, featureIndex, value) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].end = value;
				})
			);
		},
		//End EditFeature Functions
		//EditProject Function
		toggleEditProject: projectIndex => {
			set(
				produce(draft => {
					draft.projects[projectIndex].edit = !draft.projects[projectIndex].edit;
				})
			);
		},
		saveProjectName: (projectIndex, value) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].name = value;
				})
			);
		},
		saveProjectBeginDate: (projectIndex, value) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].begin = value;
				})
			);
		},
		saveProjectEndDate: (projectIndex, value) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].end = value;
				})
			);
		},
		saveProjectColor: (projectIndex, value) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].color = value;
				})
			);
		},
		//End Edit Project Functions
		//Edit Todo Project Functions
		toggleEditTodo: (projectIndex, featureIndex, todoIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].todo[todoIndex].edit =
						!draft.projects[projectIndex].feature[featureIndex].todo[todoIndex].edit;
				})
			);
		},
		saveTodoName: (projectIndex, featureIndex, todoIndex, value) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].todo[todoIndex].name = value;
				})
			);
		},
		saveTodoNote: (projectIndex, featureIndex, todoIndex, value) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].todo[todoIndex].note = value;
				})
			);
		},
		saveTodoComplex: (projectIndex, featureIndex, todoIndex, value) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].todo[todoIndex].complexity =
						value;
				})
			);
		},
		//End Edit Todo Functions
		//AddFeatureFunction
		toggleAdd: () => {
			set(
				produce(draft => {
					draft.addFeatureState = !draft.addFeatureState;
				})
			);
		},
		addFeature: (projectIndex, name, begin, end) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature.push({
						name,
						begin,
						end,
						id: nanoid(),
						isChecked: false,
						edit: false,
						selected: false,
						todo: [],
					});
				})
			);
		},
		//End AddFeatureFunction
		//AddTodo Functions
		addTodo: (projectIndex, featureIndex, name, note, complexity) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].todo.push({
						name,
						note,
						complexity,
						id: nanoid(),
						isChecked: false,
						edit: false,
						isOpen: false,
						selected: false,
					});
				})
			);
		},
		//End AddTodo Functions
		//AddProject Functions
		addProject: (name, begin, end, color) => {
			set(
				produce(draft => {
					draft.projects.push({
						name,
						begin,
						end,
						color,
						id: nanoid(),
						selected: false,
						isChecked: false,
						edit: false,
						feature: [],
					});
				})
			);
		},
		deleteProject: projectIndex => {
			set(
				produce(draft => {
					draft.projects.splice(projectIndex, 1);
				})
			);
		},
		//End AddProject Functions
		//FeatureCard Functions
		deleteFeature: (projectIndex, featureIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature.splice(featureIndex, 1);
				})
			);
		},
		//End FeatureCard Functions
		//FeatureCardList Function
		selectProject: projectIndex => {
			set(
				produce(draft => {
					draft.projects.forEach(element => {
						element.selected = false;
					});
					draft.projects[projectIndex].selected = !draft.projects[projectIndex].selected;
				})
			);
		},
		//End FeatureCardList Function
		//Feature View Functions
		toggleNote: (projectIndex, featureIndex, todoIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].todo[todoIndex].isOpen =
						!draft.projects[projectIndex].feature[featureIndex].todo[todoIndex].isOpen;
				})
			);
		},
		checkFeature: (projectIndex, featureIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].isChecked =
						!draft.projects[projectIndex].feature[featureIndex].isChecked;
				})
			);
		},
		checkTodo: (projectIndex, featureIndex, todoIndex) => {
			set(
				produce(draft => {
					draft.projects[projectIndex].feature[featureIndex].todo[todoIndex].isChecked =
						!draft.projects[projectIndex].feature[featureIndex].todo[todoIndex]
							.isChecked;
				})
			);
		},
		//End Feature View Functions
	}))
);

export default useStore;
