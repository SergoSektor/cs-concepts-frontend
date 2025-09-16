
import React from 'react';

function ConceptItem({ concept }) {
  return (
    <li className="concept-item">
      <h3>{concept.name}</h3>
      <p>{concept.definition}</p>
      <p>Уровень сложности: {concept.level}</p>
    </li>
  );
}

export default ConceptItem;
