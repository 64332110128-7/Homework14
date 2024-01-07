import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="app flex justify-center items-center ">
      <TodoApp />
      <div className="flex justify-end items-end absolute right-4 bottom-4">
        <a
          href="https://github.com/64332110128-7/Homework14.git"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Go to my Repo
        </a>
      </div>
    </div>
  )
}

export default App;
