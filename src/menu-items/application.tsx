// THIRD-PARTY
import { FormattedMessage } from 'react-intl';
import { IconStairsUp, IconUserCheck, IconHistory, IconFilePlus } from '@tabler/icons';

const icons = { IconStairsUp, IconUserCheck, IconHistory, IconFilePlus };

const application = {
  id: 'application',
  title: <FormattedMessage id="application" />,
  type: 'group',
  children: [
    {
      id: 'manage-member',
      title: <FormattedMessage id="manage-member" />,
      type: 'collapse',
      icon: icons.IconUserCheck,
      children: [
        {
          id: 'administrator',
          title: <FormattedMessage id="administrator" />,
          type: 'item',
          url: '/user/administrator'
        },
        {
          id: 'customer',
          title: <FormattedMessage id="customer" />,
          type: 'item',
          url: '/user/customer'
        }
      ]
    },
    {
      id: 'history',
      title: <FormattedMessage id="history" />,
      type: 'collapse',
      icon: icons.IconHistory,
      children: [
        {
          id: 'complete',
          title: <FormattedMessage id="complete" />,
          type: 'item',
          url: '/complete'
        },
        {
          id: 'inprogress',
          title: <FormattedMessage id="inProgress" />,
          type: 'item',
          url: '/inprogress'
        }
      ]
    },
    {
      id: 'manage-rank',
      title: <FormattedMessage id="manage-rank" />,
      type: 'item',
      url: '/ranks',
      icon: icons.IconStairsUp,
      breadcrumbs: false
    },
    {
      id: 'applicant',
      title: <FormattedMessage id="add new applicant reference" />,
      type: 'item',
      url: '/applicant',
      icon: icons.IconFilePlus,
      breadcrumbs: true
    }
  ]
};

export default application;
