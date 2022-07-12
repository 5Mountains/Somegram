import {Control} from 'react-hook-form';
import {IUser} from './../../../../types/models';

export type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
export type IEditableUser = Pick<IUser, IEditableUserField>;
export interface ICustomInput {
  label: string;
  placeholder: string;
  multiline?: boolean;
  name: IEditableUserField;
  control: Control<IEditableUser, object>;
  rules?: object;
}
