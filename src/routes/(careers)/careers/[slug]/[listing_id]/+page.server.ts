import axiosfn from '$lib/axios';
import type { IJobListing } from '$lib/types/careers';

export async function load({ params }) {
	const response = await axiosfn.get(`/job-listings/${params.listing_id}`);
	const listing: IJobListing = response.data;
	return {
		listing
	};
}
