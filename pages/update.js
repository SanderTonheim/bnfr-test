import groq from 'groq'
import sanityClient from '../client'
// get data from cms
export async function getServerSideProps() {
	const data = await sanityClient.fetch(groq`*[_type == "medlem"]`)
	return {
		props: {
			data,
		},
	}
}

export default function handler({ data }) {
	console.log(data)
	const algoliasearch = require('algoliasearch')

	const client = algoliasearch('BC0Z4HS7B1', '285796df216a570721c98b33ba986821')
	const index = client.initIndex('test_index')

	data.map((item) => {
		const record = { objectID: item._id, name: item.name }
		index.saveObject(record).wait()
	})
}
