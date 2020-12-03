import React from 'react';
import './FourLaws.css';
import PageContainer from '../../components/PageContainer';
import FourLawsRoutes from './FourLawsRoutes';

const FourLaws: React.FC = () => {
  return (
    <PageContainer>
      <FourLawsRoutes />
    </PageContainer>
  );
};

export default FourLaws;
