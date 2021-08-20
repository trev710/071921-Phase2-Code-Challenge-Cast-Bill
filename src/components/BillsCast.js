import React from 'react';
import BillCard from './BillCard'

export default function BillsCast({myBills, onClickBill, onFireBill}) {
  

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {myBills.map((bill) => (
        <BillCard 
        key={bill.id} 
        bill={bill}
        onClickBill={onClickBill}
        onFireBill={onFireBill} 
         /> ))}
        </div>
      </div>
    </div>
  );
}
