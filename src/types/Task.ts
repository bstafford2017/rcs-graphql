import Comment from './Comment'
import { Priority } from './Priority'
import { Status } from './Status'

export interface Task {
  id: string
  title: string
  category: string
  description: string
  important: boolean
  createdOn: number
  comments: Array<Comment>
  status: Status
  dueOn: number
  priority: Priority
}
