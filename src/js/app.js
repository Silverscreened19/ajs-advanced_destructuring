export default function attackCharacteristics(obj) {
  const result = [];

  obj.special.forEach((item) => {
    if (!item.description) {
      result.push({
        id: item.id,
        name: item.name,
        icon: item.icon,
        description: 'Описание недоступно',
      });
    } else (result.push(item));
  });
  return result;
}
