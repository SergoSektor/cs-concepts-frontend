
import React, { useState } from 'react';

function ConceptForm({ onAddConcept }) {
  const [name, setName] = useState('');
  const [definition, setDefinition] = useState('');
  const [level, setLevel] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = 'Название не может быть пустым';
    if (level === '' || isNaN(level) || Number(level) < 0) {
      errs.level = 'Уровень сложности должен быть числом ≥ 0';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newConcept = {
      id: Date.now(),
      name: name.trim(),
      definition: definition.trim(),
      level: Number(level),
    };
    onAddConcept(newConcept);

    setName('');
    setDefinition('');
    setLevel('');
    setErrors({});
  };

  return (
    <form className="concept-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Название:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? 'invalid' : ''}
        />
        {errors.name && <div className="error-text">{errors.name}</div>}
      </div>

      <div className="form-group">
        <label>Описание:</label>
        <textarea
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Уровень сложности:</label>
        <input
          type="number"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className={errors.level ? 'invalid' : ''}
        />
        {errors.level && <div className="error-text">{errors.level}</div>}
      </div>

      <button type="submit" className="btn-submit">
        Добавить концепцию
      </button>
    </form>
  );
}

export default ConceptForm;
