/*
	This module is used by the /projects endpoint to
	make calls to api.svelte.dev, which stores projects
	for each user. The leading underscore indicates that this is
	a private module, _not_ an endpoint — visiting /projects/_api
	will net you a 404 response.

	(The data on the todo app will expire periodically; no
	guarantees are made. Don't use it to organise your life.)
*/

const base = 'https://api.svelte.dev';

export interface ApiParams {
	method: string|'get';
	resource: string;
	data?: object;
}

interface LocalParams {
	userid: string|'all'
}

export interface RequestLocals {
	locals: LocalParams
}

export interface RequestParams {
	request: { formData: () => Promise<{
			get: (text: string) => string,
			has: (value: string) => boolean,
			reset: void
		}> },
	locals: LocalParams
}

export function api({method, resource, data}: ApiParams) {
	return fetch(`${base}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
