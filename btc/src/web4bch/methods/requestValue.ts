declare let web4bch: any;
declare const Web4Bch: any;

interface RequestValueInput {
  openValueRequest: boolean; // opens request for value
}

interface RequestValueOutput {
  value: string; // stringified value
}

export default function linkPing(data: RequestValueInput): Promise<RequestValueOutput> {
  if (typeof web4bch === 'undefined') {
    return Promise.reject({
      type: 'NO_PROVIDER',
    });
  }

  web4bch = new Web4Bch(web4bch.currentProvider);

  let value: string;
  value = 'No functionality with Badger'
  return value
    ? Promise.resolve({ value })
    : Promise.reject({
        type: 'CONNECTION_DENIED',
        description: 'User not logged into wallet.',
      });
}
