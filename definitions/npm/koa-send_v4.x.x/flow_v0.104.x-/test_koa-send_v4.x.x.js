import send from "koa-send";
import type { Options, SendResult } from "koa-send";

const ctx = {};
const path = "/";

// $FlowExpectedError[incompatible-call] (Must have ctx and path)
send();
// $FlowExpectedError[incompatible-call] (Must have path)
send(ctx);
send(ctx, path);

// $FlowExpectedError[prop-missing] (Can't use invalid option names)
send(ctx, path, { hide: true });
send(ctx, path, { hidden: true });

// $FlowExpectedError[incompatible-call] (Must use proper types for options)
send(ctx, path, { immutable: "true" });
send(ctx, path, { immutable: true });

send(ctx, path).then(result => {
  // $FlowExpectedError[incompatible-cast] (result should be a string)
  (result: number);
  (result: string);
});

async function sendAny(path: string, options: Options): SendResult {
  return await send(ctx, path, options);
}

sendAny(path, { root: '/root/path' });
