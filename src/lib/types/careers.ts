export interface IJobListing {
	id: string;
	company_id: string;
	title: string;
	description: string;
	compensation: number;
	location: string;
	job_type: 'FULLTIME' | 'INTERNSHIP' | 'CONTRACT';
	is_remote: boolean;
	created_at: string;
	updated_at: string;
}

export interface IJobListingAPIResponse{
	company_name:string,
	jobs:IJobListing[]
}