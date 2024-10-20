import React from 'react'

const TaskEditID = ({params}: {
  params: { id: string}
}) => {
  return (
    <div> {params.id} </div>
  )
}

export default TaskEditID
