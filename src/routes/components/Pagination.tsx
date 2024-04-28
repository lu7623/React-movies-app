import { useNavigate, useParams } from "react-router-dom";
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";

export default function Pagination({max}: {max: number}) { 
  const navigate = useNavigate();
  const { pageId } = useParams();
  const pageNum = Number(pageId)
 
  let paginator =Math.floor(pageNum-1/5)
  const nextPage =
   pageNum< max 
      ? pageNum + 1
      : null;
  const prevPage = pageNum > 1 ? pageNum-1 : null;

  return (
    <>
      <div className="flex">
      <button disabled={!prevPage ? true : false} className="m-2 px-3 bg-slate-200 rounded flex items-center" onClick={() => navigate(`/page/1`)}><FaChevronLeft />
      <FaChevronLeft />
</button>
        <button disabled={!prevPage ? true : false} className="m-2 px-3 bg-slate-200 rounded flex items-center" onClick={() => navigate(`/page/${prevPage}`)}><FaChevronLeft /></button>
        <button className={pageNum === paginator+1 ? 'bg-orange-400 m-2 px-3  rounded' : "m-2 px-3 bg-slate-200 rounded"} onClick={() => navigate(`/page/${ paginator+1}`)}>{ paginator+1}</button>
        <button className={pageNum === paginator+2 ? 'bg-orange-400 m-2 px-3  rounded' : "m-2 px-3 bg-slate-200 rounded"} onClick={() => navigate( `/page/${ paginator+2}`)}>{paginator+2}</button>
        <button  className={pageNum === paginator+3 ? 'bg-orange-400 m-2 px-3  rounded' : "m-2 px-3 bg-slate-200 rounded"} onClick={() => navigate(`/page/${ paginator+3}`)}>{paginator+3}</button>
        <button  className={pageNum === paginator+4 ? 'bg-orange-400 m-2 px-3  rounded' : "m-2 px-3 bg-slate-200 rounded"} onClick={() => navigate(`/page/${ paginator+4}`)}>{paginator+4}</button>
        <button className={pageNum === paginator+5 ? 'bg-orange-400 m-2 px-3  rounded' : "m-2 px-3 bg-slate-200 rounded"} onClick={() => navigate(`/page/${ paginator+5}`)}>{paginator+5}</button>
        <button disabled={!nextPage ? true : false} className="m-2 px-3 bg-slate-200 rounded" onClick={() => navigate(`/page/${nextPage}`)}><FaChevronRight /></button>
        <button disabled={!nextPage ? true : false} className="m-2 px-3 bg-slate-200 rounded flex items-center" onClick={() => navigate(`/page/${max}`)}><FaChevronRight color="grey" /><FaChevronRight /></button>
      </div>
    </>
  )
}