const Sidebar = () =>{ 
  const data = [
    {
      title: "All tasks",
    },
    {
      title: "Important tasks",
    },
    {
      title: "Completed tasks",
    },
    {
      title: "Incompleted tasks",
    },
  ]
  return(
    <>
      <div >
        <h2 className="text-xl font-semibold">My Task</h2>
        <h4 className="mb-2 text-gray-400">a@gmai.com</h4>
        <hr />
      </div>
      <div>
        {data.map((item,i)=>(
          <div key={i} className="my-3">{item.title}</div>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 w-full p-2 rounded">Log Out</button>
      </div>
    </>
  )
}

export default Sidebar