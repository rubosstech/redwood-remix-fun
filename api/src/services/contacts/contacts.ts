import { UserInputError } from '@redwoodjs/graphql-server'
import { db } from 'src/lib/db'

export const contacts = () => {
  return db.contact.findMany()
}

const validateContact = (input) => {
  if (input.email && !input.email.match(/[^@]+@[^.]+\..+/)) {
    throw new UserInputError("Can't create new contact!", {
      messages: {
        email: ['is not formatted like an email address'],
      },
    })
  }
}
export const createContact = ({ input }) => {
  validateContact(input)
  return db.contact.create({ data: input })
}
