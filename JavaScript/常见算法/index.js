/**
 * 设计一个方法 fetchLandlordByNameWithPropertyInfo
 * 接收两个参数 ('Bob', services)
 * 打印如下数据结构
{
  landlord: { name: 'Bob', propertyId: 3 },
  property: { name: 'Costco Wholesale', rooms: 11 },
  dateTime: '2022-06-08T04:59:48.737Z'
}
 */
const services = {
  fetchStatus: () => new Promise(resolve => setTimeout(() => resolve({
    time: new Date().toISOString(),
    ok: true,
  }), 110)),
  fetchLandlords: () => new Promise(resolve => setTimeout(() => resolve([
    { name: 'Bob', propertyId: 3 },
    { name: 'Kaitlyn', propertyId: 2 },
    { name: 'Alexios', propertyId: 1 },
  ]), 100)),
  fetchPropertyById: propertyId => new Promise(resolve => setTimeout(() => resolve(
    [
      {
        id: 1,
        name: 'Thrifty Foods',
        units: [{ name: '16409', rooms: 2 }, { name: '16418', rooms: 4 }, { name: '16403', rooms: 6 }],
      },
      {
        id: 3,
        name: 'Costco Wholesale',
        units: [{ name: '69A', rooms: 3 }, { name: '69B', rooms: 6 }, { name: '69C', rooms: 2 }],
      },
      { id: 2, name: 'Staples', units: null },
    ].find(({ id }) => id === propertyId)), 50)),
}
// 保持代码风格一致。 学习到了。
async function fetchLandlordByNameWithPropertyInfo(nameParam, { fetchStatus, fetchLandlords, fetchPropertyById }) {
  let { time } = await fetchStatus()
  let fetchLandlordsResult = await fetchLandlords();
  let landlordArray = fetchLandlordsResult.filter(({ name }) => name = nameParam)

  const [landlord] = landlordArray
  const { propertyId } = landlord

  let { units, name } = await fetchPropertyById(propertyId);

  let rooms = units.reduce((prev, current) => {
    prev += current.rooms
    return prev
  }, 0)

  return {
    landlord: landlord,
    property: { rooms, name },
    dateTime: time
  }
}

fetchLandlordByNameWithPropertyInfo('Bob', services)