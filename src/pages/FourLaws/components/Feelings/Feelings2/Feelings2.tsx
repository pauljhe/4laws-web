import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import TrainDiagram from '../../../../../icons/TrainDiagram';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const Feelings2: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div>
          <FormattedMessage 
            id="fourlaws.feelings.two"
            defaultMessage={'This train diagram illustrates the relationship between <b>fact</b> (God and His Word), ' + 
                            '<b>faith</b> (our trust in God and His Word), and <b>feeling</b> (the result of our faith and obedience) (John 14:21).'}
            values={{
              b: (chunks : any) => <b>{chunks}</b>
            }}
          />
        </div>
      </PageText>
      <TrainDiagram className="Train-Diagram" />
      <BottomNavigation 
        previousTo={FourLawsPaths.FEELINGS_1}
        nextTo={FourLawsPaths.FEELINGS_3}
      />
    </React.Fragment>
  );
};

export default Feelings2;