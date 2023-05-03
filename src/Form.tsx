import { useRef } from "react";

interface FormProps {
	setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function Form({ setTodoList }: FormProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (inputRef.current === null) return;
		const { value } = inputRef.current;
		if (value === "") return;
		setTodoList((currentTodoList) => [{ id: crypto.randomUUID(), text: value, completed: false }, ...currentTodoList]);

		inputRef.current.value = "";
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} className="mx-auto flex max-w-lg flex-col py-8 text-center text-white">
			<label htmlFor="textInput" className="bg-gray-900 p-2 text-lg font-bold">
				Add New Item
			</label>
			<input ref={inputRef} id="textInput" className=" p-2 text-black" type="text" placeholder="Enter..." />
			<button type="submit" className="bg-green-700 p-2">
				Add
			</button>
		</form>
	);
}
