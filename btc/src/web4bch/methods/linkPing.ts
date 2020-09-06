declare let web4bch: any;
declare const Web4Bch: any;

interface LinkPingInput {
  prompt: string; // string 'ping'
}

interface LinkPingOutput {
  response: string; // string 'pong'
}

export default function linkPing(data: LinkPingInput): Promise<LinkPingOutput> {
  if (typeof web4bch === 'undefined') {
    return Promise.reject({
      type: 'NO_PROVIDER',
    });
  }

  web4bch = new Web4Bch(web4bch.currentProvider);

  let response: string;
  response = 'pong'
  return response
    ? Promise.resolve({ response })
    : Promise.reject({
        type: 'CONNECTION_DENIED',
        description: 'User not logged into wallet.',
      });
}
