// THIRD-PARTY
import React, { FunctionComponent, ReactElement } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ChipProps, SvgIconTypeMap } from '@mui/material';
import { TablerIcon } from '@tabler/icons';

// PROJECT IMPORTS
import { CustomerStateProps } from 'types/customer';
import { RankStateProps } from 'types/rank';
import { SnackbarProps } from 'types/snackbar';
import { UserStateProps } from 'types/user';
import { ProfileStateProps } from 'types/profile';
import { NotificationStateProps } from 'types/notification';
import { DepartmentStateProps } from './department';
import { HistoryStateProps } from './history';
import { LanguageStateProps } from './language';
import { QuestionStateProps } from './question';

export interface DefaultRootStateProps {
  snackbar: SnackbarProps;
  user: UserStateProps;
  customer: CustomerStateProps;
  rank: RankStateProps;
  question: QuestionStateProps;
  profile: ProfileStateProps;
  notification: NotificationStateProps;
  department: DepartmentStateProps;
  history: HistoryStateProps;
  language: LanguageStateProps;
}

export interface ColorProps {
  readonly [key: string]: string;
}

export type GuardProps = {
  children: ReactElement | null;
};

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export type NavItemTypeObject = { children?: NavItemType[]; items?: NavItemType[]; type?: string };

export type NavItemType = {
  id?: string;
  icon?: GenericCardProps['iconPrimary'];
  target?: boolean;
  external?: string;
  url?: string | undefined;
  type?: string;
  role?: number;
  title?: React.ReactNode | string;
  color?: 'primary' | 'secondary' | 'default' | undefined;
  caption?: React.ReactNode | string;
  breadcrumbs?: boolean;
  disabled?: boolean;
  chip?: ChipProps;
};

export interface GenericCardProps {
  title?: string;
  primary?: string | number | undefined;
  secondary?: string;
  content?: string;
  image?: string;
  dateTime?: string;
  iconPrimary?: OverrideIcon;
  color?: string;
  size?: string;
}

export type OverrideIcon =
  | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
      muiName: string;
    })
  | React.ComponentClass<any>
  | FunctionComponent<any>
  | TablerIcon;

export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};
