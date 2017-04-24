/**
 * Greets hello world.
 *
 * @param {String} query.name - The person to greet.
 */
export default async (ctx) => {
  const {name} = ctx.query
  const message = `Hello ${name || 'World'}!`

  console.log(`Sent message: '${message}'`)

  ctx.status = 200
  ctx.body = {message}
}
