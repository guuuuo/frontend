import { adapter } from '@/utils';
import { request } from '../request';
import { adapterOfFetchUserList } from './management.adapter';

/** 获取用户列表 */
export const fetchUserList = async () => {
  const data = await request.get<ApiUserManagement.User[] | null>('/v1/users');
  return adapter(adapterOfFetchUserList, data);
};

export const saveUser = async (user: ApiUserManagement.User) => {
  const data = await request.post<ApiUserManagement.User | null>('/v1/users', user);
  return data;
};

export const deleteUserById = async (uuid: string) => {
  const data = await request.delete(`/v1/users/${uuid}`);
  return data;
};
