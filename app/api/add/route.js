export async function POST(request) {
  const body = await request.json();
  console.log(body);
  return Response.json({ message: `Hello World ${body.number}  ` });
}
