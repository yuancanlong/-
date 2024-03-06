import { useModel } from 'umi';
import styles from './index.less';

export default function IndexPage() {

    const { setInitialState, initialState, loading } = useModel("@@initialState")

    console.log(initialState, loading)
    // setInitialState({
    //     canUser: false
    // })
    return (
        <div>
            <h1 className={styles.title}>Page Two</h1>
        </div>
    );
}
