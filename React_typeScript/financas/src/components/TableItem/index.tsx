import * as C from './styles'
import {Item} from '../../types/Item'
import {formatDate} from '../../helpers/dateFilter'
import {categories} from '../../data/categories'

type Props = {
  item: Item
}

export const TableItem = ({item}:Props) => {
  return (
    <C.TableLine>
      <C.TableCollum>{formatDate(item.date)}</C.TableCollum>
      <C.TableCollum>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableCollum>
      <C.TableCollum>{item.title}</C.TableCollum>
      <C.TableCollum>
        <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
        R$ {item.value}
        </C.Value>
      </C.TableCollum>
    </C.TableLine>
  )
}