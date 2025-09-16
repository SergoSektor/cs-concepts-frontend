
import React, { useState, useMemo } from 'react';
import ConceptItem from './ConceptItem';

function ConceptList({ concepts }) {
  const [sortKey, setSortKey] = useState('name');

  const sortedConcepts = useMemo(() => {
    let sorted = [...concepts];
    if (sortKey === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortKey === 'levelAsc') {
      sorted.sort((a, b) => a.level - b.level);
    } else if (sortKey === 'levelDesc') {
      sorted.sort((a, b) => b.level - a.level);
    }
    return sorted;
  }, [concepts, sortKey]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(sortedConcepts.length / itemsPerPage);

  const getPageRange = () => {
    const delta = 1;
    const range = [];
    for (
      let num = Math.max(1, currentPage - delta);
      num <= Math.min(totalPages, currentPage + delta);
      num++
    ) {
      range.push(num);
    }
    return range;
  };

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const conceptsToDisplay = sortedConcepts.slice(startIdx, endIdx);

  return (
    <div>
      <div className="sort-container">
        <label>Сортировать по: </label>
        <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
          <option value="name">Название (A→Z)</option>
          <option value="levelAsc">Уровень сложности (возр.→убыв.)</option>
          <option value="levelDesc">Уровень сложности (убыв.→возр.)</option>
        </select>
      </div>

      <ul className="list-articles">
        {conceptsToDisplay.map((concept) => (
          <ConceptItem key={concept.id} concept={concept} />
        ))}
      </ul>

      {totalPages > 1 && (
        <nav className="pagination-nav">
          {currentPage > 1 && (
            <button onClick={() => setCurrentPage((prev) => prev - 1)}>
              Prev
            </button>
          )}

          {getPageRange().map((num) =>
            num === currentPage ? (
              <span key={num} className="page-number active">
                {num}
              </span>
            ) : (
              <button key={num} onClick={() => setCurrentPage(num)}>
                {num}
              </button>
            )
          )}

          {currentPage < totalPages && (
            <button onClick={() => setCurrentPage((prev) => prev + 1)}>
              Next
            </button>
          )}
        </nav>
      )}
    </div>
  );
}

export default ConceptList;
