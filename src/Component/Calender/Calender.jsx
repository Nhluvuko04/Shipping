import React, { useState } from 'react';


const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const renderHeader = () => {
    return (
      <div className="header">
        <button onClick={prevMonth}>&#8249;</button>
        <span>{months[date.getMonth()]} {date.getFullYear()}</span>
        <button onClick={nextMonth}>&#8250;</button>
      </div>
    );
  };

  const renderDays = () => {
    return weekdays.map(day => (
      <div key={day} className="day">{day}</div>
    ));
  };

  const renderCells = () => {
    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const startDate = new Date(monthStart);
    startDate.setDate(startDate.getDate() - startDate.getDay());
    const endDate = new Date(monthEnd);
    endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));

    const cells = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      cells.push(
        <div key={currentDate} className={`cell ${currentDate.getMonth() !== date.getMonth() ? 'disabled' : ''}`}>
          {currentDate.getDate()}
        </div>
      );
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return cells;
  };

  const prevMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  };

  return (
    <div className="calendar">
      {renderHeader()}
      <div className="days">{renderDays()}</div>
      <div className="cells">{renderCells()}</div>
    </div>
  );
};

export default Calendar;
