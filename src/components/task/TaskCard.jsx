import React from 'react'
import { TaskAddInput } from '../input/TaskAddInput'
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton'
import { TaskCards } from './TaskCards'
import { Tasks } from './Tasks'

export const TaskCard = () => {
  return (
    <div className='taskCard'>
      <TaskCards />
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  )
}
