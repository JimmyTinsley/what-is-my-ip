async function handleRequest(request) {
  const ip = request.headers.get("cf-connecting-ip") 
  return new Response(ip,{status: 200})
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})
