import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouteMatch } from 'react-router-dom';
import PageTitle from '../../../../components/PageTitle';
import { PageTextType } from '../../../../interfaces/page.interfaces';
import { FourLawsPaths } from '../../../paths';
import LawOneRoutes from './LawOneRoutes';

// export interface ILawOneState {
//   minimizeTitle: boolean;
// }

// class LawOne extends React.Component<{}, ILawOneState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = { minimizeTitle: false };
//   }
  
//   onClick = () => this.setState((state) => ({ ...state, minimizeTitle: !state.minimizeTitle }));
  
//   render() {
//     const { path } = useRouteMatch();
//     const Icon = <div style={{ width: '100px', height: '100px', border: '1px solid black' }}></div>;
//     return (
//       <React.Fragment>
//         <PageTitle
//           icon={Icon}
//           type={PageTextType.CONTENT}
//           minimized={this.state.minimizeTitle}
//         >
//           <FormattedMessage 
//             id="fourlaws.law1.title"
//             defaultMessage={'Just as there are physical laws that govern the physical universe,' + 
//                             ' so are there spiritual law which govern your relationship with God.'}
//           />
//         </PageTitle>
//         <button style={{ position: 'absolute' }} onClick={this.onClick}>trigger</button>
//         <LawOneRoutes />
//       </React.Fragment>
//     );
//   }
// }


const LawOne: React.FC = () => {
  const { path } = useRouteMatch();
  const Icon = <div style={{ width: '100px', height: '100px', border: '1px solid black' }}></div>;
  console.log(window.location.href);
  return (
    <React.Fragment>
      <PageTitle
        icon={Icon}
        type={PageTextType.CONTENT}
        minimized={!window.location.href.endsWith(FourLawsPaths.LAW_ONE_TITLE)}
      >
        <FormattedMessage 
          id="fourlaws.law1.title"
          defaultMessage={'God LOVES you, and offers a wonderful PLAN for your life.'}
        />
      </PageTitle>
      <LawOneRoutes />
    </React.Fragment>
  );
};

export default LawOne;