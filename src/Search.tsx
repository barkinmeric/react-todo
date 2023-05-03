interface SearchProps {
	setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ setQuery }: SearchProps) {
	return (
		<div className="mx-auto flex max-w-lg flex-col text-center text-white">
			<label htmlFor="searchInput" className="bg-gray-900 p-2 text-lg font-bold">
				Search
			</label>
			<input id="searchInput" onChange={(e) => setQuery(e.target.value)} className="p-2 text-black" type="text" placeholder="Search..." />
		</div>
	);
}
