import { v4 as uuid } from '@lukeed/uuid';

import * as cookie from 'cookie';

interface Event {
	request: { headers: { get:(value:string) => string } },
	locals: { userid: string|'all' }
}

interface EventHandler {
	event: Event,
	resolve: (event:Event) => Promise<{
		headers: { set: (name:string, value:string) => void }
	}>
}

export const handle = async ({ event, resolve }: EventHandler) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.userid = cookies['userid'] || uuid();

	const response = await resolve(event);

	if (!cookies['userid']) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers.set(
			'set-cookie',
			cookie.serialize('userid', event.locals.userid, {
				path: '/',
				httpOnly: true
			})
		);
	}

	return response;
};
