"use client";

import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPrev: () => void;
    onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPrev, onNext }) => (
    <div className="flex items-center justify-between px-4 py-2 border-t border-blue-200">
        <button
            onClick={onPrev}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm rounded bg-blue-100 hover:bg-blue-200 disabled:opacity-50"
        >
            Prev
        </button>
        <span className="text-sm text-blue-800">
      Page {currentPage} of {totalPages}
    </span>
        <button
            onClick={onNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm rounded bg-blue-100 hover:bg-blue-200 disabled:opacity-50"
        >
            Next
        </button>
    </div>
);

export default Pagination;
