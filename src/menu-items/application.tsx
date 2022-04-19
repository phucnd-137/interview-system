// THIRD-PARTY
import { FormattedMessage } from 'react-intl';
import { IconStairsUp, IconUserCheck, IconHistory, IconFilePlus, IconWorld } from '@tabler/icons';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

const icons = { IconStairsUp, IconUserCheck, IconHistory, IconFilePlus, CorporateFareIcon, IconWorld };

const application = {
  id: 'application',
  title: <FormattedMessage id="application" />,
  type: 'group',
  role: 1,
  children: [
    {
      id: 'manage-member',
      title: <FormattedMessage id="manage-member" />,
      type: 'collapse',
      role: 1,
      icon: icons.IconUserCheck,
      children: [
        {
          id: 'administrator',
          title: <FormattedMessage id="administrator" />,
          type: 'item',
          role: 1,
          url: '/user/administrator'
        },
        {
          id: 'customer',
          title: <FormattedMessage id="customer" />,
          type: 'item',
          role: 1,
          url: '/user/customer'
        }
      ]
    },
    {
      id: 'history',
      title: <FormattedMessage id="history" />,
      type: 'collapse',
      role: 1,
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
      id: 'language',
      title: <FormattedMessage id="language" />,
      type: 'item',
      role: 1,
      url: '/language',
      icon: icons.IconWorld,
      breadcrumbs: true
    },
    {
      id: 'manage-department',
      title: <FormattedMessage id="department" />,
      type: 'item',
      role: 1,
      url: '/department',
      icon: icons.CorporateFareIcon,
      breadcrumbs: true
    },
    {
      id: 'manage-rank',
      title: <FormattedMessage id="manage-rank" />,
      type: 'item',
      role: 1,
      url: '/ranks',
      icon: icons.IconStairsUp,
      breadcrumbs: true
    },
    {
      id: 'applicant',
      title: <FormattedMessage id="add new applicant reference" />,
      type: 'item',
      role: 2,
      url: '/applicant',
      icon: icons.IconFilePlus,
      breadcrumbs: true
    }
  ]
};

export default application;
