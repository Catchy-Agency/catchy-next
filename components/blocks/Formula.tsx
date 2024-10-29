import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';

import { PrimaryPageBySlug_primaryPage_blocks_FormulaRecord } from '../../gql/types/PrimaryPageBySlug';
import { formulaArrow } from '../icons';

export const Formula: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord;
}> = ({ block }) => (
  <div className="columns formula">
    {[block.step1, block.step2, block.step3].map(
      (step, i, steps) =>
        step && (
          <div key={step.id} className="column">
            {i < steps.length - 1 && (
              <div className="arrow">{formulaArrow}</div>
            )}
            <div
              style={{
                maxWidth: '320px',
                margin: 'auto',
              }}
            >
              {step.responsiveImage && (
                <Image
                  data={step.responsiveImage as ResponsiveImageType}
                  lazyLoad={false}
                />
              )}
            </div>
          </div>
        ),
    )}
  </div>
);
