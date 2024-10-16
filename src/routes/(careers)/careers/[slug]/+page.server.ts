import axiosfn from '$lib/axios';
import type { IJobListingAPIResponse } from '$lib/types/careers';

export async function load({ params }) {
	const response = await axiosfn.get(`/job-listings/company/${params.slug}`);
	const company: IJobListingAPIResponse = response.data;
	return {
		company
	};
}
