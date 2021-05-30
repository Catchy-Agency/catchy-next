import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord } from '../../gql/types/PrimaryPageBySlug'

export const FormBlock: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord
}> = ({ block: { form } }) => (
  <form
    action={form?.action || undefined}
    method={form?.method || undefined}
    name={form?.name || undefined}
  >
    {form?.formFields?.map((field) => {
      let el: JSX.Element | null = null
      switch (field?.fieldType) {
        case 'Email':
          el = (
            <input
              className="input"
              type="email"
              name={field.fieldName || undefined}
              placeholder={field.label || undefined}
            />
          )
          break
        case 'Text':
          el = (
            <input
              className="input"
              type="text"
              name={field.fieldName || undefined}
              placeholder={field.label || undefined}
            />
          )
          break
        case 'Text Area':
          el = (
            <textarea
              className="textarea"
              name={field.fieldName || undefined}
              placeholder={field.label || undefined}
              rows={7}
            />
          )
          break
        case 'Submit':
          el = (
            <input
              className="button is-primary"
              type="submit"
              name={field.fieldName || undefined}
              value={field.label || 'Submit'}
            />
          )
          break
      }
      return (
        <div
          key={field?.id}
          className="field"
          style={
            field?.invisible
              ? { position: 'absolute', left: '-5000px' }
              : undefined
          }
        >
          <div className="control is-expanded">{el}</div>
        </div>
      )
    })}
  </form>
)
