import React, { useState, useEffect } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const API = 'http://localhost:8002/bills'

export default function App() {

  const [allBills, setAllBills] = useState([])

    useEffect(() => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => setAllBills(data))
    }, []);


  function setEnlisted(enlistedBill) {
    

    let updatedBill = { ...enlistedBill, enlisted: true }

    fetch(`http://localhost:8002/bills/${enlistedBill.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBill),
    }).then(setAllBills(allBills.map((bill) =>
    bill.id === enlistedBill.id ? { ...bill, enlisted: true } : bill
  )))

  }

  function setDelisted(DelistedBill) {
    

    let updatedBill = { ...DelistedBill, enlisted: false }

    fetch(`http://localhost:8002/bills/${DelistedBill.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBill),
    }).then(setAllBills(allBills.map((bill) =>
    bill.id === DelistedBill.id ? { ...bill, enlisted: false } : bill
  )))

  }

  const myBills = allBills.filter((bill) => bill.enlisted)

  function fireBill(billToFire) {
    
    setAllBills(allBills.filter(bill => bill.id !== billToFire));
  }


  return (
    <div>
      <BillsCast myBills={myBills} onClickBill={setDelisted} onFireBill={fireBill} />
      <BillCollection allBills={allBills} onClickBill={setEnlisted} onFireBill={fireBill} />
    </div>
  );
}