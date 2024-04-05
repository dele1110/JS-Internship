const base = 'https://flint-brazen-catshark.glitch.me/';
const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;
const showItemsPerGaragePage = 7;
const showItemsPerWinersPage = 10;

export const getCars = async (page, limit = showItemsPerGaragePage) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  return {
    items: await response.json(),
    count: await response.headers.get('X-Total-Count'),
  };
};

export const getCar = async (id) => (await fetch(`${garage}/${id}`)).json();

export const createCar = async (body) => (
  await fetch(`${garage}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();

export const deleteCar = async (id) => (await fetch(`${garage}/${id}`, {
  method: 'DELETE',
})).json();

export const updateCar = async (body, id) => (await fetch(`${garage}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const startCar = async (id) => (await fetch(`${engine}?id=${id}&status=started`, {
  method: 'PATCH',
})).json();

export const stopCar = async (id) => (await fetch(`${engine}?id=${id}&status=stopped`, {
  method: 'PATCH',
})).json();

export const driveCar = async (id) => {
  const response = await fetch(`${engine}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
  return response.status === 200 ? { ...(await response.json()) } : { success: false };
};

export const getSortOrder = (sort, order) => (sort && order ? `&_sort=${sort}&_order=${order}` : '');

export const getWinners = async (page, sort, order, limit = showItemsPerWinersPage) => {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}&${getSortOrder(sort, order)}`);
  const items = await response.json();

  return {
    items: await Promise.all(
      items.map(async (winner) => ({
        ...winner,
        car: await getCar(winner.id),
      })),
    ),
    count: await response.headers.get('X-Total-Count'),
  };
};

export const getWinner = async (id) => (await fetch(`${winners}/${id}`)).json();

export const deleteWinner = async (id) => (await fetch(`${winners}/${id}`, { method: 'DELETE' })).json();

export const createWinner = async (body) => (
  await fetch(`${winners}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();

export const updateWinner = async (id, body) => (
  await fetch(`${winners}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();

export const getWinnerStatus = async (id) => (await fetch(`${winners}/${id}`)).status;

export const saveWinners = async ({ id, time }) => {
  const winnerStatus = await (await fetch(`${winners}/${id}`)).status;
  if (winnerStatus === 404) { await createWinner({ id, wins: 1, time }); } else {
    const winner = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: winner.wins + 1,
      time: time < winner.time ? time : winner.time,
    });
  }
};
