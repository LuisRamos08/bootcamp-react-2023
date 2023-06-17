const KeyStatelessItem = ({item, itemKey}) => {
  return (
    <button key={item.id} className={`btn btn-${item.color} keys-item`}>
      {`${item.label} (${itemKey})`}
    </button>
  );
};

export default KeyStatelessItem;
