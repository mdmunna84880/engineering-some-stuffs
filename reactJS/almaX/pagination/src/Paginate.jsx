
function Paginate({next, prev, onPage, totalPage, page}) {
    return ( <div>
        <button onClick={prev} disabled={page===0}>Prev</button>
        {Array.from({length: totalPage}, (_, i)=>i+1).filter((i)=>i-1 === page || Math.abs(page-i+1) === 1 || i === 1  || i === totalPage).map((p, i, arr)=><span key={p} >
            {p > 1 && Math.abs(page-arr[i-1]) > 1 && <span>...</span>}
            <button onClick={()=>onPage(p-1)}>{p}</button>
        </span>)}
        <button onClick={next} disabled={page === totalPage-1}>Next</button>
    </div> 
    );
}

export default Paginate;