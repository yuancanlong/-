import { responsiveArray } from "antd/lib/_util/responsiveObserve"

const ListItem = ({ ...props }) => {
    // console.log(props, 'props')
    // return <div style={{ height: '50px' }}>{props.id} itemHeight{props.itemHeight}</div>
    return <div style={{ height: '50px', border: '1px solid red' }}>{props.children}</div>
}
export default ListItem