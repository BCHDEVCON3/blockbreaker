import { sendMessage } from '../core/messages';
import { METHOD } from '../../constants';

interface LinkPingInput {
  prompt: string; // string 'ping'
}

interface LinkPingOutput {
  response: string; // string 'pong'
}

export default function linkPing(data: LinkPingInput): Promise<LinkPingOutput> {
  return sendMessage({
    command: METHOD.linkPing,
    data,
  });
}
