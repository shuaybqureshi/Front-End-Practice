const SEPARATOR = ', ';
const OTHERS_SEPARATOR = ' and ';
const OTHERS_LABEL = 'other';

function listFormat(itemsParam, options = {}) {
  if (!itemsParam || itemsParam.length === 0) {
    return '';
  }

  // No processing is needed if there's only one item.
  if (itemsParam.length === 1) {
    return itemsParam[0];
  }

  // Filter falsey values.
  let items = itemsParam.filter((item) => !!item);

  // Sort values.
  if (options.sorted) {
    items.sort();
  }

  // Remove duplicate values.
  if (options.unique) {
    items = Array.from(new Set(items));
  }

  // Length is specified and valid.
  if (options.length && options.length > 0 && options.length < items.length) {
    const firstSection = items.slice(0, options.length).join(SEPARATOR);
    const count = items.length - options.length;
    const secondSection = `${count} ${OTHERS_LABEL + (count > 1 ? 's' : '')}`;
    return [firstSection, secondSection].join(OTHERS_SEPARATOR);
  }

  // Case where length is not specified.
  const firstSection = items.slice(0, items.length - 1).join(SEPARATOR);
  const secondSection = items[items.length - 1];
  return [firstSection, secondSection].join(OTHERS_SEPARATOR);
}


listFormat(); // ''
listFormat([]); // ''

listFormat(['Bob']); // 'Bob'
listFormat(['Bob', 'Alice']); // 'Bob and Alice'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);
// 'Bob, Ben, Tim, Jane and John'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 4,
}); // 'Bob, Ben, Tim, Jane and 1 other'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  sorted: true,
}); // 'Ben, Bob, Jane and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
  length: 3,
  unique: true,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  unique: true,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'
