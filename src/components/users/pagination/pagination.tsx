import React, {FC} from 'react';
import s from './pagination.module.css';


type OnPageNumberClickType = (e: React.MouseEvent<HTMLDivElement>) => void
type PropsType = {
    totalPageCount: number
    currentPage: number

    setCurrentPage: (pageNumber:number) => void
    getItems: (pageNumber:number, term:string, friend:boolean | null) => void
}

const getPageNumbers = (pageCount:number, currentPage:number, onPageNumberClick:OnPageNumberClickType)=>{
    let pageNumbers = [];
    if(currentPage > 6){
        for(let i = 1; i < 4; i++){
            pageNumbers.push(<div onClick={onPageNumberClick} className={s.pageNumber}>{i}</div>);
        }
        pageNumbers.push(<div>...</div>);
    }

    if (currentPage + 4 < pageCount) {
        let startIndex;
        if(currentPage !== 1){
            startIndex = currentPage - 1;
        }else{
            startIndex = currentPage;
        }
        for (let i = startIndex; i < startIndex + 3; i++) {
            if(i === currentPage){
                pageNumbers.push(<div onClick={onPageNumberClick} className={`${s.pageNumber} ${s.active}`}>{i}</div>);
            }else{
                pageNumbers.push(<div onClick={onPageNumberClick} className={s.pageNumber}>{i}</div>)
            }
        }
        pageNumbers.push(<div>...</div>)
        for (let i = pageCount - 3; i < pageCount; i++) {
            pageNumbers.push(<div onClick={onPageNumberClick} className={s.pageNumber}>{i}</div>)
        }
    } else {
        for (let i = pageCount - 5; i <= pageCount; i++) {
            if(i === currentPage){
                pageNumbers.push(<div onClick={onPageNumberClick} className={`${s.pageNumber} ${s.active}`}>{i}</div>);
            }else{
                pageNumbers.push(<div onClick={onPageNumberClick} className={s.pageNumber}>{i}</div>)

            }
        }
    }

    return pageNumbers;
}
const Pagination: FC<PropsType> = React.memo(function Pagination(props){
    const onPageNumberClick = (e: React.MouseEvent<HTMLDivElement>) =>{

        const pageNumber = parseInt(e.currentTarget.innerHTML);
        props.setCurrentPage(pageNumber);
        props.getItems(pageNumber, '', null);
    }
    const pageNumbers = getPageNumbers(props.totalPageCount, props.currentPage, onPageNumberClick);
    return (
        <div className={s.pagination}>
            <div className={s.pageNumbers}>
                {pageNumbers}
            </div>
        </div>
    );
})

export default Pagination;