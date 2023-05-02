interface TodoListProps {
	todoList: Todo[];
	setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({ todoList, setTodoList }: TodoListProps) {
	const handleDelete = (id: UID) => {
		setTodoList(todoList.filter((item) => item.id !== id));
	};

	const toggleTodo = (id: UID, completed: boolean) => {
		setTodoList(
			completed
				? [...todoList.filter((item) => item.id !== id), { ...todoList.filter((item) => item.id === id)[0], completed }]
				: [{ ...todoList.filter((item) => item.id === id)[0], completed }, ...todoList.filter((item) => item.id !== id)],
		);
	};

	return (
		<div className="mx-auto flex max-w-lg flex-col text-center text-white ">
			<h1 className="bg-gray-900 p-2 text-lg font-bold ">Todo List</h1>
			<ul>
				{todoList.map((item) => (
					<li key={item.id} className="flex items-center  justify-between bg-gray-700 p-2">
						<div className={item.completed ? "p-2 line-through opacity-50" : "p-2"}>
							<input
								id="checkboxInput"
								onChange={(e) => toggleTodo(item.id, e.target.checked)}
								className="mr-2"
								type="checkbox"
								checked={item.completed}
							/>
							<label htmlFor="checkboxInput">{item.text}</label>
						</div>
						<button type="button" onClick={() => handleDelete(item.id)} className="rounded-md bg-red-600 p-2 text-white">
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
