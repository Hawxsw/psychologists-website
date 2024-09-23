const tasks = [
  {
    id: 1,
    title: "Next.js Uideck Yearly Meetings",
    time: "10:20 AM - 3:00 PM",
    date: "14 February, 2025",
    status: "Completed",
  },
  {
    id: 2,
    title: "Next.js 2025 Dribbble Meet Up",
    time: "09:30 AM - 12:00 AM",
    date: "14 February, 2025",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Next.js 2025 Linkedin Meet Up",
    time: "10:30 AM - 11:00 PM",
    date: "14 February, 2025",
    status: "Canceled",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "text-green-500";
    case "Upcoming":
      return "text-blue-500";
    case "Canceled":
      return "text-red-500";
    default:
      return "";
  }
};

export const ToDoList = () => {
  return (
    <div className="container mx-auto px-4 dark:bg-gray-800 bg-white text-black dark:text-white p-6 rounded-lg w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">To Do List</h2>
      {tasks.map((task) => (
        <div key={task.id} className="flex justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full" />
            <div>
              <h3 className="text-black dark:text-white">{task.title}</h3>
              <p className="text-gray-800 dark:text-gray-400 text-sm">
                {task.time} - {task.date}
              </p>
            </div>
          </div>
          <span className={`font-semibold ${getStatusColor(task.status)}`}>
            {task.status}
          </span>
        </div>
      ))}
    </div>
  );
};
