import css from "./LoadMoreBtn.module.css";

interface LoadMoreProps {
  onLoadMore: () => void
}
const LoadMoreBtn: React.FC<LoadMoreProps> = ({onLoadMore}) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onLoadMore}>
      Load more...
    </button>
  );
}

export default LoadMoreBtn