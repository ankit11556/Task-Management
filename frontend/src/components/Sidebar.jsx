import { Link } from "react-router-dom"

const Sidebar = () =>{ 
  const data = [
    {
      title: "All tasks",
      link: "/",
    },
    {
      title: "Important tasks",
      link: "/important-tasks",
    },
    {
      title: "Completed tasks",
      link: "/completed-tasks",
    },
    {
      title: "Incompleted tasks",
      link: "/incompleted-tasks",
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
          <Link  className="my-3 flex items-center hover:bg-gray-600 rounded p2 duration-300 transition-all justify-center"
          key={i}
          to={item.link}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 w-full p-2 rounded">Log Out</button>
      </div>
    </>
  )
}

export default Sidebar