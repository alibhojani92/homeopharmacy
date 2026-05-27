let products = [];

export async function GET() {
  return Response.json(products);
}

export async function POST(req) {
  try {
    const body = await req.json();

    const newProduct = {
      id: Date.now(),
      ...body,
    };

    products.push(newProduct);

    return Response.json({
      success: true,
      product: newProduct,
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to save product" },
      { status: 500 }
    );
  }
}
