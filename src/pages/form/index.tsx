import React, { useContext, useState } from 'react';

import Form from '../../components/form';
import FormItem from '../../components/formItem';
import Input from '../../components/input';
import Context from '../../components/context';
import { useEffect } from 'react';

export default function SubmitForm() {
  const myForm: any = useContext(Context);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    myForm.setValue({
      usename: '333',
    });
  }, []);

  // const form = React.useRef(null);

  const form = React.useRef(null);
  // const myForm = React.useRef(null);

  const updateContextValue = (value: any) => {
    // setContextData({ data: value, updateContextValue });
    //@ts-ignore
    // myForm.current = {
    //   data: value,
    //   updateContextValue: updateContextValue,
    // };
  };
  //@ts-ignore
  // myForm.current = {
  //   data: useContext(Context),
  //   updateContextValue: updateContextValue,
  // };
  const submit = () => {
    console.log(myForm.getValue(), 'form');
    /* 表单提交 */
    //@ts-ignore
    // form?.current?.submitForm((formValue) => {
    //   console.log(formValue);
    // });
  };
  const reset = async () => {
    /* 表单重置 */
    // setLoading(true);
    // //@ts-ignore
    // setTimeout(() => {
    //   setLoading(false);
    // }, 200);
    //@ts-ignore
    // form.current.resetForm();
  };
  return (
    <div className="box">
      {loading ? (
        'loading'
      ) : (
        <Form ref={form}>
          <Context.Provider value={myForm}>
            {/* @ts-ignore */}
            <FormItem name="usename" label="姓名">
              <Input />
            </FormItem>
            {/* @ts-ignore */}
            <FormItem name="age" label="年龄">
              <Input />
            </FormItem>
          </Context.Provider>
        </Form>
      )}

      <div className="btns">
        <button className="searchbtn" onClick={submit}>
          提交
        </button>
        <button className="concellbtn" onClick={reset}>
          重置
        </button>
      </div>
    </div>
  );
}
