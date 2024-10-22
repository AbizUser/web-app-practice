import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteBUttonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteBUttonProps> = ({ id }) => {
  return (
    <form action="">
      <button type="submit" className="hover:text-gray-700
      text-lg cursor-pointer">
        <FaTrashAlt />
      </button>
    </form>
  )
}
export default TaskDeleteButton