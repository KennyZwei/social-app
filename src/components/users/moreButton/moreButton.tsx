import React, {FC} from 'react';
import s from './moreButton.module.css';
import Preloader from "../../common/preloader/preloader";
type PropsType = {
    totalPageCount: number
    currentPage: number
    isFetching:boolean

    moreItems: () => void
}
const MoreButton:FC<PropsType> = React.memo(function MoreButton(props){
    let moreButton;
    if (props.currentPage < props.totalPageCount) {
        moreButton = <button onClick={props.moreItems}>More</button>;
    }
    return (
        <div className={s.moreButton}>
            {
                props.isFetching ?
                    <Preloader/>
                    : moreButton
            }
        </div>
    );
})

export default MoreButton;