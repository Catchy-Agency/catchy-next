import { FC } from 'react'
import { Image } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_FormulaRecord } from '../../gql/types/PrimaryPageBySlug'

export const Formula: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord
}> = ({ block }) => (
  <section className="section formula">
    <div className="container">
      <div className="columns">
        {[block.step1, block.step2, block.step3].map(
          (step, i, steps) =>
            step && (
              <div key={step.id} className="column">
                {i < steps.length - 1 && (
                  <img
                    className="arrow"
                    src="https://i.imgur.com/YkHuAqc.png"
                  />
                )}
                {step.responsiveImage && (
                  <Image data={step.responsiveImage as any} />
                )}
              </div>
            ),
        )}
      </div>
    </div>
  </section>
)
