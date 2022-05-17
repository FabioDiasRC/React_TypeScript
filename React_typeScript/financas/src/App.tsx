import { useEffect, useState } from 'react';
import * as C from './App.styles'
import { Item } from './types/Item'
// import {Category} from './ types/Category';
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMonth, FilterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea'

function App() {

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(FilterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() => {
    
    let incomeOut = 0;
    let expenseCount = 0;

    for(let i in filteredList){
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeOut += filteredList[i].value
      }
    }

    setIncome(incomeOut);
    setExpense(expenseCount);

  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
  
      {/* {Area de informações} */}
      <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
      />
      {/* {Area de inserir informações} */}

      {/* {tabela de itens} */}
      <TableArea list={filteredList}></TableArea>

      </C.Body>
    </C.Container>
  );
}

export default App;
