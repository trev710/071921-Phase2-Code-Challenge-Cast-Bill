import React from 'react';
import BillCard from './BillCard';

export default function BillCollection({allBills, onClickBill, onFireBill}) {

  return (
    <div className="ui four column grid">
      <div className="row">
      {allBills.map((bill) => (
        <BillCard 
        key={bill.id} 
        bill={bill}
        onClickBill={onClickBill}
        onFireBill={onFireBill} 
         /> ))}
      </div>
    </div>
  );
}