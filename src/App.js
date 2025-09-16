
import React, { useState } from 'react';
import ConceptList from './components/ConceptList';
import ConceptForm from './components/ConceptForm';
import './components/styles.css';

function App() {
  const [concepts, setConcepts] = useState([
    { id: 1, name: 'Алгоритмы', definition: 'Последовательность действий для решения задачи.', level: 3 },
    { id: 2, name: 'Структуры данных', definition: 'Способы организации данных для эффективного доступа и модификации.', level: 4 },
    { id: 3, name: 'Операционные системы', definition: 'Комплекс программ, управляющих ресурсами компьютера.', level: 5 },
    { id: 4, name: 'Компьютерные сети', definition: 'Совокупность компьютеров и устройств, соединенных для обмена данными.', level: 3 },
    { id: 5, name: 'Базы данных', definition: 'Организованная коллекция взаимосвязанных данных.', level: 4 },
    { id: 6, name: 'Машинное обучение', definition: 'Область ИИ, позволяющая системам обучаться на данных.', level: 5 },
  ]);

  const handleAddConcept = (newConcept) => {
    setConcepts((prevConcepts) => [...prevConcepts, newConcept]);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Список концепций компьютерных наук</h1>

      <ConceptForm onAddConcept={handleAddConcept} />

      <ConceptList concepts={concepts} />
    </div>
  );
}

export default App;
