import type { LoaderFunctionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  return json({ hello: 'world' })
}
