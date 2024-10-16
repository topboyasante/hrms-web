export function GetJobType(type: 'FULLTIME' | 'INTERNSHIP' | 'CONTRACT') {
	switch (type) {
		case 'FULLTIME':
			return 'Fulltime';
		case 'INTERNSHIP':
			return 'Internship';
		case 'CONTRACT':
			return 'Contract';
		default:
			return 'Unknown';
	}
}

