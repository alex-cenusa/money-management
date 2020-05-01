import React from 'react';
import Pdf from "react-to-pdf";
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';


const ref = React.createRef();
const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [4,2]
};

function App() {
  return (
    <GlobalProvider>
      <Pdf targetRef={ref} filename="money-report.pdf">
        {({ toPdf }) => <button className="extract" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div className="container" ref={ref}>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
