import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router-dom';

interface IProps { 
  page: string | undefined; 
}

const FourLaws: React.FC<RouteComponentProps<IProps>> = (props) => {
  // const { page } = useParams<any>();
  
  // const page = props.match.params.page;
  const { match: { params: { page } } } = props;
  console.log(page);
  // const { params: { page } } = props.match;
  // console.log(page);
  // console.log(page);
  // <span>Four Laws Generated</span>
  return (
    <FormattedMessage 
      id="fourlaws.title"
      defaultMessage="Four Laws Title"
      description="Four Laws Title"
    />
  );
};

export default FourLaws;
