export interface IPaginationProps {
  handlePageNumber: (page: number) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  totalPages: number;
  currentPage: number;
}
