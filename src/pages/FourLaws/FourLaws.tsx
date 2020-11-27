import React from 'react';
import './FourLaws.css';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router-dom';

export interface IFourLawsProps { 
  page: string | undefined; 
}

const FourLaws: React.FC<RouteComponentProps<IFourLawsProps>> = (props) => {
  // const { page } = useParams<any>();
  
  // const page = props.match.params.page;
  const { match: { params: { page } } } = props;
  console.log(page);
  // const { params: { page } } = props.match;
  // console.log(page);
  // console.log(page);
  // <span>Four Laws Generated</span>
  return (
    <div className="FourLaws">
      <div className="font13">font-size 13:</div>
      <div className="font13">
        <FormattedMessage 
          id="fourlaws.title"
          defaultMessage="Four Laws Title"
          description="Four Laws Title"
        />
      </div>
      <div className="font14">font-size 14:</div>
      <div className="font14">
        <FormattedMessage 
          id="fourlaws.title"
          defaultMessage="Four Laws Title"
          description="Four Laws Title"
        />
      </div>
      <div className="font16">font-size 16:</div>
      <div className="font16">
        <FormattedMessage 
          id="fourlaws.title"
          defaultMessage="Four Laws Title"
          description="Four Laws Title"
        />
      </div>
      <div className="font20">font-size 20:</div>
      <div className="font20">
        <FormattedMessage 
          id="fourlaws.title"
          defaultMessage="Four Laws Title"
          description="Four Laws Title"
        />
      </div>
      <div className="font30">font-size 30:</div>
      <div className="font30">
        <FormattedMessage 
          id="fourlaws.title"
          defaultMessage="Four Laws Title"
          description="Four Laws Title"
        />
      </div>
    </div>
  );
};

export default FourLaws;