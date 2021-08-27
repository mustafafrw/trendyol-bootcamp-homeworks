import React from "react";


export default function LoadMore(props) {

  const handleLoadMore = (event) => {
      event.preventDefault();
      props.onLoadMore();
  }

  if (props.hidden) {
    return null
  }

  return (
    <div className="load-more-container">

        <button
          onClick = { handleLoadMore }
          class="primary-button"
        >
          Load more
        </button> 

    </div>
  );
}