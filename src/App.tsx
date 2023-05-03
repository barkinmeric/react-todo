import { useEffect, useState, useMemo } from "react";
import Form from "./Form";
import Search from "./Search";
import TodoList from "./TodoList";

export default function App() {
	const [query, setQuery] = useState<string>("");
	const [todoList, setTodoList] = useState<Todo[]>(() => {
		const localData = localStorage.getItem("todoList");
		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() => {
		localStorage.setItem("todoList", JSON.stringify(todoList));
	}, [todoList]);

	const filteredTodoList: Todo[] = useMemo(() => {
		return todoList.filter((item) => {
			return item.text.toLowerCase().includes(query.toLowerCase());
		});
	}, [todoList, query]);

	return (
		<section className="min-h-screen w-screen bg-black">
			<Form setTodoList={setTodoList} />
			<Search setQuery={setQuery} />
			<TodoList todoList={todoList} filteredTodoList={filteredTodoList} setTodoList={setTodoList} />
		</section>
	);
}
