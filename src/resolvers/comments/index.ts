import { db } from '../../db'
import Comment from '../../types/Comment'
import { Task } from '../../types/task'
import { User } from '../../types/User'

export const commentCreatedOn = ({ createdOn }: Comment) => {
  return new Date(createdOn).toDateString()
}

export const user = ({ id }: Comment) => {
  return db.find((u: User) =>
    u.tasks.find((t: Task) => t.comments.find((c: Comment) => c.id === id))
  )
}
