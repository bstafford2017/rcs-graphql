import { Task } from '../../types/task'

export const comments = ({ comments }: Task) => {
  return comments
}

export const taskCreatedOn = ({ createdOn }: Task) => {
  return new Date(createdOn).toDateString()
}
