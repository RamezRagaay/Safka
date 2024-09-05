import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function ProductsPagination({ totalPages }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const handlePageChange = (pageNumber) => {
    const current = new URLSearchParams(searchParams);
    current.set('page', pageNumber);
    router.push(`?${current.toString()}`);
  };

  // Determine the range of pages to display
  const pagesToShow = [];
  for (let i = Math.max(currentPage - 2, 1); i <= Math.min(currentPage + 2, totalPages); i++) {
    pagesToShow.push(i);
  }

  return (
    <Pagination className={`m-5`}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            className={`${currentPage === 1 ? 'hidden' : ''} cursor-pointer`}
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          />
        </PaginationItem>

        {currentPage > 3 && (
          <>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(1)}
              >
                1
              </PaginationLink>
            </PaginationItem>
            {currentPage > 4 && <PaginationEllipsis />}
          </>
        )}

        {pagesToShow.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              
              href="#"
							className={`${totalPages === 1 ? 'hidden' : ''} cursor-pointer`}
              isActive={currentPage === page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages - 2 && (
          <>
            {currentPage < totalPages - 3 && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            className={`${currentPage === totalPages ? 'hidden' : ''} cursor-pointer`}
            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
