import User from '../../types/User'
import { db } from '../../db'

export const users = (_: any, { username, password }: User) => {
  return db.filter((u) => u.username === username && u.password === password)
}

export const tasks = ({ id }: User) => {
  return db
    .filter((u) => u.id === id)
    .map((u) => u.tasks)
    .find((t) => t)
}
