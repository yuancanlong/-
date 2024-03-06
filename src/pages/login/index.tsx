import { Button } from 'antd';
import { connect } from 'umi';

const login = ({ ...props }: any) => {
  const { dispatch } = props;

  const goLogin = () => {
    dispatch({
      type: 'user/fetch',
      payload: { data: 1 },
    }).then((res: any) => {});
  };

  return (
    <>
      <Button
        onClick={() => {
          goLogin();
        }}
      >
        登录
      </Button>
    </>
  );
};
export default connect(({ user }: any) => ({ user }))(login);
