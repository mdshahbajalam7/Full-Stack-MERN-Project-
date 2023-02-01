import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import useStlyes from "./styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getpost } from "../../actions/posts";

function Paginations({ page }) {
  const classes = useStlyes();
  const Dispatch = useDispatch();
  const  {numberofpages}=useSelector((state)=>state.posts)
  useEffect(() => {
    if (page) {
      Dispatch(getpost(page));
    }
  }, [page]);
  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberofpages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/?page=${item.page}`} />
      )}
    />
  );
}

export default Paginations;
