import { FC } from 'react'

import {
  PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord,
  PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord_form_formFields,
} from '../../gql/types/PrimaryPageBySlug'

type Field = PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord_form_formFields | null

interface Group {
  readonly __typename: 'Group'
  fields: Field[]
  id: string
}

type FieldsAndGroups = (Field | Group)[]

export const FormBlock: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord
}> = ({ block: { form } }) => (
  <form
    action={form?.action || undefined}
    method={form?.method || undefined}
    name={form?.name || undefined}
  >
    {groupFields(Array.from(form?.formFields || [])).map((fieldOrGroup) => {
      switch (fieldOrGroup?.__typename) {
        case 'Group': {
          console.log('Group')
          const group = fieldOrGroup
          return (
            <div key={group.id} className="field is-grouped">
              {group.fields.map((field) => (
                <div key={field?.id} className="control is-expanded">
                  <FieldElement field={field} />
                </div>
              ))}
            </div>
          )
        }
        case 'FormFieldRecord': {
          console.log('Field')
          const field = fieldOrGroup
          return (
            <div
              key={field.id}
              className="field"
              style={
                field.invisible
                  ? { position: 'absolute', left: '-5000px' }
                  : undefined
              }
            >
              <div className="control is-expanded">
                <FieldElement field={field} />
              </div>
            </div>
          )
        }
        default:
          return null
      }
    })}
  </form>
)

const FieldElement: FC<{ field: Field }> = ({ field }) => {
  switch (field?.fieldType) {
    case 'Email':
      return (
        <input
          className="input"
          type="email"
          name={field.fieldName || undefined}
          placeholder={field.label || undefined}
        />
      )
    case 'Text':
      return (
        <input
          className="input"
          type="text"
          name={field.fieldName || undefined}
          placeholder={field.label || undefined}
        />
      )
    case 'Text Area':
      return (
        <textarea
          className="textarea"
          name={field.fieldName || undefined}
          placeholder={field.label || undefined}
          rows={7}
        />
      )
    case 'Submit':
      return (
        <input
          className="button is-primary"
          type="submit"
          name={field.fieldName || undefined}
          value={field.label || 'Submit'}
        />
      )
    default:
      return null
  }
}

const groupFields = (fields: Field[]): FieldsAndGroups => {
  const output: FieldsAndGroups = []
  for (let i = 0, l = fields.length; i < l; i++) {
    const field = fields[i]
    if (!field) continue
    if (!field.grouped) {
      output.push(field)
    } else {
      // This field should be grouped with next field
      const group: Group = {
        __typename: 'Group',
        fields: [field],
        id: field.id,
      }
      output.push(group)
      // Add next field
      let nextField = fields[++i]
      if (!nextField) continue
      group.fields.push(nextField)
      // If next fields are also grouped, keep adding
      while (nextField?.grouped) {
        nextField = fields[++i]
        if (!nextField) continue
        group.fields.push(nextField)
      }
    }
  }
  console.log('----------------------------')
  console.log(output)
  return output
}
