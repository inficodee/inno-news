const baseUrl = import.meta.env.VITE_APP_API_URL

export const APISERVICE = {
	categories: `${baseUrl}/api/v1/categories`,
	posts: `${baseUrl}/api/v1/blogs`,
}
