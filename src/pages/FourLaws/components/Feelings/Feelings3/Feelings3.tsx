import React from 'react';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '../../../../../components/BottomNavigation';
import PageText from '../../../../../components/PageText';
import TrainDiagram from '../../../../../icons/TrainDiagram';
import { PageTextType } from '../../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../../paths';

const Feelings3: React.FC = () => {
  return (
    <React.Fragment>
      <PageText type={PageTextType.CONTENT} className="Law-PageContent Law-LongSentence">
        <div>
          <FormattedMessage 
            id="fourlaws.feelings.three"
            defaultMessage={'The train will run with or without the passenger car. However, it would be useless to attempt to pull the train ' + 
                            'by the passenger car. In the same way, we, as Christians, do not depend on feelings or emotions, ' + 
                            'but place our faith (trust) in the trustworthiness of God and the promises of His Word.'}
          />
        </div>
      </PageText>
      <TrainDiagram className="Train-Diagram" />
      <BottomNavigation 
        previousTo={FourLawsPaths.FEELINGS_2}
        nextTo={FourLawsPaths.GRACE}
      />
    </React.Fragment>
  );
};

export default Feelings3;