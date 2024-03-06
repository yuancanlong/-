import styles from './index.less';

export default function IndexPage(props: any) {

  console.log('pp', props);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      {props?.children}
    </div>
  );
}
