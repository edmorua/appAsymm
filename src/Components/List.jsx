import React from 'react';
import Item from './Item';

const List = ({listItem}) => {
  return (
    <div className='List'>
      {listItem.map((item) => {
        return (
        <Item
          title={item.title}
          image={item.image}
          id={item.id} 
        />
        )
      })}
    </div>
  )
}

export default List;