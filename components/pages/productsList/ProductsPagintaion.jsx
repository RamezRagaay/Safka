// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"
// import { useRouter } from 'next/navigation';
// import { useSearchParams } from 'next/navigation';


// export default function ProductsPagintaion() {
// 	const searchParams = useSearchParams();
//   const router = useRouter();
  
//   // Get the current sort parameter from the URL
//   const page = searchParams.get('sort') || '';

//   // Function to handle updating the search params
//   const handleSortChange = (value) => {
//     const current = new URLSearchParams(searchParams);
//     if (value) {
//       current.set('sort', value);
//     }
//     else {
//       current.delete('sort');
//     }
//     // Navigate to the new URL with updated search params
//     router.push(`?${current.toString()}`);
//   };



// 	return (
// 		<Pagination>
// 			<PaginationContent>
// 				<PaginationItem>
// 					<PaginationPrevious  />
// 				</PaginationItem>
// 				<PaginationItem>
// 					<PaginationLink href="#">1</PaginationLink>
// 				</PaginationItem>
// 				<PaginationItem>
// 					<PaginationEllipsis />
// 				</PaginationItem>
// 				<PaginationItem>
// 					<PaginationNext href="#" />
// 				</PaginationItem>
// 			</PaginationContent>
// 		</Pagination>
// 	)
// }

// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"
// import { useRouter } from 'next/navigation';
// import { useSearchParams } from 'next/navigation';

// export default function ProductsPagination({ totalPages }) {
// 	const currentPage = parseInt(useSearchParams().get('page') || '1');
//   const searchParams = useSearchParams();
//   const router = useRouter();
  
//   // Function to handle page change
//   const handlePageChange = (pageNumber) => {
//     const current = new URLSearchParams(searchParams);
//     if (pageNumber) {
//       current.set('page', pageNumber);
//     } else {
//       current.delete('page');
//     }
//     // Navigate to the new URL with the updated page parameter
//     router.push(`?${current.toString()}`);
//   };

//   return (
//     <Pagination>
//       <PaginationContent>
//         <PaginationItem>
//           <PaginationPrevious 
// 					className={`${currentPage === 1 ? 'disabled' : ''} cursor-pointer`}
// 					onClick = { () => 
// 					handlePageChange(currentPage > 1 ? currentPage - 1 : 1 ) } />
//         </PaginationItem>

//         {
					
// 					[...Array(totalPages)].map((_, index) => (
// 						<PaginationItem key={index}>
// 							<PaginationLink
// 								href={`#`}
// 								isActive={currentPage === index + 1}
// 								onClick={() => handlePageChange(index + 1)}
// 							>
// 								{index + 1}
// 							</PaginationLink>
// 						</PaginationItem>
// 					))
// 				}

//         {totalPages > 5 && <PaginationEllipsis />}

//         <PaginationItem>
//           <PaginationNext onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)} />
//         </PaginationItem>
//       </PaginationContent>
//     </Pagination>
//   )
// }


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
