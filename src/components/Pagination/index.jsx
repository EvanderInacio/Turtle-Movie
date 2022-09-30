
import { Pagination } from "@mui/material"


export function CustomPagination({ setPage, numOfPages = 100 }) {
  const handlePage = (page) => {
    window.scroll(0,0)
    setPage(page)
  }

  return (
    <div 
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: '2rem', 
      }}
    >
     <Pagination
        count={numOfPages} 
        onChange={(e) => handlePage(e.target.textContent)} 
        color="primary"
      />
    </div>
  )
}