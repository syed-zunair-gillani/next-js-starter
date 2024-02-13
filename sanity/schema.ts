import { type SchemaTypeDefinition } from 'sanity'
import { blogs } from './schema/blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs],
}
