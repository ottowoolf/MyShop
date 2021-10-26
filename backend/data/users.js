import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'otto@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John User',
    email: 'jim@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mary User',
    email: 'kim@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
