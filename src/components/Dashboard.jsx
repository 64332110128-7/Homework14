
function Dashboard(props) {
  const { task } = props

  return (
    <div className="dashboard bg-gray-200 p-4 rounded-md flex place-content-between">
      <h2 className="text-2xl font-semibold mb-2">{new Date().toDateString()}</h2>
      <p className="text-lg">{task} Tasks</p>
    </div>
  );
}

export default Dashboard;
