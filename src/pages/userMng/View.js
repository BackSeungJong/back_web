import { useStore } from 'store';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormItem, Forms, Input, Paper } from 'components';

export const UserMngView = () => {
  const { onSearch, initList } = useStore('userMngStore');
  const { state, key } = useLocation();

  const methods = useForm();

  return (
    <>
      {/* 검색 영역 */}
      <Paper type="search">
        <Forms methods={methods} onSubmit={(values) => onSearch({ ...values, pageNo: 1 })}>
          {/* 검색어 */}
          <FormItem label={'검색'}>
            <Input name="searchInfo" width="w3" placeholder={'검색어'} autoFocus />
          </FormItem>
        </Forms>
      </Paper>
    </>
  );
};

export default UserMngView;
