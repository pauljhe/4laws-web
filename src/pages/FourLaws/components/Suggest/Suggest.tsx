import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PageTextType } from '../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../paths';
import SuggestRoutes from './SuggestRoutes';
import PageText from '../../../../components/PageText';
import './Suggest.css';
import { useMediaQuery } from '@material-ui/core';

const Suggest: React.FC = () => {
  const isTitle: boolean = window.location.href.endsWith(FourLawsPaths.SUGGEST_TITLE);
  const showTitle: boolean = useMediaQuery('(min-height:600px)');
  return (
    <div className="Law-PageContent">
      {
        (!showTitle && !isTitle) ? null:
        <PageText type={PageTextType.CONTENT} className={`Law-Sentence-Center Law-Title-Animated${(!isTitle) ? ' Law-Title-Animated-content' : ''}`}>
          <div className="Law-Title-Animated-line-one Law-Sentence-Bold Law-Sentence-Margin Suggest-Title-line-one">
            <FormattedMessage 
              id="fourlaws.suggest.title.line1"
              defaultMessage="SUGGESTIONS FOR CHRISTIAN GROWTH"
            />
          </div>
          <div className="Law-Title-Animated-line-two Suggest-Title-line-two">
            <FormattedMessage 
              id="fourlaws.suggest.title.line2"
              defaultMessage={"Spiritual growth results from trusting Jesus Christ. \"The righteous man shall live by faith\" (Galatians 3:11). " + 
                              "A life of faith will enable you to trust God increasingly with every detail of your life, and to practice the following:"}
            />
          </div>
        </PageText>
      }
      <SuggestRoutes />
    </div>
  );
};

export default Suggest;