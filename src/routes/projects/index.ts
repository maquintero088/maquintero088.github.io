import { api, type ApiParams, type RequestLocals, type RequestParams } from './_api';

export const get = async ({ locals } : RequestLocals) => {
	// locals.userid comes from src/hooks.js
	const data: ApiParams = {
		method: 'get', resource: `projects/${locals.userid}`
	};
	const response = await api(data);

	if (response.status === 404) {
		// user hasn't created a project list.
		// start with an empty array
		return {
			body: { projects: [] }
		};
	}

	if (response.status === 200) {
		return {
			body: { projects: await response.json() }
		};
	}

	return {
		status: response.status
	};
};

export const post = async ({ request, locals }: RequestParams) => {
	const form = await request.formData();

	const data: ApiParams = {
		method: 'post',
		resource: `projects/${locals.userid}`,
		data: {
			text: form.get('text')
		}
	};
	await api(data);

	return {};
};

// If the user has JavaScript disabled, the URL will change to
// include the method override unless we redirect back to /projects
const redirect = {
	status: 303,
	headers: {
		location: '/projects'
	}
};

export const patch = async ({ request, locals }: RequestParams) => {
	const form = await request.formData();

	const request_data = {
		text: form.has('text') ? form.get('text') : undefined,
		done: form.has('done') ? !!form.get('done') : undefined
	};
	const data: ApiParams = {
		method: 'patch',
		resource: `projects/${locals.userid}/${form.get('uid')}`,
		data: request_data
	};
	await api(data);

	return redirect;
};

export const del = async ({ request, locals }: RequestParams) => {
	const form = await request.formData();

	const data: ApiParams = {
		method: 'delete',
		resource: `projects/${locals.userid}/${form.get('uid')}`
	};
	await api(data);

	return redirect;
};
